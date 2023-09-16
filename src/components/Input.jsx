import { GrAttachment } from 'react-icons/gr'
import { HiPhotograph } from 'react-icons/hi'

const Input = () => {
  return (
    <div className="h-[50px] bg-white absolute bottom-0 w-full p-2.5 flex justify-between items-center">
      <input
        type="text"
        placeholder="Type message..."
        className="outline-none text-xl"
      />
      <div className="flex gap-3 items-center">
        <GrAttachment size={23} className="cursor-pointer" />
        <input type="file" id="chatFile" className="hidden" />
        <label htmlFor="chatFile">
          <HiPhotograph size={23} className="cursor-pointer" />
        </label>
        <button className="font-semibold bg-[#00e6d9] hover:bg-red-500 transition-all duration-300 text-white px-2.5 py-1.5 rounded-sm">
          Send
        </button>
      </div>
    </div>
  )
}

export default Input
