// pages/test-firestore.js
'use client';
import { useEffect, useState } from "react";
import {db} from '../../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

export default function TestFirestore() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const snap = await getDocs(collection(db, "job"));
      console.log(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setJobs(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Jobs from Firestore</h1>
      {jobs.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}
