import { useState } from "react"

export const Home=()=>{
  const [files,setfiles]=useState([]);

  function filehandler(){
    const presentfile=Array.from(event.target.files);
    setfiles((prevfile)=>[...prevfile,...presentfile])
  }
  console.log([...files])
  return(
    <div className="bg-slate-100 h-screen w-full flex justify-center">
    <div className="container md:w-2/5 h-2/6 bg-white">
     <button onClick={()=>document.getElementById('file').click()} className="w-[] h-12 bg-blue-500">
     Alter Your Pdf Here
       <input type="file" id="file" onChange={filehandler} style={{display:'none'}} ></input>
     </button>

      <ul>
      {files.map((file,index)=>(
        <li key={index}>{file.name}</li>
      ))}
      </ul>
    </div>
    </div>
  )
}



