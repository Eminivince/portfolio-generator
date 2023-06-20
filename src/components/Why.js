import React from 'react'
import Code from '../Assets/Fiber Starter Files/Assets/code.svg'
import Time from '../Assets/Fiber Starter Files/Assets/time.svg'
import Sizes from '../Assets/Fiber Starter Files/Assets/allSizes.svg'
import Mainimage from '../Assets/Fiber Starter Files/Assets/Page Image.png'
import Avatar from '../Assets/Fiber Starter Files/Assets/User Avatar.svg'
import Avatar2 from '../Assets/Fiber Starter Files/Assets/User Avatar 32.svg'
import Avatar3 from '../Assets/Fiber Starter Files/Assets/User Avatar 2.svg'


const Why = () => {
  return (
    <div  className='mt-16 px-36'>
        <div className='why-section-container'>
            <h4 className='mb-4 text-purple-800 font-bold'>Why Fiber?</h4>
            <h1 className='text-4xl font-bold mb-9'>A good portfolio means good employability.</h1>
            <div className='flex justify-evenly space-x-16 text-lg mb-6'>
                <div>
                    <img src={Time} alt='clock' className='mb-2'/>
                    <h1 className='font-bold mb-2'>Build in minutes</h1>
                    <p>With a selection of permade templates, you can build out a portfolio in less than 10 minutes</p>
                </div>
                <div>
                    <img src={Code} alt='code' className='mb-2' />
                    <h1 className='font-bold mb-2'>Add custom css</h1>
                    <p>Customize your personal portfolio even more with the ability to add your own custom CSS styles.</p>
                </div>
                <div>
                    <img src={Sizes} alt='phone'className='mb-2' />
                    <h1 className='font-bold mb-2'>Responsive</h1>
                    <p>All Fiber templates are fully responsive to ensure the experience is seemless across all devices.</p>
                </div>
                
            </div>
            <img src={Mainimage} alt='mainimage' className='mb-8' />

            <div className='testimonials mb-8 flex space-x-5'>
                <div className='border-2 p-4'>
                    <div className='head flex space-x-6 mb-3'>
                        <img src={Avatar} alt='textimage' />
                        <div>
                            <div className='name font-bold text-purple-900'>
                                Sarah Andrews
                            </div>
                            <div className='revenue'>$100k in revenue</div>
                        </div>
                    </div>

                    <div className='text text-lg'>
                        <p>
                            Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k
                        </p>
                    </div>

                    <div className='button'>
                        <button type='button' className='border-2 w-full mt-3 p-2 font-semibold text-purple-900'>View Sarah's Portfolio</button>
                    </div>
                </div>
                <div className='border-2 p-4'>
                    <div className='head flex space-x-6 mb-3'>
                        <img src={Avatar3} alt='textimage' />
                        <div>
                            <div className='name font-bold text-purple-900'>
                                Sarah Andrews
                            </div>
                            <div className='revenue'>$100k in revenue</div>
                        </div>
                    </div>

                    <div className='text text-lg'>
                        <p>
                            Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k
                        </p>
                    </div>

                    <div className='button'>
                        <button type='button' className='border-2 w-full mt-3 p-2 font-semibold text-purple-900'>View Sarah's Portfolio</button>
                    </div>
                </div>
                <div className='border-2 p-4'>
                    <div className='head flex space-x-6 mb-3'>
                        <img src={Avatar2} alt='textimage' />
                        <div>
                            <div className='name font-bold text-purple-900'>
                                Sarah Andrews
                            </div>
                            <div className='revenue'>$100k in revenue</div>
                        </div>
                    </div>

                    <div className='text text-lg'>
                        <p>
                            Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k
                        </p>
                    </div>

                    <div className='button'>
                        <button type='button' className='border-2 w-full mt-3 p-2 font-semibold text-purple-900'>View Sarah's Portfolio</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Why