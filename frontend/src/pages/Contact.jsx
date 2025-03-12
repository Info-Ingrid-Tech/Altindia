import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-3xl my-8 font-bold text-orange-500'>
        <p>CONTACT US</p>
        <div className='w-16 h-1 bg-orange-500 mx-auto mt-2'></div>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-lg shadow-lg' src={assets.contact_image} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-orange-500'>OUR OFFICE</p>
          <p className='text-gray-600'>CPRO, Tihar Jail Complex,Delhi Prisons <br /> New Delhi, India</p>
          <p className='text-gray-600'>Tel: (+91) 01143090500 <br /> Email: tyciafoundation@gmail.com</p>
          <p className='font-semibold text-lg text-orange-500'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-orange-500 px-8 py-4 text-sm text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300'>
            Explore Jobs
          </button>
        </div>
      </div>

    </div>
  )
}

export default Contact
