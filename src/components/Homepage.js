import React from 'react'
import HeroImage from '../Assets/Fiber Starter Files/Assets/hero-Illustration.png'
import Star from '../Assets/Fiber Starter Files/Assets/star.svg'
import Checkmark from '../Assets/Fiber Starter Files/Assets/Checkmark.svg'

const Homepage = () => {
  return (
    <div className='px-36 bg-amber-50'>
        <nav className='nav--container flex justify-between py-6 items-center'>
            <h1 className='logo--fiber text-2xl font-bold'>Fiber</h1>
            <div className='nav--links font-semibold'>
                <ul className='flex space-x-8'>
                    <li>
                        <a href='#'>Community</a>
                    </li>
                    <li>
                        <a href='#'>Pricing</a>
                    </li>
                    <li>
                        <a href='#'>Features</a>
                    </li>
                </ul>
            </div>
            <div className='signup--in space-x-8 font-semibold'>
                <button type='button' className='sign--in'>Sign In</button>
                <button type='button' className='sign--up bg-purple-900 p-3 rounded-md text-white hover:bg-purple-950'>Sign Up</button>
            </div>
        </nav>

        {/* Hero */}
        <div className='hero--section flex space-x-6'>

            <div className='mt-32 basis-1/2'>
                <div className='rating flex space-x-2 mb-4'>
                    <div className='star flex space-x-1'>
                        <img src={Star} alt='star' />
                        <img src={Star} alt='star' />
                        <img src={Star} alt='star' />
                        <img src={Star} alt='star' />
                        <img src={Star} alt='star' />
                    </div>
                    <h1>Rated 4.8/5 (243 reviews)</h1>
                </div>
                <h1 className='font-bold text-6xl mb-4'>Create your portfolio in minutes</h1>
                <p className='mb-4 text-lg'>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                <div className='flex space-x-6 items-center mb-4'>
                    <button type='button' className='bg-purple-900 py-3 px-7 rounded-md text-white hover:bg-purple-950'>Start Free Trial</button>
                    <h1 className='font-semibold underline text-purple-900'>View Examples</h1>
                </div>
                <div className='flex space-x-4'>
                    <div className='flex space-x-2'>
                        <img src={Checkmark} alt='checked' />
                        <h1>No Credit Card Required</h1>
                    </div>
                    <div className='flex space-x-2'>
                        <img src={Checkmark} alt='checked' />
                        <h1>10 Free Templates</h1>
                    </div>
                   
                </div>
            </div>

            <div className='basis-1/2'>
                <img src={HeroImage} alt='portfolio' />
            </div>

        </div>
    </div>
  )
}

export default Homepage