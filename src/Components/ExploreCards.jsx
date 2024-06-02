import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { getAllBooks } from '../service/AllApi';
import { Base_Url } from '../service/BaseUrl';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function ExploreCards() {

    const[cards,setcards]=useState([]);
   
    const bookCards=async()=>{
        try {
            const res = await getAllBooks();
            setcards(res.books.slice(3,9)); 
          } catch (error) {
            console.error('Error fetching books:', error);
          }
    }

    useEffect(() => {
        bookCards()
    }, []);



  return (
    <>
      <div className='my-16 px-4 lg:px-24'>
          <Swiper  style={{width:"1040px",height:"350px"}}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
           
            {


                
                cards.map((items)=>(
                    
<SwiperSlide className='mb-10 ' key={items._id}  >

<img   src={`${Base_Url}/Uploads/${items.image}`} alt=""/> 
<div>
  <h3>{items.title}</h3>
  <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   
                </div>
 
</div>
{
 
 console.log("Type of Image Path:",  items.image)
  

}


</SwiperSlide>


         
                ))
               
            }
            
          </Swiper>
         
         
      </div>
    </>
  )
}

export default ExploreCards