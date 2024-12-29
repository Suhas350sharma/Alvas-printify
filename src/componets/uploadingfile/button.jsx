import { useState } from "react";
import { CameraCapture } from "./accesCamera";

 export function Button() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);6
  };

  return (
    <div className="flex justify-center mt-7 w-full">
    <div className="relative inline-block text-left ">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center 2 px-6 py-3 text-sm font-semibold text-white bg-indigo-700 rounded-lg shadow-lg hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all"
      >
        Choose an Option
        <svg
          className={`w-5 h-5 ml-2 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 z-20 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="py-2 ">
          
          <button className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors w-full  " ><CameraCapture/></button>
         <button   className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors w-full">Gallery</button>
         <button   className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors w-full">Files</button>
        </div>
      </div>
    </div>
    </div>
  );
}






