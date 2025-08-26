'use client';
import React from "react";
import Listsection from "../../components/listOfcards/Listsection";
import Header from "../../components/header/header";
import { useRouter } from "next/navigation";

export default function JobsPage() {
  const jobs = [
    {
      company: "NICE",
      title: "Software Engineer",
      location: "Hybrid - Pune",
      salary: "9-17 LPA",
      type: "Full Time",
      views: 2054,
      endDate: "30 Aug",
      logo: "https://via.placeholder.com/50"
    },
    {
      company: "Cummins",
      title: "SOFTWARE ENGINEER I",
      location: "Hybrid - Pune",
      salary: "9-15 LPA",
      type: "Full Time",
      views: 1997,
      endDate: "29 Aug",
      logo: "https://via.placeholder.com/50"
    },
    {
      company: "Abnormal AI",
      title: "Software Engineer I",
      location: "Hybrid - Bangalore Urban",
      salary: "22-25 LPA",
      type: "Full Time",
      views: 2096,
      endDate: "29 Aug",
      logo: "https://via.placeholder.com/50"
    }
  ];
  const router = useRouter();

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
