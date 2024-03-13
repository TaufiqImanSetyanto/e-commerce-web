import React from "react";

export default function Loading() {
  return (
    <div className="col-span-full">
      <div className="bg-cyan-700 rounded-full w-7 h-7 mx-auto animate-bounce mt-10 opacity-70"></div>
      <p className="text-cyan-900 font-medium mt-2 animate-pulse">Loading</p>
    </div>
  );
}
