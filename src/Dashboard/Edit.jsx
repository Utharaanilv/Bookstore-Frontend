import React, { useEffect, useState } from 'react'
import { Button,Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  editBooks, getAllBooks } from '../service/AllApi';
import { useNavigate, useParams } from 'react-router-dom';
import { Base_Url } from '../service/BaseUrl';



function Edit() {
  
const navigate=useNavigate()

// normal inputs

const[normalInputs,setnormaInputs]=useState({
  author: "",
  title: "",
  category: "",
  description: "",
  price: ""
})



const { id } = useParams()




// upload image

const[image,setimage]=useState("")

const[preview,setpreview]=useState("")

const[existingImg,setexistingImg]=useState("")


// normal inputs

const getnormalInputs=(e)=>{
  const{name,value}=e.target 
  setnormaInputs({...normalInputs,[name]:value})
 
}
useEffect(() => {
    getsingleBook(
        
    )
}, [id])

const getsingleBook = async () => {
    const { books } = await getAllBooks("")
    console.log(books);
 
    let existingBooks=books.find(item => item._id === id)
    console.log(existingBooks);
    setnormaInputs(existingBooks)
    setexistingImg(existingBooks.image)

    // setnormaInputs(existingBooks);
}
console.log(existingImg);

// console.log(normalInputs);
// console.log(image);

useEffect(() => {
  if(image){
    setexistingImg("")
    URL.createObjectURL(image)
    setpreview(URL.createObjectURL(image))
  }
}, [image])




//   handlesubit

const handleSubmit=async(e)=>{
  e.preventDefault()
  const {author,title,category,description,price}=normalInputs
  if(!author||!title||!category||!description||!price){
      toast.warning('please fill the form completely')
  }else{
      toast.success('Book added ')

      const data =new FormData()
      data.append('author',author)
      data.append('title',title)
      data.append('category',category)
      data.append('description',description)
      data.append('price',price)
      image?data.append("image",image):data.append("image",existingImg)

      if(image){
        var headers= {
            "Accept":"*/*",
            "content-type":"multipart/form-data"
        }
      }
      else{
        var headers=""
      }

      const response=await editBooks(id,data,headers)
      console.log(response);

      if(response.status===200){
        navigate('/admin/dashboard/Manage')
      }

    
  }
}





  return (
    <>
            <div className='px-4 my-12'>
                <h2 className='mb-8 text-3xl font-bold'>Edit your book here</h2>
    
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
                                src={preview?preview:`${Base_Url}/Uploads/${existingImg}`}
    
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
                            required rows={5} />
                            
                    </div>
    
    
    <div>
    <Button onClick={e=>handleSubmit(e)} className='mt-5' type="submit">Update Book</Button>
    </div>
    
    
                </form>
                
    
            </div>
            <ToastContainer/>
           
       </>
  )
}

export default Edit