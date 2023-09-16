import React from 'react'

const Message = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col font-light text-gray-500 gap-5 mb-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTS5oI0-BGGoVyQ4v8VHhcl4mj2ppLV8hbapsivNjJeOmrRjweYh7B&s=0"
          alt="profile-sender"
          className="w-6 h-6 object-cover rounded-full"
        />
        <span>just now</span>
      </div>
      <div className="flex flex-col items-end">
        <p className="bg-white rounded-l-xl rounded-b-xl px-5 py-3 max-w-max">
          Hello
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTS5oI0-BGGoVyQ4v8VHhcl4mj2ppLV8hbapsivNjJeOmrRjweYh7B&s=0"
          alt="profile-receiver"
          className="w-1/2 object-cover"
        />
      </div>
    </div>
  )
}

export default Message
