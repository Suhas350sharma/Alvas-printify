import { Gallery } from "../icons/Gallery"

export const Images=()=>{
    return(
        <div>
            <button className="flex items-center px-4 py-3 text-xl font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors w-full" onClick={()=>document.getElementById('image').click()}>Gallery   <Gallery/></button>
            <input type="file" accept="image/*" id="image" style={{display:"none"}}></input>
        </div>
    )
}