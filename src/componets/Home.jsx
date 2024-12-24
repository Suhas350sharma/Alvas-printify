import React, { useState } from "react";
import { PrinterSymbol } from "./printersymbol";

export function Homepage() {

  return (
    <div className="">
        <Navbar/>
        <PrinterButton/>
   </div>
  );
};

const PrinterButton=()=>{
  const [isPanelVisible,setIsPanelVisible]=useState(false);

  function togglePanel(){
    setIsPanelVisible(!isPanelVisible);

  }
  return (
    <div className="relative h-screen bg-gray-100 flex items-center justify-center">
      <button onClick={togglePanel}>
        <PrinterSymbol/>
      </button>
      
      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isPanelVisible ? "-translate-y-0" : "translate-y-full"
        }`}
        style={{ height: "30%" }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Choose an Option
          </h2>
          <div className="grid grid-rows-3 gap-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
             <OpenGallery/>
            </button>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition"
            onClick={()=> document.getElementById("file").click()}
            >
              Files
            <input type="file" id="file" style={{display:"none"}}/>
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition">
             Camera
            </button>
          </div>
        </div>
      </div>
    </div>
  ); 
}

const OpenGallery=()=>{
  console.log('hellojhsfxjyasf');

  function handleingphotos(event){
     const file=event.target.files[0];
     if(file){
      console.log('file',file)
     }
  }
  return(
    <>
      <button onClick={()=>document.getElementById("gallery").click()}> Gallery</button>
    <input 
    type="file"
    accept="images"
    id="gallery"
    onChange={handleingphotos}
    style={{display:'none'}}/>
    </>
  )

}

const Navbar=()=>{
    return(
        <div className="h-20 w-full bg-gray-500 flex justify-center items-center  ">
            <div className="text-2xl">
                Alvas Printify
            </div>
        </div>
    )
}


