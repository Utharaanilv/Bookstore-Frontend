import React from 'react'
import Cards from '../Components/Cards'
import { Link } from 'react-router-dom'

import ExploreCards from '../Components/ExploreCards'
import Review from '../Components/Review'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


function Home() {
  
  return (
    <>
     <Navbar/>

      <div className='px-4 lg:px-24 flex items-center'
        style={{
          backgroundImage: "url('https://www.blurb.com/blog/wp-content/uploads/2019/06/How-to-self-publish-a-book_1-960x540.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
        }}>

        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
          <div className='md:w-1/2 space-y-8'>
            <h2 style={{fontFamily:"serif"}} className='text-5xl font-bold leading-snug text-black'>Buy and sell your books
              <span className='text-gray-800'><br /> for the best prices</span></h2>
            <p  className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum veniam nulla modi quo totam cumque quos facilis! Optio eveniet consequatur, laudantium iure numquam veniam facere laboriosam? Quod, consequuntur aut?</p>
            <div>
              <input type="search" name='search' id='search' placeholder='search a book' className='py-2 mr-2 px-2 rounded-s-sm outline-none' />
              <button className='bg-gray-800 px-6 py-2 
              text-white font-medium hover:bg-black transition-all ease-in duration-200 '>
                Search</button>
            </div>
          </div>
        </div>

      </div>
      <div className='my-16 px-4lg:px-24 '>
        <h2 className='text-5xl text-center font-bold text-black my-5'>Best Seller Books</h2>

      </div>
      <div>
        <Cards />
      </div>

      {/* banner */}
      <div className='mt-16 py-12 bg-gray-700  px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold  leading-snug'>Uncover endless adventures between the pages at our bookstore!</h2>
            <Link to={'/shop'} className='block'><button className='bg-blue-700 text-white font-semibold mt-6 px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code </button></Link>
          </div>
          <div>
            <img className='mr-6' style={{ width: "490px", height: "150px" }} src="https://static.rfstat.com/gm-media/template/234/9002d4bd01c9_1x.webp" alt="" />
          </div>
        </div>

      </div>

      {/* section 2 */}

      <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>

        <div className='md:w-1/2'>
          <img src="https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c99740fab952ee29d238d75272b98a61"
            alt="" className='rounded md:w-10/12' />

        </div>

        <div  className='md:w-1/2 space-y-6'>
          <h2 style={{fontFamily:"serif"}} className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite
            <span className='text-gray-800'> Book Here !!!</span></h2>
          <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita deleniti in harum quia odio, reprehenderit possimus id, esse eaque quod pariatur velit. Doloremque eum nam, esse magnam velit sint!</p>
          <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14 '>

            <div >
              <h3 className='text-3xl font-bold'>700+</h3>
              <p className='text-base'>Book Listing</p>
            </div>
            <div >
              <h3 className='text-3xl font-bold'>400+</h3>
              <p className='text-base'>Registered Users</p>
            </div>
            <div >
              <h3 className='text-3xl font-bold'>1200+</h3>
              <p className='text-base'>PDF Downloads </p>
            </div>

          </div>

          <Link to={'/shop'}><button 
          className='bg-blue-700 text-white font-semibold mt-6 px-5 py-2 rounded hover:bg-black transition-all duration-300'>
            Explore More</button></Link>
        </div>

      </div>

      {/* other books */}
      <div className='my-16 px-4lg:px-24 '>
        <h2 className='text-5xl text-center font-bold text-black my-5'>Explore more Books</h2>
        <div>
          <ExploreCards />
        </div>

      </div>



      <div className='px-4 lg:px-24 my-20 '>

        <div className=' flex flex-col md:flex-row justify-between items-center '>

          <div className='md:w-1/2' >
            <div >
              <img className='mb-2' style={{ width: "640px", height: "200px" }}
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/32a24cbe-c56d-453f-8634-bc3c462b9694.__CR0,0,970,300_PT0_SX970_V1___.png" alt="" />
            </div>

            <div style={{ width: "640px", height: "200px" }}>
              <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/58160698-dec9-4469-8fd2-5445dc69af73.__CR0,0,970,300_PT0_SX970_V1___.png" alt="" />
            </div>
          </div>

          <div className='md:w-1/2'> <img style={{ width: "700px", height: "410px" }}
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/744358bf-fad3-4c68-ae87-c1946748107e.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt="" />

          </div>

        </div>
      </div>


      {/* review */}

      <div>
        <Review />
      </div>

      


<Footer/>


    </>
  )
}

export default Home
