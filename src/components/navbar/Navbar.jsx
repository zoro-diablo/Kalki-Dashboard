import './navbar.scss'
import { IoIosSearch } from 'react-icons/io'
import { FaRegBell } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='h-[77px] bg-[#19191a] nav flex justify-between items-center'>
      <div>
        <span className='ml-10 font-medium text-white text-[18px]'>
          Dashboard
        </span>
      </div>
      <div className='flex items-center gap-x-5'>
        <div>
          <IoIosSearch
            size={25}
            className='hover:text-[#ff971d] cursor-pointer'
          />
        </div>
        <div>
          <FaRegBell
            size={20}
            className='hover:text-[#ff971d] cursor-pointer'
          />
        </div>
        <div>
          <MdMessage
            size={20}
            className='hover:text-[#ff971d] cursor-pointer'
          />
        </div>
        <div className='mr-5'>
          <img
            src='/profile.png'
            alt='profile'
            width={45}
            className='rounded-full shadow-md shadow-black cursor-pointer border-2 hover:border-[#ff971d]'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
