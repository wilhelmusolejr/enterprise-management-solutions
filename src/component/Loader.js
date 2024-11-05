import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-white bg-opacity-75">
      <div className="w-10 h-10 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
}
