import Navbar from '../components/Navbar'
import Chats from './Chats'
import Search from './Search'

const Sidebar = () => {
  return (
    <div className="w-1/3 h-screen border-r bg-[#006CA5] text-white">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar
