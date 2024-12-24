import { useEffect } from "react";
import { useState } from "react";
import { AlteringFiles } from "./alteringfiles";

export function HomePage(){
  const [currentTab,setcurrentTab]=useState('Alterfiles');
  const [tabData,settabData]=useState('');


  useEffect(function(){
    if(currentTab=='Alterfiles'){
      console.log("take data for to render Altering the files")
      settabData(<AlteringFiles/>)
    }
    else{
      console.log("take data fo render for Uploading the files");
      settabData("data for uploading the files")
    }
  },[currentTab])
  return(
    <div className="flex justify-center bg-slate-200 w-full  min-h-screen " >
      <div className="absolute top-5 flex border border-black rounded-full  bg-stone-200 ">
        <div className=" mr-1 border  rounded-full " style={{backgroundColor:currentTab=='Alterfiles'? 'blue':'rgb(231 229 228) ' }}>
      <button onClick={()=>setcurrentTab("Alterfiles")} className="text-2xl p-2 ml-1">Alter Files</button>
      </div>
      <div className="ml-1 border  rounded-full" style={{backgroundColor:currentTab=='Uploadfiles'?'blue':'rgb(231 229 228)'}}>
      <button onClick={()=>setcurrentTab("Uploadfiles")} className="text-2xl p-2 mr-1">Upload Files</button>
      </div>
      </div>
      <br></br>

      <br></br>
      <div className="absolute top-20  sm:w-4/6 sm:h-full h-full w-96">
        <div> {tabData}</div>

      </div>
     
    </div>
  )
}


