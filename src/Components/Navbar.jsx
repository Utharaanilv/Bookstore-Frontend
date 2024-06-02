import React, { useEffect, useState } from 'react'
import { FaBarsStaggered,  FaCartShopping,  FaXmark } from 'react-icons/fa6'
import { SiHatenabookmark } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/Cart'





function Navbar() {
  const[cart]=useCart()

    const[isMenuOpen,setisMenuOpen]=useState(false)
const[isSticky,setisSticky]=useState(false)

const toggleMenu=()=>{
  setisMenuOpen(!isMenuOpen);
}

useEffect(() => {
 const handleScroll=()=>{
  if(window.scrollY>100){
    setisSticky(true);
  }else{
    setisSticky(false)
  }
 }
 window.addEventListener("scroll",handleScroll);
return()=>{
  window.addEventListener("scroll",handleScroll);
}
  
}, [])

const navItems = [
    { link: "Home", path: "/home" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" }
   
   
  ];

  return (
  <>
  
  <header className='w-full bg-white fixed top-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky?"sticky top-0 left-0 right-0 bg-gray-300":""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <Link to="/home" className='text-2xl font-bold text-gray-700 flex items-center gap-2'>
            <SiHatenabookmark size={40} className='inline-block'/>Book Bliss!</Link>

            <ul className='md:flex  space-x-12 hidden'>
              {
                navItems.map(({link,path})=><Link key={path} to={path} 
                className='block text-base text-2xl text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
              }
<Link to={'/cart'}>  <div className='  bg-gray-300 hover:bg-black p-2 rounded flex text-white'><FaCartShopping 
style={{width:"70px",height:"20px"}} className='w-4 h-4 text-white' />{cart?.length}</div></Link>


            </ul>
           
           

            <div className='space-x-12 hidden lg:flex items-center'>
              <button>
                <FaBarsStaggered className='w-5 hover:text-blue-700'/>
              </button>
            </div>

          

            <div className='md:hidden'>
              <button onClick={toggleMenu} className='text-black focus:outline-none'>
                {
                  isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/>:<FaBarsStaggered className='h-5 w-5 text-black'/>
                }
              </button>

            </div>

        </div>

        {/* nav items for sm */}

        <div className={`space-y-4 px-4 mt-16 py7 bg-gray-400 ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"} `}>
          {
              navItems.map(({link,path})=><Link key={path} to={path} 
              className='block text-base text-white uppercase cursor-pointer mb-4 '>{link}</Link>)
          }
         <Link className='px-4 py-5' to={'/cart'}>
              <div  >
                <FaCartShopping className=' text-white' />
              </div>
            </Link>
        </div>
      </nav>
    </header>
  
  </>
  )
}

export default Navbar