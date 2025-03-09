"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="https://google.com">
          <span className="text-xl font-semibold">HacktivSpace</span>
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-600"
            >
              Resources ▼
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded-lg p-4">
                <Link href="/about" className="block hover:text-gray-600">About</Link>
                <Link href="/faq" className="block hover:text-gray-600">FAQ</Link>
                <Link href="/blog" className="block hover:text-gray-600">Blog</Link>
                <Link href="/changelog" className="block hover:text-gray-600">Changelog</Link>
              </div>
            )}
          </div>

          <Link href="/pricing" className="hover:text-gray-600">Pricing</Link>
          <Link href="/docs" className="hover:text-gray-600">Documentation</Link>
          <Link href="/github" className="hover:text-gray-600">GitHub</Link>
        </nav>
      </div>
    </header>
  );
}






