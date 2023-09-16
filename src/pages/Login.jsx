import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-white rounded-md p-10">
      <h1 className="text-[#1a3a4f] text-2xl font-bold">Madras chat</h1>
      <span className="text-[#021F34] font-medium">Login</span>
      <form className="flex flex-col gap-3 px-10 py-5">
        <input
          type="email"
          placeholder="Email"
          className="p-2 px-3 border-b border-gray-300 outline-none placeholder:text-slate-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 px-3 border-b border-gray-300 outline-none placeholder:text-slate-300"
        />
        <button className="mt-2 bg-[#7b96ec] text-white font-bold p-[10px] border-none cursor-pointer">
          Sign in
        </button>
      </form>
      <p className="gap-1 flex">
        You don't have an account?
        <span className="underline text-cyan-900 hover:cursor-pointer">
          Register
        </span>
      </p>
    </div>
  )
}

export default Login
