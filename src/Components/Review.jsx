import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {FaStar }from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
function Review() {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
            Customers Review
        </h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border mb-6 '>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-5'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, libero voluptatibus tempora minima, id assumenda, repudiandae molestias aspernatur necessitatibus exercitationem qui at? Odit non atque esse, velit fugit sunt natus?</p>
                    <Avatar img="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg" alt="avatar of Jese" className='w-10 mb-4' rounded />
                    <h5 className='text--lg font-medium'>Mark Will</h5>
                    <p className='text-base'>CEO, Wisdom</p>

                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border mb-6 '>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-5'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, libero voluptatibus tempora minima, id assumenda, repudiandae molestias aspernatur necessitatibus exercitationem qui at? Odit non atque esse, velit fugit sunt natus?</p>
                    <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIrJCdakCvEvn3W-rPSxr0vQVhARxak-zw1DbynQ7yw&s" alt="avatar of Jese" className='w-10 mb-4' rounded />
                    <h5 className='text--lg font-medium'>Park Shin </h5>
                    <p className='text-base'>Writer</p>

                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border mb-6 '>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-5'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, libero voluptatibus tempora minima, id assumenda, repudiandae molestias aspernatur necessitatibus exercitationem qui at? Odit non atque esse, velit fugit sunt natus?</p>
                    <Avatar img="https://media.istockphoto.com/id/1488358643/photo/happy-business-portrait-of-black-woman-planning-company-project-goals-and-startup-management.webp?b=1&s=170667a&w=0&k=20&c=0geUzXKLXRAdrtFJzmKJCnKlm0-dSE3BYL0H6ws9rLg=" alt="avatar of Jese" className='w-10 mb-4' rounded />
                    <h5 className='text--lg font-medium'>Annie Will</h5>
                    <p className='text-base'>Writer</p>

                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border mb-6 '>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-5'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, libero voluptatibus tempora minima, id assumenda, repudiandae molestias aspernatur necessitatibus exercitationem qui at? Odit non atque esse, velit fugit sunt natus?</p>
                    <Avatar img="https://insightglobal.com/wp-content/uploads/2022/10/headshot-1024x683.jpg" alt="avatar of Jese" className='w-10 mb-4' rounded />
                    <h5 className='text--lg font-medium'>Lenly</h5>
                    <p className='text-base'>CEO, Blis</p>

                </div>
            </div>
            </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default Review