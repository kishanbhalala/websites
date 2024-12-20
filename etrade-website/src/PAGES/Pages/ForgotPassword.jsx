import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <div className='photo-section '>
                <div className=' flex items-center justify-between  px-[100px] py-[40px] '>
                    <Link to="/">
                        <img src="../src/assets/pages/sign up/asset 0.png" alt="" />
                    </Link>
                    <span className='w-72 '>
                        <Link to="/SignIn" class="ri-arrow-left-s-line border p-3 text-lg rounded-md hover:bg-[#3577F0] hover:text-white hover:duration-300 hover:border-none"></Link>
                    </span>
                    <div className='flex items-center'>
                        <p className='text-[#292930] text-sm font-medium'>Already a member?</p>
                        <Link to="/SignIn" href="#" className=" relative px-10 py-5 rounded-md font-semibold ml-10 text-white bg-[#ff497c] 
                        before:absolute 
                        before:content-[''] 
                        before:w-[130px] 
                        before:rounded-md 
                        before:left-0 
                        before:right-0 
                        before:top-0 
                        before:bottom-0 
                        before:bg-[#ff497c]  
                        before:-z-10 
                        before:hover:scale-110  
                        before:duration-300 ">Sign In</Link>
                    </div>
                </div>

                <div className='absolute top-0 -z-10'>
                    <img className='h-screen' src="../src/assets/pages/sign up/asset 1.jpeg" alt="" />
                    <div className='absolute top-20  pl-[100px]'>
                        <p className='text-[#292930] font-bold text-3xl mt-16 w-72'>We Offer the Best Products</p>
                    </div>
                </div>
            </div>


            {/* form-section  */}
            <div className='ml-[50%] mt-20 pl-5'>
                <form>
                    <h1 className='text-[#292930] font-bold text-3xl'>Forgot Password?</h1>
                    <p className='text-gray-400 text-sm mt-5'>Enter the email address you used when you joined and we’ll<br /> send you instructions to reset your password.</p>

                    <div className='relative text-gray-500  mt-14'>
                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Email</label>
                        <input type="email" placeholder='annie@example.com' className='border border-gray-300 w-[400px] px-9 py-5 rounded-md font-normal focus:outline-blue-400' />
                    </div>

                    <div className='mt-14'>
                        <a href="#" className=" relative px-12 py-5  rounded-md font-semibold  text-white bg-[#3577F0] 
                        before:absolute 
                        before:content-[''] 
                        before:w-[265px] 
                        before:rounded-md 
                        before:left-0 
                        before:right-0 
                        before:top-0 
                        before:bottom-0 
                        before:bg-[#3577F0]  
                        before:-z-10 
                        before:hover:scale-110  
                        before:duration-300
                         ">Send Reset Instructions</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword
