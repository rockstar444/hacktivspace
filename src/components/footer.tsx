"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Youtube, Twitter, Instagram } from "lucide-react";

const mainLinks = [
  {
    title: "Product",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Research", href: "/research" },
      { name: "Products", href: "/products" },
      { name: "Help", href: "/help" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "People", href: "/people" },
      { name: "Careers", href: "/careers" },
      { name: "Conferences", href: "/conferences" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Left Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-xs mx-auto md:mx-0"
          >
            <h3 className="text-xl font-semibold tracking-wide">HacktivSpace</h3>
            <p className="text-md text-gray-400">
              Building the future with AI, Blockchain, and <span className="block">next-gen networks.</span>
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://www.linkedin.com/company/hacktivspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-1 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/HacktivSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Github className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.youtube.com/@HacktivSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://twitter.com/HacktivSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com/HacktivSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>

          </motion.div>

          {/* Middle and Right Section */}
          {mainLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4 w-full max-w-xs mx-auto md:mx-0"
            >
              <h3 className="text-xl font-semibold tracking-wide">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-lg text-gray-400 hover:text-white hover:underline transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-md text-gray-400"
        >
          <p className="flex items-center justify-center gap-2 text-lg">
            Made in India with <Heart className="h-5 w-5 text-red-500 hover:animate-pulse" />{" "}
          </p>
          <p className="mt-2 text-lg">© {new Date().getFullYear()} HacktivSpace. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
