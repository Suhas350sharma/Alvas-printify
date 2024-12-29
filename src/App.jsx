import { useState } from 'react'
import './App.css'
import { SignIn } from './componets/login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Signup } from './componets/Signup'

import { HomePage } from './componets/Home2'
import { AlteringFiles } from './componets/alteringfiles'
import { FileUploading } from './componets/uploadingfile/uploadingfile'



function App() {

  return (
    // <BrowserRouter> 
    //    <Routes>
    //      <Route path='/signin' element={<SignIn/>}/>
    //      <Route path='/signup'element={<Signup/>}/>
    //    </Routes>
    // </BrowserRouter>
   <FileUploading/>
  )
}

export default App
