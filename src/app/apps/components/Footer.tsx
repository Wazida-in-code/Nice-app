import Link from 'next/link';
import React from 'react';

const Footer = () => {
     return (
    <footer className="bg-blue-100 text-slate-800 mt-20">
      <div className="w-11/12 max-w-7xl mx-auto py-12">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-slate-800">
              App<span className="text-violet-600">Nest</span>
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              Discover useful and productive apps designed to make
              your digital experience easier, smarter, and better.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Explore
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>
                <Link
                  href="/" className="hover:text-violet-600 transition">Home </Link>
              </li>

              <li>
                <a
                  href="/apps"
                  className="hover:text-violet-600 transition"
                >
                  Apps
                </a>
              </li>

              <li>
                <a
                  href="/installation"
                  className="hover:text-violet-600 transition"
                >
                  Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Community
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a
                  href="#"
                  className="hover:text-violet-600 transition"
                >
                  Contribute
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-violet-600 transition"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-violet-600 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              Have an idea?
            </h3>

            <p className="text-slate-600 mb-4">
              Help us make the app community better.
            </p>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition duration-300">
              Contribute
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-sm text-slate-500">
            © 2026 AppNest. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a
              href="#"
              className="hover:text-violet-600 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-violet-600 transition"
            >
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;