"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // using lucide icons for hamburger
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="max-w-full mx-auto px-4 sm:px-8 lg:px-[8rem] flex justify-between items-center mb-8 bg-white py-4 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-900">
        SarkariResult<span className="text-green-600">HUB</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-bold text-lg">
        <Link
          href="/"
          className={router.pathname === "/" ? "text-green-600" : ""}
        >
          Home
        </Link>
        <Link
          href="/sarkari-jobs"
          className={router.pathname === "/sarkari-jobs" ? "text-green-600" : ""}
        >
          Sarkari Jobs
        </Link>
        <Link
          href="/admit-card"
          className={router.pathname === "/admit-card" ? "text-green-600" : ""}
        >
          Admit Card
        </Link>
        <Link
          href="/results"
          className={router.pathname === "/results" ? "text-green-600" : ""}
        >
          Result
        </Link>
        <Link
          href="/free-test"
          className={router.pathname === "/free-test" ? "text-green-600" : ""}
        >
          Free Test
        </Link>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-full">
          + Host
        </button>
        <a href="#" className="text-gray-700">
          Login
        </a>
        <a
          href="#"
          className="border border-green-600 px-4 py-2 rounded-full text-green-600"
        >
          For Employers
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden z-50">
          <a href="#" className="text-gray-700 font-bold">
            Home
          </a>
          <a href="#" className="text-green-600 font-bold">
            Latest Jobs
          </a>
          <a href="#" className="text-gray-700 font-bold">
            Admit Card
          </a>
          <a href="#" className="text-green-600 font-bold">
            Result
          </a>
          <a href="#" className="text-gray-700 font-bold">
            Free Test
          </a>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full">
            + Host
          </button>
          <a href="#" className="text-gray-700">
            Login
          </a>
          <a
            href="#"
            className="border border-green-600 px-6 py-2 rounded-full text-green-600"
          >
            For Employers
          </a>
        </div>
      )}
    </header>
  );
}
