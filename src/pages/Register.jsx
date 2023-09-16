import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'

import addImg from '../assets/addImg.png'
import { auth, storage } from '../firebase'

const Register = () => {
  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const profilePhoto = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile({
              displayName,
              photoURL: downloadURL,
            })
          })
        }
      )
    } catch (error) {
      setErr(true)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-white rounded-md p-10">
      <h1 className="text-[#1a3a4f] text-2xl font-bold">Madras chat</h1>
      <span className="text-[#021F34] font-medium">Register</span>
      <form className="flex flex-col gap-3 px-10 py-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="p-2 px-3 border-b border-gray-300 outline-[#0077b6] placeholder:text-slate-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 px-3 border-b border-gray-300 outline-[#0077b6] placeholder:text-slate-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 px-3 border-b border-gray-300 outline-[#0077b6] placeholder:text-slate-400"
        />
        <input type="file" id="file" className="hidden" />
        <label htmlFor="file" className="flex items-center gap-2 mt-2 ">
          <img src={addImg} alt="file" className="w-7 cursor-pointer" />
          <span className="font-extralight text-sm cursor-pointer">
            Add an avatar
          </span>
        </label>
        <button className="bg-[#7b96ec] text-white font-bold p-[10px] border-none cursor-pointer">
          Sign up
        </button>
      </form>
      <p className="gap-1 flex">
        You do have an account?
        <span className="underline text-cyan-900 hover:cursor-pointer">
          Login
        </span>
      </p>
      {err && <span className="text-red-600">Something went wrong!</span>}
    </div>
  )
}

export default Register
