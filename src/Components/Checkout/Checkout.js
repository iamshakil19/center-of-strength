import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css'
const Checkout = () => {
    const handleSubmit = event => {
        event.preventDefault()
        toast.success('Thank you for booking', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='checkout-container'>
            <h2 className='text-white text-center text-xl font-medium'>Billing Details</h2>
            <form onSubmit={handleSubmit} className='inputs-field'>
                <div className='flex justify-center'>
                    <div className=''>
                        <p className='text-white mb-2'>Name</p>
                        <input className='outline-0 bg-transparent text-white input-style ' type="text" name="name" placeholder='Type your name' required />
                        <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className=''>
                        <p className='text-white mb-2 mt-5'>Email</p>
                        <input className='outline-0 bg-transparent text-white input-style ' type="email" name="email" placeholder='Type your email' required />
                        <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className=''>
                        <p className='text-white mb-2 mt-5'>Number</p>
                        <input className='outline-0 bg-transparent text-white input-style ' type="text" name="number" placeholder='Type your number' required />
                        <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className=''>
                        <p className='text-white mb-2 mt-5'>City</p>
                        <input className='outline-0 bg-transparent text-white input-style ' type="text" name="number" placeholder='Type your city name' required />
                        <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className=''>
                        <p className='text-white mb-2 mt-5'>Street Address</p>
                        <input className='outline-0 bg-transparent text-white input-style ' type="text" name="number" placeholder='Type your street address' required />
                        <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                    </div>
                </div>

                <div className='flex justify-center my-7'>
                    <input className='text-white text-lg font-semibold border py-1 px-4 rounded hover:bg-stone-800 duration-700 cursor-pointer' type="submit" value="Place Order" />
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </form>

        </div>
    );
};

export default Checkout;