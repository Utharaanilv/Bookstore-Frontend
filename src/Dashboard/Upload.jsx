import React, { useEffect, useState } from 'react'


import { Button,Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBooks } from '../service/AllApi';


function Upload() {

// normal inputs

const[normalInputs,setnormaInputs]=useState({
    author: "",
    title: "",
    category: "",
    description: "",
    price: ""
})

// upload image

const[image,setimage]=useState("")

const[preview,setpreview]=useState("")






// normal inputs

const getnormalInputs=(e)=>{
    const{name,value}=e.target 
    setnormaInputs({...normalInputs,[name]:value})
}
// console.log(normalInputs);
// console.log(image);

useEffect(() => {
    if(image){
      URL.createObjectURL(image)
      setpreview(URL.createObjectURL(image))
    }
  }, [image])


//   handlesubmit

const handleSubmit=async(e)=>{
    e.preventDefault()
    const {author,title,category,description,price}=normalInputs
    if(!author||!title||!category||!description||!price||!image){
        toast.warning('please fill the form completely')
    }else{
        toast.success('Book added ')

        const data =new FormData()
        data.append('author',author)
        data.append('title',title)
        data.append('category',category)
        data.append('description',description)
        data.append('price',price)
        data.append('image',image)

        const headers={
            "content-type":"multipart/form-data"
        }

        const response=await addBooks(data,headers)
        console.log(response);
    }
}


    return (
       <>
        <div className="container mx-auto lg:px-5 items-center min-h-screen py-10" 
        style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')",
         backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className='px-4 my-12'>
                <h2 style={{fontFamily:"initial",marginTop:"-22px"}} className='mb-8 text-3xl font-bold'>Upload your book here</h2>
    
                <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                    <div className='flex gap-8'>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="booktitle"
                                />
                            </div>
                            <TextInput id="booktitle"
                                type="text"
                                name='title'
                                value={normalInputs.title}
                                onChange={e=>getnormalInputs(e)}
                                placeholder="Book title"
                                required />
                        </div>
    
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="Author"
                                />
                            </div>
                            <TextInput id="Author"
                                type="text"
                                name='author'
                                value={normalInputs.author}
                                onChange={e=>getnormalInputs(e)}
                                placeholder="Author"
                                required />
                        </div>
    
    
                    </div>
    
                    <div className='flex gap-8'>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="Category"
                                />
                            </div>
                            <TextInput id="Category"
                                type="text"
                                name='category'
                                value={normalInputs.category}
                                onChange={e=>getnormalInputs(e)}
                                placeholder="Book Category"
                                required />
                        </div>
    
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="Price"
                                />
                            </div>
                            <TextInput id="Price"
                                type="text"
                                name='price'
                                value={normalInputs.price}
                                onChange={e=>getnormalInputs(e)}
                                placeholder="Book Price"
                                required />
                        </div>
    
    
                    </div>
                    <div className='flex gap-8'>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="Image"
                                />
                            </div>
                            <TextInput id="Image"
                                type="file"
                                name='image'
                                onChange={e=>setimage(e.target.files[0])}
                                placeholder=" upload Book image"
                                required />
                        </div>
                        <div className='lg:w-1/3 mt-3 '>
                            <img style={{ height: "80px", width: "80px", marginLeft: "10px" }}
                                src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApvD9sn2N0hFlRARVVcF_bp_NGvCIzdZbC3pxW2ghGA&s"}
    
                                alt="no image" />
                        </div>
                    </div>
    
                    <div>
                        <Textarea
                            id="description"
                            placeholder="Description"
                            name='description'
                            value={normalInputs.description}
                            onChange={e=>getnormalInputs(e)}
                            required rows={6} />
                            
                    </div>
    
    
    <div>
    <Button onClick={e=>handleSubmit(e)} className='mt-5 bg-gray-900' type="submit">Add new Book</Button>
    </div>
    
    
                </form>
                
    
            </div>
            </div>
            <ToastContainer/>
           
       </>
    )
}

export default Upload