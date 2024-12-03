import React from 'react'
import { useAuth } from '../../context/authContext'

const Navbar = () => {
    const {user , logout} = useAuth()
  return (
    <div className=' flex justify-between h-12 bg-teal-600 items-center text-white px-5'>
      <p>Welcome {user.name}</p>
      <button className='px-4 py-1 bg-teal-700 hover:bg-teal-800 rounded-sm' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar
