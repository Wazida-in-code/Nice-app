import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      {" "}
      <div className="flex flex-col items-center gap-5">
        {" "}
        {/* Animated Loader */}{" "}
        <div className="relative w-16 h-16">
          {" "}
          <div className="absolute inset-0 rounded-full border-4 border-base-300"></div>{" "}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary animate-spin"></div>{" "}
          <div className="absolute inset-3 rounded-full bg-primary/10 animate-pulse"></div>{" "}
        </div>{" "}
        {/* Loading Text */}{" "}
        <div className="text-center">
          {" "}
          <h2 className="text-xl font-semibold text-base-content">
            {" "}
            Loading...{" "}
          </h2>{" "}
          <p className="text-sm text-base-content/50 mt-1">
            {" "}
            Please wait a moment{" "}
          </p>{" "}
        </div>{" "}
        {/* Animated Dots */}{" "}
        <div className="flex gap-1">
          {" "}
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>{" "}
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:150ms]"></span>{" "}
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:300ms]"></span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default loading;
