import React from 'react'
import SignUpImage from '../Assets/Fiber Starter Files/Assets/Sign Up Image.png'
import Homepage from './Homepage'
import Why from './Why'
import Footer from './Footer'

const Login = () => {
  return (
    <div>
        <div className='loginpage--container flex space-x-6'>
            <div className='Login-container basis-1/2 flex flex-col pr-48 pl-48 mt-14'>
                <h1 className='mb-6 text-2xl font-bold'>Fiber</h1>
                <h1 className='mb-6 font-bold text-3xl'>Create your Fiber account</h1>
                <form className='Login--form flex flex-col'>
                    <label className='mb-1 font-semibold' for="name">Your Name</label>
                    <input className='p-2 rounded border-2 mb-3' type='text' placeholder='John Doe' id='name' />
                    <label className='mb-1 font-semibold' for="email">E-mail</label>
                    <input className='p-2 rounded border-2 mb-3' type='text' placeholder='john@example.com' id='name' />
                    <label className='mb-1 font-semibold' for="password">Password</label>
                    <input className='p-2 rounded border-2 mb-3' type='password' placeholder='At least 8 characters' id='name' />
                    <label className='mb-1 font-semibold' for="password">Confirm Password</label>
                    <input className='p-2 rounded border-2 mb-3' type='password' placeholder='Confirm Password' id='name' />
                </form>
                <h3 className='px-3 font-bold text-sm mb-6'>By creating an account on Fiber, you agree to the <span className='underline text-purple-900'>Terms & Conditions.</span></h3>
                <button type='button' className='bg-purple-900 p-2 rounded-md text-white font-semibold mb-4'>Create Fiber Account</button>
                <h3 className='text-center'>Already have an account? <span className='text-purple-900'>Sign in</span></h3>
            </div>

            {/* Login Hero section */}

            <div className='loginhero--container basis-1/2 pr-40 pl-40 bg-purple-900 text-center flex flex-col justify-center items-center pb-20 h-screen text-white'>
                <img src={SignUpImage} alt='loginhero' className='mt-28 mb-6'/>
                <h1 className='font-bold mb-4 text-3xl'>Unparalleled Templates</h1>

                <h1 className='mb-4 text-xl'>
                    Crafted by a team of professional designers, our templates are unparalled in the market.
                </h1>
                
                <div className='slider--circles flex space-x-1'>
                    <div className='circle1 rounded-full w-2 h-2 bg-white'></div>
                    <div className='circle1 rounded-full w-2 h-2 bg-gray-400'></div>
                    <div className='circle1 rounded-full w-2 h-2 bg-gray-400'></div>
                    <div className='circle1 rounded-full w-2 h-2 bg-gray-400'></div>
                    
                </div>
            </div>
        </div>

        <Homepage />
        <Why />
        <Footer />
    </div>
  )
}

export default Login