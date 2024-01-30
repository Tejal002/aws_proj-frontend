import { Icon } from '@iconify/react';
import InputText from '../components/shared/InputText';
import PasswordText from '../components/shared/PasswordText';
import { Link,useNavigate } from 'react-router-dom';
import React,{ useState } from 'react';
import { unAuthPostReq } from '../utils/serverHelper';
import { useCookies } from 'react-cookie';

const SignComponent = () => {
    
    const [email,setEmail]=useState("");
    const [confirmEmail,setConfirmEmail]= useState("");
    const [password, setPassword]= useState("");
    const [ userName,setUserName]= useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName, setLastName]= useState("");
    const [cookie,setCookie]=useCookies("token");
    const navigate=useNavigate("");
  

    const signup=async ()=>{
        
        if(email!==confirmEmail){
            alert('plz give valid email id');
            return;
        }
        const data={email,confirmEmail,password,userName,firstName,lastName};
       
        
        const response= await unAuthPostReq("/auth/register", data);
        
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
            <div className='inputRegion w-1/3 py-5 flex flex-col items-center ' >
                <div className='font-bold mb-5 p-2 text-2xl'>Signup for free to start listening..</div>
                <InputText
                    label="Email address"
                    placeholder=" Enter your email"
                    value={email}
                    setValue={setEmail}
                />
                <InputText
                    label="Confirm your Email"
                    placeholder="Enter your email again"
                    value={confirmEmail}
                    setValue={setConfirmEmail}
                />
                <PasswordText
                    label=" Create Password"
                    placeholder=" Create a Strong Password"
                    value={password}
                    setValue={setPassword}
                />
                <InputText
                    label="What should we call you"
                    placeholder="Enter a username"
                    value={userName}
                    setValue={setUserName}
                />
                <div className='w-full flex justify-around space-x-8'>
                <InputText
                    label="Firstname"
                    placeholder="Enter a first name"
                    value={firstName}
                    setValue={setFirstName}
                />
                 <InputText
                    label="Latname"
                    placeholder="Enter a last name"
                    value={lastName}
                    setValue={setLastName}
                />
                </div>

                <div className=' w-full flex items-center justify-center flex-row mt-7 '>
                    <button className='bg-green-300 px-6 py-3 rounded-full font-semibold' onClick={(e)=>{
                        e.preventDefault();
                        signup();
                    }}> SIGN UP </button>
                </div>
            
                <div className='w-full border-b border-solid border-gray-300 mt-5'/>
                <div className='my-6 font-semibold '>Already have an account?</div>

                <div className='border border-gray-500  text-gray-500 text- p-3 w-full rounded-full flex justify-center font-bold'>
                    <Link to="/login">
                     LOG IN    
                    </Link></div>
            </div>
            




        </div>
    )

};

export default SignComponent;