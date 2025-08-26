import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";

// Initialize Firebase Admin SDK (only once)
if (!admin.apps.length) {
  if (
    !process.env.FIREBASE_PROJECT_ID ||
    !process.env.FIREBASE_CLIENT_EMAIL ||
    !process.env.FIREBASE_PRIVATE_KEY
  ) {
    throw new Error("Missing Firebase environment variables");
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Simple security: only allow requests with correct API_KEY
  if (req.headers["x-api-key"] !== process.env.API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // 1. Fetch external job API
    const response = await fetch("https://api.example.com/jobs"); // <-- replace with your API
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch external API" });
    }

    const jobs = await response.json();
    if (!Array.isArray(jobs)) {
      return res.status(400).json({ error: "Invalid API response" });
    }

    // 2. Batch update Firebase in chunks of 500
    const BATCH_SIZE = 500;
    for (let i = 0; i < jobs.length; i += BATCH_SIZE) {
      const batch = db.batch();
      jobs.slice(i, i + BATCH_SIZE).forEach((job) => {
        const docRef = db.collection("jobs").doc(job.id.toString());
        batch.set(docRef, job, { merge: true });
      });
      await batch.commit();
    }

    return res.status(200).json({ message: "Jobs updated successfully", count: jobs.length });
  } catch (error: any) {
    console.error("Error updating jobs:", error);
    return res.status(500).json({ error: error.message });
  }
}
