import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import { useCart } from '../Context/Cart';
import { Base_Url } from '../service/BaseUrl';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';

function Cart() {
  const [cart, setcart] = useCart();
  const [totals, settotals] = useState(0);

  // Total calculation
  const calculateTotal = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        totalPrice += price;
      }
    });
    return totalPrice;
  };

  useEffect(() => {
    settotals(calculateTotal());
  }, [cart]);

  const removeCatItem = (pid) => {
    try {
      let Cartitem = [...cart];
      let index = Cartitem.findIndex(item => item._id === pid);
      Cartitem.splice(index, 1);
      setcart(Cartitem);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='container mx-auto px-4 lg:px-24 items-center py-10 md:py-20'>
        <h4 className='text-center'>
          <div className='text-2xl font-bold'>
            {cart?.length ? `You have ${cart.length} items in your cart` : 'Your cart is empty !!!'}
          </div>
        </h4>

        <div className='flex flex-col md:flex-row justify-between mt-5 items-center'>
          <div className='flex flex-col gap-12 w-full md:w-2/3'>
            {cart?.map(p => (
              <div key={p._id} className='m-2 border rounded p-4 md:p-8 my-4 flex flex-col md:flex-row gap-4 md:gap-12'>
                <Link to={`/bookview/${p._id}`}>
                  <img src={`${Base_Url}/Uploads/${p.image}`} alt="" className='w-full md:w-48 h-auto' />
                </Link>
                <div className='flex flex-col justify-between'>
                  <div>
                    <div className='text-xl font-bold mb-4'>{p.title}</div>
                    <div className='mb-4'>Author: {p.author}</div>
                    <div className='mb-4'>Category: {p.category}</div>
                    <div className='text-amber-500 mt-2 flex gap-2 mb-5'>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <div>Price: $ {p.price}</div>
                  </div>
                  <div className='py-3'>
                    <button
                      onClick={() => removeCatItem(p._id)}
                      className='bg-red-500 px-4 py-2 text-white font-medium rounded mt-4 md:mt-0'>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='w-full md:w-1/3 text-center mt-10 md:mt-0'>
            <div className='text-3xl font-bold mb-4'>Total/Payment/Checkout</div>
            <div className='mt-4 px-4 py-4 text-center'>
              <h2 className='text-2xl font-bold mb-3'>Cart Summary</h2>
              <p className='mb-4'>Total | Payment | Checkout</p>
              <hr className='mb-5' />
              <h3>Total: ${totals}</h3>
              <div className='mt-5'>
                <button className='bg-gray-600 px-4 py-2 text-white font-medium rounded'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;