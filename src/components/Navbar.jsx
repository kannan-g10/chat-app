import React from 'react'

const NavBar = () => {
  return (
    <div className="flex bg-[#001d3d] h-16 items-center justify-between p-2">
      <span className="text-white font-bold font-mono text-lg">
        Madras Chat
      </span>
      <div className="flex gap-3">
        <img
          src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Profile-image"
          className="w-8 h-8 object-cover rounded-full"
        />
        <span className="text-white font-medium">Miley</span>
        <button className="bg-[#00b4d8] text-white px-2 py-0.5 rounded-md font-serif">
          logout
        </button>
      </div>
    </div>
  )
}

export default NavBar
