import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center px-6">
      {" "}
      <div className="max-w-xl text-center">
        {" "}
        {/* 404 */}{" "}
        <div className="mb-6">
          {" "}
          <h1 className="text-[120px] sm:text-[160px] font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {" "}
            404{" "}
          </h1>{" "}
        </div>{" "}
        {/* Content */}{" "}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
          {" "}
          Page Not Found{" "}
        </h2>{" "}
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
          {" "}
          Oops! The page you’re looking for doesn’t exist or may have been moved
          somewhere else.{" "}
        </p>{" "}
        {/* Buttons */}{" "}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {" "}
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300"
          >
            {" "}
            ← Back to Home{" "}
          </Link>{" "}
        </div>{" "}
        {/* Small decoration */}{" "}
        <div className="mt-12 flex justify-center gap-2">
          {" "}
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>{" "}
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>{" "}
          <span className="w-2 h-2 rounded-full bg-pink-400"></span>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

export default NotFoundPage;
