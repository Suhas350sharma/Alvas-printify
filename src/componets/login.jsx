import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from './Images/Google.png'

export function SignIn(){
    const [showpassword,setshowpassword]=useState(false);
    const togglePassword=()=>{
        setshowpassword(!showpassword);
    }
    const navigate=useNavigate();

    const gotosignuppage=()=>{
        navigate('/signup');
    }
    return(
        <div className="flex justify-center items-center h-screen bg-blue-100">
         <div >
           
            
            <div className=" flex text-2xl justify-center " >
                Login
            </div>
          <br/>
            <div>
                <label htmlFor="email">Email:</label>
                <div className=" border-solid border-2 border-black-200">
                   <input type="email" placeholder="Enter Email" className="outline-none p-3"/> 
                </div>
            </div>
            <br/>
            <div >
                <label htmlFor="pasword">Password:</label>
                <div className="border-solid border-2 border-black-200">
                    <input type={showpassword? "text":"password"} placeholder="Enter password" className="outline-none p-3"/>
                </div>
                <input type="checkbox" checked={showpassword} onChange={togglePassword}/>
            </div>
            <br/>
            <div className="h-10 w-20px bg-green-300 flex justify-center border-solid border-2 border-green-300">
            <button className="outline-none">SIGN IN</button>
            </div>
            <br/>
            <div>
                <div className="flex">
                    <div className="">Forgot</div>
                    <div className="mx-2 text-blue-500 cursor-pointer"> Username/Password?</div>
                </div>
                <div className="flex">
                    <div>Dont't have an account?</div>
                    <a className="text-blue-500 text-1xl mx-2 cursor-pointer">
                        <button onClick={gotosignuppage}>Sign up</button>
                    </a>
                </div>
                <br/>
                
                <div>
                    <button>
                       <div className="h-10 w-20px bg-white flex justify-center border-solid border-2 border-white p-1">
                        <div>
                            <img className="fixed w-7 h-7" src={Image} alt="Image 1"></img>
                        </div>
                        <div className="mx-10 text-1xl">
                            continue with Google
                        </div>
                       </div>
                    </button>
                </div>
            </div>
        </div>
        </div>      
    )
}