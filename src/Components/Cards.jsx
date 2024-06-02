import React, { useEffect, useState } from 'react'
import { Base_Url } from "../service/BaseUrl";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { getAllBooks } from '../service/AllApi';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from '../Context/Cart';
import { ToastContainer, toast } from 'react-toastify';


function Cards() {
  const [getBooks, setgetBooks] = useState([])
  const [cart, setcart] = useCart()

  const CardBooks = async () => {
    try {
      const res = await getAllBooks();
      setgetBooks(res.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  useEffect(() => {
    CardBooks();
  }, []);



  return (
    <div className='my-16 px-4 lg:px-24'>
      <div>

        <Swiper
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
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >

          {
            getBooks.map((item) => (
              <SwiperSlide className='mb-10 ' key={item.id}  >

                <Link to={`/bookview/${item._id}`}>
                  <div className='relative'>
                    <img src={`${Base_Url}/Uploads/${item.image}`} alt="" style={{ width: "100%", height: "100%" }} />
                  
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                    <p>$ <span>{item.price}</span></p>


                  </div>
                </Link>
                <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                      <button onClick={() => {
                        localStorage.setItem('cart',JSON.stringify([...cart,item]))
                        setcart([...cart, item])
                       
                      }}>
                        <FaCartShopping className='w-4 h-4 text-white' /></button>
                    </div>
              </SwiperSlide>
            ))
          }
        </Swiper>


      </div>
      <ToastContainer/>
    </div>
  )
}

export default Cards