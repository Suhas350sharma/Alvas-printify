import { Pdf } from "../icons/file"

export const Files=()=>{
    return(
        <div>
             <button  className="flex items-center px-4 py-3 text-xl font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors w-full"
               onClick={()=>document.getElementById('file').click()}>Files <Pdf/></button>
               <input type="file" id="file" style={{display:'none'}}></input>

        </div>
    )
}