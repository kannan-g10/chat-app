import React from 'react'

const Search = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="w-[90%] p-2 mx-4 bg-transparent border-b outline-none opacity-60"
          placeholder="Find a user."
        />
      </div>
      <div className="flex gap-3 items-center border-b p-2 hover:bg-[#3FBCFF] cursor-pointer">
        <img
          src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="profile"
          className="h-12 w-12 object-cover rounded-full"
        />
        <div>
          <span className="font-bold">Miley</span>
          <p>Okay! thank you</p>
        </div>
      </div>
    </div>
  )
}

export default Search
