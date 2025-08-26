import React from "react";
import Header from "../../../components/header/header";

function page() {
  const jobs = [
    {
      company: "NICE",
      title: "Software Engineer",
      location: "Hybrid - Pune",
      salary: "9-17 LPA",
      type: "Full Time",
      views: 2054,
      endDate: "30 Aug",
      logo: "https://via.placeholder.com/50",
    },
    {
      company: "Cummins",
      title: "SOFTWARE ENGINEER I",
      location: "Hybrid - Pune",
      salary: "9-15 LPA",
      type: "Full Time",
      views: 1997,
      endDate: "29 Aug",
      logo: "https://via.placeholder.com/50",
    },
    {
      company: "Abnormal AI",
      title: "Software Engineer I",
      location: "Hybrid - Bangalore Urban",
      salary: "22-25 LPA",
      type: "Full Time",
      views: 2096,
      endDate: "29 Aug",
      logo: "https://via.placeholder.com/50",
    },
    {
      company: "NICE",
      title: "Software Engineer",
      location: "Hybrid - Pune",
      salary: "9-17 LPA",
      type: "Full Time",
      views: 2054,
      endDate: "30 Aug",
      logo: "https://via.placeholder.com/50",
    },
    {
      company: "Cummins",
      title: "SOFTWARE ENGINEER I",
      location: "Hybrid - Pune",
      salary: "9-15 LPA",
      type: "Full Time",
      views: 1997,
      endDate: "29 Aug",
      logo: "https://via.placeholder.com/50",
    },
    {
      company: "Abnormal AI",
      title: "Software Engineer I",
      location: "Hybrid - Bangalore Urban",
      salary: "22-25 LPA",
      type: "Full Time",
      views: 2096,
      endDate: "29 Aug",
      logo: "https://via.placeholder.com/50",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header />
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

      <div className="mb-12 flex justify-center items-center" >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%]">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 shadow-sm w-"
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

export default page;
