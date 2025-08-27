import { NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig"; // your Firebase Admin SDK initialization
import { collection, getDocs, limit, query } from "firebase/firestore";

export async function GET(req) {
  try {
    // 1. Create a query to limit to 3 documents
    const lim = req.nextUrl.searchParams.get("limit");
    let q = null;
    if (lim) {
       q = query(collection(db, "jobs"), limit(lim));
    } else {
      q = null;
    }

    // 2. Fetch documents using the query
    let snap = null;
    q
      ? (snap = await getDocs(q))
      : (snap = await getDocs(collection(db, "jobs")));
    const jobs = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({ success: true, jobs });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
