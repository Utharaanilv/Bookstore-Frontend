import Button from 'react-bootstrap/Button';

import React, { useEffect, useState } from 'react'

import { FaCartShopping, FaStar } from 'react-icons/fa6'
import { Card } from 'react-bootstrap';
import { getAllBooks } from '../service/AllApi';
import { Base_Url } from '../service/BaseUrl';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { useCart } from '../Context/Cart';


function Shop() {

  const [shop, setshop] = useState([])
  const [cart, setcart] = useCart()

  const shopBooks = async () => {
    try {
      const res = await getAllBooks();
      setshop(res.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  useEffect(() => {
    shopBooks()
  }, [])





  return (
<>
      <div>
        <Navbar/>
        <div className='px-4 lg:px-24 my-20 '>
  
          <div className=' flex flex-col md:flex-row justify-between items-center '>
  
            <div className='md:w-1/2' >
              <div >
                <img className='mb-2' style={{ width: "640px", height: "200px" }}
                  src="https://dynamic.brandcrowd.com/template/preview/design/48c864b0-93b0-4cb7-ac6d-3d1e36ee1fa0?v=4&designTemplateVersion=1&size=design-preview-standalone-1x" alt="" />
              </div>
  
            
            </div>
            <div>
            <img className='mb-2' style={{ width: "650px", height: "200px" }}
                  src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA0L210MDA2OWItMTUwMjI0LWZyZWVzdHlsZTEtaGktMDAxLWJsb2diYW5uZXIuanBn.jpg" alt="" />
            </div>
  
           
  
          </div>
        </div>
  
        {/* cards */}
  
        <div className='px-4 lg:px-24 my-20'>
    <div className='flex flex-wrap justify-between gap-1'>
      {
      shop.map((shops, index) => (
  
        
        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4'>
         <div className='relative'>
            <Link to={`/bookview/${shops._id}`}>
            <Card className='shadow-1xl bg-white px-4 rounded-lg border' style={{ width: "100%", height: "400px" }}>
              <Card.Img className='px-4 py-3' variant="top" style={{ height: "260px", objectFit: "cover" }} src={`${Base_Url}/Uploads/${shops.image}`} />
              <Card.Body>
                <Card.Title className='px-5 text-1xl font-medium'>{shops.title}</Card.Title>
                <div className='text-amber-500 px-4 mt-2 flex gap-2'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='flex justify-between align-items-center'>
                  <h1 className='text-2xl font-bold leading-snug text-black mt-4 px-3'>${shops.price}</h1>
                  <Button className='mt-5 bg-blue-600 px-4 py-2 text-white font-medium rounded' type="submit">
                    Buy Now</Button>
                </div>
              
              </Card.Body>
              
            </Card>

            </Link>
            <div className='absolute top-3 right-3 bg-gray-400 hover:bg-black p-2 rounded'>
            <button onClick={() => {
               localStorage.setItem('cart',JSON.stringify([...cart,shops]))
                        setcart([...cart, shops])
                       
                      }}>
            <FaCartShopping className='w-4 h-4 text-white'/></button>
          </div>
         </div>
        </div>
      ))}
    </div>
  </div>
       
  
  

  
      </div>
      <Footer/>
</>



  )
}

export default Shop

