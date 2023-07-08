import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      <span> Processing...</span>
    </div>
  );
}

export default loading;
