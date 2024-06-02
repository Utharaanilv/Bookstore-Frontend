import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { loginUser } from '../service/AllApi';

function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setlogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = login;

    if (!email || !password) {
      toast.warning('Please fill in both email and password fields.');
      return;
    }

    try {
      const response = await loginUser(login);

      if (response.status === 200 && response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      } else {
        toast.error('Incorrect email or password', {
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
      console.error('Error logging in:', error);
      toast.error('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 lg:px-24 items-center min-h-screen py-40" 
      style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')",
       backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="flex w-8/12 bg-white rounded-xl gap-4 mx-auto shadow-lg overflow-hidden">
          <div className="w-1/2 text-white" style={{ backgroundImage: "url('https://i.pinimg.com/736x/c8/66/c1/c866c18acf86de01bb7d618610eb6db4.jpg')" }}>
           <div className='px-6 py-7'>
              <h1 className='text-4xl font-bold px-5 py-6'>welcome</h1>
              <p style={{fontFamily:"sans-serif"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 At deleniti vero adipisci consequatur numquam pariatur blanditiis, aliquam provident in 
                 inventore maiores explicabo incidunt assumenda alias!</p>
           </div>
          </div>
          <div className="w-1/2 px-12 py-16">
            <h2 className="text-3xl mb-4">login</h2>
            <p className="mb-4">Login to your account</p>
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
              <div>
                <Label htmlFor="email1" value="Your email" />
                <TextInput name="email" value={login.email} onChange={handleInputChange} id="email1" type="email" placeholder="Email" required />
              </div>
              <div>
                <Label htmlFor="password1" value="Your password" />
                <TextInput name="password" value={login.password} onChange={handleInputChange} id="password1" type="password" placeholder="Password" required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <div>
                <h4>Don't have an account? <Link className="text-blue-700" to="/register">Register here</Link></h4>
              </div>
              <Button type="submit">Login</Button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default Login