import React from 'react'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { IoMdPersonAdd } from 'react-icons/io'
import { TfiMoreAlt } from 'react-icons/tfi'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="w-2/3 h-screen">
      <div className="bg-[#61C8FF] flex justify-between p-[18px]">
        <span className="font-bold text-xl">Miley</span>
        <div className="flex gap-3">
          <BsFillCameraVideoFill size={20} className="cursor-pointer" />
          <IoMdPersonAdd size={20} className="cursor-pointer" />
          <TfiMoreAlt size={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="relative">
        <Messages />
        <Input />
      </div>
    </div>
  )
}

export default Chat
