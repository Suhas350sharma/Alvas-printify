import React, { useState,useRef} from "react";

export const Container = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [image, setImage]=useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const openCamera = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err) => console.error("Error accessing camera:", err));
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageData = canvasRef.current.toDataURL("image/png");
      setCapturedImage(imageData);
      setImage(imageData);
      closeCamera();
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOpen(false);
  };
  console.log(image.length);

  return (
    <div className="flex justify-center items-center">
      <div className="container sm:h-[900px] sm:w-[700px] h-dvh w-full bg-purple-300 mt-3">
   
      <div className="relative inline-block text-left  ">
 
      {/* Dropdown Button */}
      <div className=" flex justify-center">
      <div className=" ">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-indigo-700 rounded-lg shadow-lg hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all
          "
      >
        Choose an Option
        <svg
          className={`w-5 h-5 ml-2 transform transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
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
        className={`absolute right-0 z-20 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ${
          isDropdownOpen&&!isCameraOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="py-2">
          <button  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors w-full" onClick={openCamera}>Camera</button>
          <button  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors w-full">Gallery</button>
          <button  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors w-full">Files</button>
        </div>
      </div>
      </div>
      </div>
    
      </div>

      {isCameraOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <video ref={videoRef} className="w-full h-full object-cover bg-gray-200" />
            <div className="absolute bottom-8 flex justify-between w-full px-8">
              <button
                onClick={captureImage}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Capture
              </button>
              <button
                onClick={closeCamera}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <div>

      {capturedImage && (
        <div className="mt-4">
          <h3 className="text-center text-lg font-semibold mb-2">Captured Image:</h3>
          <img src={capturedImage} alt="Captured" className="rounded-md shadow-md" />
        </div>
      )}
      </div>
      <div>
      <canvas ref={canvasRef} className="hidden" width="640" height="480"></canvas>
      </div>
      </div>
    </div>
    </div>
  
  );
};

const app=()=>{
  return(
    <div>
    <div className="container">
      <div className="burroncomponent flex">
      <div className="button"></div>
      </div>
      <div className="image"></div>
    </div>
    </div>
  )
}
