import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllBooks } from '../service/AllApi';
import { Base_Url } from '../service/BaseUrl';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'


function BookView() {

    const [single, setsingle] = useState({})

    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        getsingleBook()
    }, [])

    const getsingleBook = async () => {
        const { books } = await getAllBooks()
        console.log(books);

        setsingle(books.find(item => item._id === id))
    }




    return (
        <>
        <Navbar/>
        {
            single?
      
           <div>
                <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center '>
    
    
                    <div className='md:w-1/2'>
                        <img style={{ width: "350px", height: "500px" }} 
                        src={`${Base_Url}/Uploads/${single.image}`}
                            alt="" className='rounded md:w-10/12' />
    
                    </div>
    
                    <div className='md:w-3/4 space-y-6'>
                        <h2 className='text-4xl font-bold my-5 md:w-5/6 leading-snug'>Buy Your Favorite
                            <span className='text-gray-800'> Book From Here !!!</span></h2>
                            <h2 className='text-3xl font-bold'>{single.title}</h2>
                            <h3 className='text-2xl'>Author:{single.author}</h3>
                            <h3 className='text-2xl'>Category:{single.category}</h3>
                            <h4><p className='mb-10 text-lg'>Description:{single.description}</p></h4>
                        
                        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14 '>
    
                            <div >
                                <h3 className='text-3xl font-bold'>700+</h3>
                                <p className='text-base'>Book Listing</p>
                            </div>
                            <div >
                                <h3 className='text-3xl font-bold'>400+</h3>
                                <p className='text-base'>Book Bought</p>
                            </div>
                            <div >
                                <h3 className='text-3xl font-bold'>1200+</h3>
                                <p className='text-base'>PDF Downloads </p>
                            </div>
    
                        </div>
    
                        <Link to={'/shop'}><button
                            className='bg-blue-700 text-white font-semibold mt-6 px-5 py-2 rounded hover:bg-black transition-all duration-300'>Buy Now</button></Link>
                    </div>
    
                </div>
                
           </div>:"nothing"
             }

<Footer/>

        </>
    )
}

export default BookView