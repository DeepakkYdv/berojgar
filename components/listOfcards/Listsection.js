'use client';
import React from "react";
import { useRouter } from "next/navigation";

function Listsection({data,jobs}) {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{data?.title}</h2>
        <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
          6925+ Openings
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-sm text-gray-500">{job.company}</p>
                <h3 className="font-semibold text-gray-800">{job.title}</h3>
              </div>
              <img src={job.logo} alt="logo" className="w-10 h-10 rounded" />
            </div>

            <p className="text-gray-600 text-sm">📍 {job.location}</p>
            <p className="text-gray-600 text-sm">₹ {job.salary}</p>
            <p className="text-gray-600 text-sm">👜 {job.type}</p>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Hiring Now
              </span>
              <span>👁 {job.views}</span>
              <span>Ends: {job.endDate}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button onClick={()=>router.push('/sarkari-jobs')} className="px-6 py-2 bg-green-100 text-green-700 rounded-full">
          See All →
        </button>
      </div>
    </div>
  );
}

export default Listsection;
