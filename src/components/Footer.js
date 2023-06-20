import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='footer--container flex px-36 space-x-8 mb-10'>
            <div className='basis-4/12'>
                <h1 className='font-bold mb-3'>Fiber</h1>
                <p className='mb-4'>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                <p>Made with 🖤 in the Netherlands </p>
            </div>
 
            <div className='basis-2/12'>
                <h1 h1 className='font-bold mb-3'>Sitemap</h1>
                <ul>
                    <li><a href='#'>Homepage</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Testimonials</a></li>
                    <li><a href='#'>Features</a></li>
                </ul>
            </div>
            <div className='basis-2/12'>
                <h1 h1 className='font-bold mb-3'>Resources</h1>
                <ul>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>FAQ</a></li>
                </ul>
            </div>
            <div className='basis-2/12'>
                <h1 h1 className='font-bold mb-3'>Company</h1>
                <ul>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Customer</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
            </div>
            <div>
                <h1 h1 className='font-bold mb-3'>Portfolio</h1>
                <ul>
                    <li><a href='#'>Sarah Andrews</a></li>
                    <li><a href='#'>Mathew Higgins</a></li>
                    <li><a href='#'>Janice Dave</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer