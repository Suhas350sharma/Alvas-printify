import { useState } from "react"

export const FileUpload=()=>{

    const [showOptions,setshowOptions]=useState(false);
    return(
        <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
            <div className="bg-white h-[600px] w-[450px] flex justify-center ">
                <div>
            <div onClick={()=>setshowOptions(!showOptions)}>
               <button>
                UPLOAD
               </button>
            </div>
            {showOptions&&<Options/>}
            <div>
                upload
            </div>
            <div>
                files
            </div>
            </div>
            </div>
        </div>
    )
}
const Options=()=>{
    return(
        <div>
            <div>
                <div>camera </div>
                <div> gallery</div>
                <div>Files</div>
            </div>
        </div>
    )

}