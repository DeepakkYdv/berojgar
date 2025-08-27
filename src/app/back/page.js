"use client";

import { useState } from "react";
import { writeBatch, collection, doc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Make sure this is correct

export default function HomePage() {
  const [loading, setLoading] = useState(false);

  function transformJobData(item) {
    return {
      organisationName: item.organisationName || "",
      opportunityName: item.opportunityName || "",
      organisationLogo: item.organisationLogo || "",
      city: item.city || "",
      state: item.state || "",
      minRange: item.minRange ?? null,
      maxRange: item.maxRange ?? null,
      salaryUnit: item.salaryUnit || "",
      salaryDisclosure: item.salaryDisclosure || "Not Disclosed",
      opportunityMode: item.opportunityMode || "",
      views: item.views ?? 0,
      applicationEndTime: item.applicationEndTime || null,
      applyLink: item.applyLink || "",
    };
  }

  function sanitizeFirestoreData(obj) {
    const cleanObj = {};
    for (const key in obj) {
      let value = obj[key];

      if (value === undefined) value = null;
      if (typeof value === "number" && (!isFinite(value) || isNaN(value))) value = null;
      
      cleanObj[key] = value;
    }
    return cleanObj;
  }

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/update-firebase", { method: "GET" });
      const result = await res.json();

      const jobs = result.data || []; 
      console.log('Fetched jobs:', jobs);
      if (jobs.length === 0) {
        console.log("No jobs found to update.");
        return;
      }

      const jobsCollection = collection(db, "jobs");
      const chunkSize = 100;
      for (let i = 0; i < jobs.length; i += chunkSize) {
        const chunk = jobs.slice(i, i + chunkSize);
        const batch = writeBatch(db);

        chunk.forEach((job) => {
          const data = transformJobData(job);
          const sanitizedJob = sanitizeFirestoreData(data);
          //console.log('Hii im Here??',sanitizedJob);
          const docRef = doc(jobsCollection); // Auto ID
          batch.set(docRef, {
            ...sanitizedJob,
            createdAt: Timestamp.fromDate(new Date()),
          });
        });

        await batch.commit();
        console.log(`Batch ${i / chunkSize + 1} committed`);
      }

      console.log("All jobs added successfully to Firestore");
    } catch (error) {
      console.error("Error updating jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleUpdate}
        className="px-6 py-3 bg-blue-600 text-white rounded-md"
        disabled={loading}
      >
        {loading ? (
          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
        ) : (
          "Update Firebase"
        )}
      </button>
    </div>
  );
}
