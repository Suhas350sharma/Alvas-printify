import {useState} from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { printPlugin } from '@react-pdf-viewer/print';

export const AlteringFiles=()=>{
  const defaultLayoutPluginInstance=defaultLayoutPlugin();
  const {print}=defaultLayoutPluginInstance.toolbarPluginInstance.printPluginInstance;

  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');
  const [files,setfiles]=useState('');
  const [viewPdf, setViewPdf]=useState(null);

  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    setfiles(selectedFile);
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setPdfFileError('');
            }
      }
      else{
        setPdfFile(null);
        setPdfFileError('Please select valid pdf file');
      }
    }
    else{ 
    }
  }
  const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
    }
    else{
      setViewPdf(null);
    }
  }
console.log()
  
  return(
    <div className="">
      <div className="flex justify-center">
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input type="file"  className='form-control' id='file'
          required onChange={handlePdfFileChange}
          style={{display:'none'}} />
          <div className=' mt-3  h-[45px] w-96 border  border-black rounded-full flex items-center '>
          <div className='ml-1 p-1'>
          <button onClick={()=>document.getElementById('file').click()} className='text-2xl border border-black rounded-3xl  bg-purple-500 text-white w-[140px] '> Choose Files</button>
          </div>
          <div>
          {pdfFile?<div className=' pl-2 ml-2  tracking-tight' style={{fontSize:files?files.name.length>10?'17px':'20px':''}}>{files.name.length>25?files.name.slice(0,25)+'....':files.name}</div>:<div className='text-xl pl-2 ml-2   tracking-tight'> No file choosen</div>}
        </div>
        </div>
        {pdfFileError&&<div className='error-msg font-medium tracking-tight text-red-500'>{pdfFileError}</div>}
      
        <div className='mt-3'>
        <button type="submit" className='btn btn-success btn-lg w-[80px] border border-green-500 rounded-xl bg-green-500'>
          UPLOAD
        </button>
        </div>
      </form>
      </div>
      <br></br>
      <div className="flex justify-center">

      <br></br>
      <div className={`${pdfFile?'border border-black rounded':''}'h-[657px] w-[400px] sm:w-[800px] sm:h-svh'`}>
      <div >
      {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" >
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]}  />
      </Worker></>}

      {!viewPdf&&<>No pdf file selected</>}
      </div>
      </div>
      </div>
    </div>
  )
}
