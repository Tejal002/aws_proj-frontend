import { Icon } from '@iconify/react';
import InputText from '../components/shared/InputText';
import PasswordText from '../components/shared/PasswordText';
import { Link,useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {unAuthPostReq } from '../utils/serverHelper';
import { useState } from 'react';

const LoginComponent = () => {
  
    const [email,setEmail]=useState("");
    const [password, setPassword]= useState("");
    const [cookie,setCookie]=useCookies("token");
    const navigate=useNavigate("");

    const login=async ()=>{
 
        const data={email,password};
       
        
        const response= await unAuthPostReq("/auth/login", data);
        
        if(response && !response.err){
            console.log(response);
        
            const token= response.token;
            const date= new Date();
            date.setDate(date.getDate()+20);
            setCookie("token",token,{path:"/",expires:date});
            alert("Success");
           navigate("/home");
            

        }
        else{
            alert("Failure");
        }
        
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className='w-full border-b border-solid border-gray-300 p-5 flex justify-center '>
                <Icon icon="logos:spotify" width="145" height="37" />
            </div>
            <div className='inputRegion w-1/3 py-5 flex flex-col items-center' >
                <div className='font-bold mb-5 p-2'>Log in to Spotify</div>
                <InputText
                    label="Email or username"
                    placeholder="Email or username"
                    value={email}
                    setValue={setEmail}
                />
                <PasswordText
                    label="Password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />
                <div className=' w-full flex items-center justify-end flex-row mt-7 '>
                    <button className='bg-green-300 px-6 py-3 rounded-full font-semibold' onClick={(e)=>{
                        e.preventDefault();
                        login();
                    }}> LOG IN </button>
                </div>
            
                <div className='w-full border-b border-solid border-gray-300 mt-5'/>
                <div className='my-6 font-semibold '>Don't have an account?</div>

                <div className='border border-gray-500  text-gray-500 text- p-3 w-full rounded-full flex justify-center font-bold'>
                    <Link to='/signup'> SIGN UP FOR SPOTIFY</Link>
                   
                    </div>
            </div>
            




        </div>
    )

};

export default LoginComponent;