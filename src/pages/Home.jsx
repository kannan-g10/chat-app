import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className="md:w-3/5 h-4/5 rounded-md overflow-hidden">
      <div className="flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home
