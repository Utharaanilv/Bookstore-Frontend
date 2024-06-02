import React from 'react'
import { SiHatenabookmark } from 'react-icons/si'
import { Link } from 'react-router-dom'
import Login from './Login'


function LandingPage() {

    return (
        <div >


            <div className='px-4 lg:px-24  items-center'


                style={{
                    backgroundImage: "url('https://www.blurb.com/blog/wp-content/uploads/2019/06/How-to-self-publish-a-book_1-960x540.jpg')",
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }}>
                <div>
                    <Link to="/home" className='text-2xl font-bold text-gray-700 flex px-4 py-4 items-center gap-2'>
                        <SiHatenabookmark size={40} className='inline-block' />Book Bliss!</Link>
                </div>

                <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                    <div className='md:w-1/2 space-y-8'>
                        <h2 className='text-5xl font-bold leading-snug text-black'>Buy and sell your books
                            <span className='text-gray-800'><br /> for the best prices</span></h2>
                        <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum veniam nulla modi quo totam cumque quos facilis! Optio eveniet consequatur, laudantium iure numquam veniam facere laboriosam? Quod, consequuntur aut?</p>
                        <div>

                            <div>
                                <Link to={'/login'}>
                                    <button className='font-bold text-white px-4 py-2 rounded bg-gray-700 text-1xl'>
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LandingPage