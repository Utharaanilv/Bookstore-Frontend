import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

import { registerUser } from '../service/AllApi';
import { Bounce, ToastContainer, toast } from 'react-toastify';


function Register() {

  const [data,setdata]=useState({
    username:"",
    email:"",
    password:""
  });
  const navigate = useNavigate()

const getInputs=(e)=>{
  const {name,value}=e.target
  setdata({...data,[name]:value})
}
console.log(data);

const handleRegister=async(e)=>{
  e.preventDefault()
  const{username,email,password}=data
  if (!username || !email || !password) {
    toast.warning('please fill the form completely', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    return;
}

if (password.length < 8) {
   
    toast.warning('Password must be at least 8 characters long', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    return;
}

try {
    const response = await registerUser(data);
    console.log(response);
    
    if (response.status === 200) {
       
        toast.success('Registration successful!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        navigate('/login')
    } else if (response.status === 406) {
        
        toast.warning('User already exists', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    } else {
       
        toast.error('Registration failed. Please try again', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
} catch (error) {
    console.error("Registration failed:", error);
   
    toast.error('Registration failed. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}

}



  return (
   <>
      <div >


        <div className='px-4 lg:px-24  items-center min-h-screen py-40'


          style={{
            backgroundImage: "url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')",
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
          }}>
          <div className='container mx-auto'>
            <div className='flex w-8/12 bg-white rounded-xl gap-4 mx-auto shadow-lg overflow-hidden '>
              <div className='w-1/2 text-white' style={{ backgroundImage: "url('https://i.pinimg.com/736x/c8/66/c1/c866c18acf86de01bb7d618610eb6db4.jpg')" }}>
               <div className='px-4 py-5'>
                  <h1 style={{fontFamily:"sans-serif"}}  className='text-4xl px-5 py-7 font-bold'>Register Here !!!</h1>
                  <p className='px-4 py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                     deleniti vero adipisci consequatur numquam pariatur blanditiis, 
                     aliquam provident in inventore maiores explicabo incidunt assumenda   alias!</p>
               </div>
              </div>
              <div className='w-1/2 px-12 py-16'>
                <h2 className='text-3xl font-bold mb-4'>Register</h2>
                
                <div>
                  <form className="flex max-w-md flex-col gap-4">
                  <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name1" value="Your name" />
                      </div>
                      <TextInput 
                      name='username'
                      value={data.username}
                      onChange={e=>getInputs(e)} 
                      id="name1" type="text" 
                      placeholder="Name" 
                      required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                      </div>
                      <TextInput 
                      name='email'
                      value={data.email}
                      onChange={e=>getInputs(e)} 
                      id="email1" type="email" 
                      placeholder="Email" 
                      required />
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                      </div>
                      <TextInput
                      name='password'
                      value={data.password}
                       onChange={e=>getInputs(e)} 
                       id="password1" 
                       type="password" 
                       required />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <div>
        <h4>Already registered? Click here <a ><Link className='text-blue-700' to={'/register'}>Login</Link></a>
          </h4>
         
      </div>

                    <Button onClick={e=>handleRegister(e)} >Register</Button>
                  </form>
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>
      <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition="Bounce" // Corrected syntax
/>
      
    </>
  )
}

export default Register