import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const navigate=useNavigate();
    const [showpassword,setshowpassword]=useState(false)
    const [confirmshowpasowrd,setconfirmsgowpassword]=useState(false);
    const [Password,setPassword]=useState('');
    const [confirmPassword,setconfirmPassword]=useState('')

    const gotosigninpage=()=>{
        navigate('/signin');
    }
    const togglePassword=()=>{
        setshowpassword(!showpassword);
    }
    const confirmtogglePassword=()=>{
        setconfirmsgowpassword(!confirmshowpasowrd);
    }
    const homepage=()=>{
        if(Password!==confirmPassword){
            alert("password must be same")
        }
        else{
            console.log("welcome to home page");
        }
    }
    
    return(
    <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className=" ">
        <div className=" flex text-2xl justify-center " >
                SignUp
        </div>
        <br/>
        <div>
            <span>Email:</span>
            <div className=" border-solid border-2 border-black-200">
                <input type="email" placeholder="Enter Email" className="outline-none p-3"/> 
            </div>
        </div>
        <br/>
        <div >
            <label htmlFor="pasword">Password:</label>
            <div className="border-solid border-2 border-black-200">
                <input value={Password} onChange={(e)=>setPassword(e.target.value)} type={showpassword? "text":"password"} placeholder="Enter password" className="outline-none p-3"/>
            </div>
            <input type="checkbox" checked={showpassword} onChange={togglePassword}/>
        </div>
  
        <div >
            <label htmlFor="password">Confirm Password:</label>
            <div className="border-solid border-2 border-black-200">
                <input value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} type={confirmshowpasowrd?"text":"password"} placeholder="Enter password"  className="outline-none p-3"/>
            </div>
            <input type="checkbox" checked={confirmshowpasowrd} onChange={confirmtogglePassword}/>
        </div>
        <br/>
        <div className="h-10 w-20px bg-green-300 flex justify-center border-solid border-2 border-green-300">
            <button onClick={homepage} className="outline-none">SIGN UP</button>
        </div>
        <br/>
        <div>
            <div className="flex">
                <div>Alredy Registered?</div>
                <a className="text-blue-500 text-1xl mx-2 cursor-pointer">
                    <button onClick={gotosigninpage}>Sign up</button>
                </a>
            </div>
        </div>
        </div>
    </div>
    )
}