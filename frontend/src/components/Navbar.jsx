import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      {/* Logo */}
      <img onClick={() => navigate('/')} className='w-32 cursor-pointer' src={assets.logo} alt="Logo" />

      {/* Navigation Links */}
      <ul className='md:flex items-start gap-8 font-medium hidden'>
        <NavLink to='/'>
          <li className='py-1 relative group'>HOME
            <hr className='border-none outline-none h-0.5 bg-orange-500 w-0 group-hover:w-3/5 transition-all duration-300 m-auto' />
          </li>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1 relative group'>ALL LAWYERS
            <hr className='border-none outline-none h-0.5 bg-orange-500 w-0 group-hover:w-3/5 transition-all duration-300 m-auto' />
          </li>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1 relative group'>ABOUT
            <hr className='border-none outline-none h-0.5 bg-orange-500 w-0 group-hover:w-3/5 transition-all duration-300 m-auto' />
          </li>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1 relative group'>CONTACT
            <hr className='border-none outline-none h-0.5 bg-orange-500 w-0 group-hover:w-3/5 transition-all duration-300 m-auto' />
          </li>
        </NavLink>
      </ul>

      {/* User Account Section */}
      <div className='flex items-center gap-4'>
        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={userData.image} alt="User Profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown Icon" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4 shadow-lg'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className='bg-orange-500 text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-orange-600 transition-all duration-300'>
            Create account
          </button>
        )}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu Icon" />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img src={assets.logo} className='w-32' alt="Logo" />
          <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="Close Icon" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded-full hover:bg-orange-50 transition-all duration-300'>HOME</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded-full hover:bg-orange-50 transition-all duration-300'>ALL LAWYERS</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded-full hover:bg-orange-50 transition-all duration-300'>ABOUT</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded-full hover:bg-orange-50 transition-all duration-300'>CONTACT</p></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar