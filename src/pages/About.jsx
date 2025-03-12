import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-3xl my-8 font-bold text-orange-500'>
        <p>ABOUT US</p>
        <div className='w-16 h-1 bg-orange-500 mx-auto mt-2'></div>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-lg shadow-lg' src={assets.about_image} alt="About Project ALT" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Project ALT aims to address the problem of marginalized prisoners by providing quality legal
            guidance through an online platform. The project will leverage the expertise of experienced
            lawyers to improve access to justice and raise legal awareness among undertrials, convicts, and
            their families. Through a network of pro-bono lawyers, partnerships with legal aid organizations,
            and a user-friendly web platform, Project ALT aims to empower marginalized families and
            reduce their difficulties in navigating the justice system.
          </p>
          <b className='text-orange-500 text-lg'>Background</b>
          <p>
            The prison population in the country includes a significant number of individuals from
            marginalized communities, such as Muslims, Scheduled Castes, and Scheduled Tribes. The lack
            of quality legal aid and systemic biases contribute to their disproportionate representation in
            prisons. Additionally, prisoners often face difficulties in finding competent lawyers, resulting in
            wasted resources and a lack of legal awareness. These challenges underscore the need for
            Project ALT's intervention.
          </p>
        </div>
      </div>

      <div className='text-3xl my-8 font-bold text-orange-500 text-center'>
        <p>OUR PROCESS</p>
        <div className='w-16 h-1 bg-orange-500 mx-auto mt-2'></div>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-4'>
        <div className='border border-orange-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 shadow-lg'>
          <b className='font-extrabold text-lg text-center text-orange-500'>STEP ONE</b>
          <b className='text-orange-500'>Identifying marginalized prisoners</b>
          <p>We conduct legal literacy workshops in prisons to educate inmates and identify the most vulnerable prisoners in need of legal aid.</p>
        </div>
        <div className='border border-orange-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 shadow-lg'>
          <b className='font-extrabold text-lg text-center text-orange-500'>STEP TWO</b>
          <b className='text-orange-500'>On-ground support for booking appointments</b>
          <p>Our team meets families outside prisons to assist them in booking appointments with suitable panel lawyers for their legal cases.</p>
        </div>
        <div className='border border-orange-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 shadow-lg'>
          <b className='font-extrabold text-lg text-center text-orange-500'>STEP THREE</b>
          <b className='text-orange-500'>Online legal counseling with panel lawyers</b>
          <p>After securing an appointment, families consult panel lawyers online to discuss their legal queries and receive guidance on navigating their cases.</p>
        </div>
      </div>

    </div>
  )
}

export default About
