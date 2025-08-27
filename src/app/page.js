'use client';
import React, { useEffect } from "react";
import Listsection from "../../components/listOfcards/Listsection";
import Header from "../../components/header/header";
import {useState } from "react";

export default function JobsPage() {

const [jobs, setJobs] = useState([]);

useEffect(() => {
  const fetchJobs = async () => {
    try {
      const res = await fetch(`/api/engineeringHub?limit=${3}`); // call your backend API
      const data = await res.json();
      console.log("Fetched jobs:", data);

      if (data.success) {
        setJobs(data.jobs); // set jobs from API response
      } else {
        console.error("Failed to fetch jobs:", data.error);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  fetchJobs();
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header/>

      {/* Search & Filters */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <input
          type="text"
          placeholder="Search for opportunities, company..etc"
          className="w-full border border-gray-300 rounded-full p-3 text-gray-700 shadow-sm focus:outline-none"
        />
        <div className="flex justify-center space-x-4 mt-4">
          <button className="px-4 py-2 bg-gray-100 rounded-full">Jobs</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full">
            Internships
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full">
            Event Hiring
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-8 mb-12">
      <Listsection data={{ title: "Featured Jobs" }} jobs={jobs} />
      </div>
       {/* Admit Card Listings */}
      <div className="space-y-8 mb-12">
      <Listsection data={{ title: "Latest Admit Cards" }} jobs={jobs} />
      </div>

      <div className="space-y-8 mb-12">
      <Listsection data={{ title: "Latest Result" }} jobs={jobs} />
      </div>
      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          &copy; 2024 SarkariResultHUB. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
