import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowRoundBack } from 'react-icons/io'
// import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineCircle } from 'react-icons/md'
// import { GoHome } from 'react-icons/go'
import { MdFolderSpecial } from 'react-icons/md'
import { MdOutlineSecurity } from 'react-icons/md'
// import { LuUsers } from 'react-icons/lu'
// import { FaTags } from 'react-icons/fa'
// import { PiShoppingBagOpenFill } from 'react-icons/pi'
// import { MdWidgets } from 'react-icons/md'
// import { FaLocationDot } from 'react-icons/fa6'
// import { SiGoogleforms } from 'react-icons/si'
// import { MdTableChart } from 'react-icons/md'
// import { FaInfo } from 'react-icons/fa'
// import { FaArrowLeft } from 'react-icons/fa'
import './sidebar.scss'

const menuItems = [
  {
    name: 'Special Pages',
    subItems: ['Menu1', 'Icon1', 'Dance1'],
    icon: MdFolderSpecial,
  },
  {
    name: 'Authentication',
    subItems: ['Good2', 'Icon2', 'Dance2'],
    icon: MdOutlineSecurity,
  },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(menuItems.map(() => false))
  const [isActive, setIsActive] = useState(false)
  const [isRotated, setIsRotated] = useState(menuItems.map(() => false))
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const toggleItem = (index) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : false)))
    setIsRotated(
      isRotated.map((rotated, i) => (i === index ? !rotated : false))
    )
  }

  const handleButtonClick = () => {
    setIsActive(!isActive)
    setIsButtonClicked(!isButtonClicked)
  }

  return (
    <div
      className={`container h-screen w-[256px] overflow-y-auto bg-[#19191a]  ${
        isActive ? 'active' : ''
      }`}
    >
      <div className='head flex relative py-[13px] pl-[16px] border-b border-gray-700'>
        <div className='flex'>
          <img src='/logo.png' alt='fn' className='cursor-pointer' width={50} />
        </div>
        <div className='user-details flex items-center'>
          <p className='title logo-title cursor-pointer text-[19px] font-[500] text-white'>
            FnMoney
          </p>
        </div>
        <div
          onClick={handleButtonClick}
          className='bg-[#ff971d]  rounded-sm cursor-pointer absolute  top-[30.5%] '
        >
          <IoIosArrowRoundBack
            size={25}
            className={`text-white ${
              isButtonClicked ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {menuItems.map((item, index) => (
        <div key={index}>
          <div
            className='flex justify-between items-center ml-[22px] mt-[14px] mb-[13px] cursor-pointer'
            onClick={() => toggleItem(index)}
          >
            <div className=' flex items-center'>
              <item.icon size={22} className='text-[#bfbfbf]' />
              <div className='ml-[16px] text-[14px] content-heading text-[#bfbfbf] '>
                {item.name}
              </div>
            </div>
            <div className='cursor-pointer'>
              <IoIosArrowForward
                className={`text-[#bfbfbf] arrow-icon mr-2 ${
                  isRotated[index] ? 'transform rotate-90' : ''
                }`}
              />
            </div>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              isOpen[index] ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            {item.subItems.map((subItem, i) => (
              <ul
                key={i}
                className='flex flex-col mx-auto sub-menus text-[#bfbfbf]'
              >
                <li className='flex items-center gap-[13px] py-[13px] ml-12'>
                  <MdOutlineCircle  size={12} />
                  <span className='text-[14px] cursor-pointer'>{subItem}</span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
      <div className='mt-[100px] mx-5 mb-[30px] news'>
            <div className='bg-[#202022] rounded-sm flex flex-col justify-center'>
              <div className='flex justify-center'>
                <img src='/safe.png' alt='safe' width={180} />
              </div>
              <p className='text-[16px] mx-5'>
                Be more secure with Pro Feature
              </p>
              <button className='bg-[#dd8219] hover:bg-[#dd8219e2] text-[#ffffffed] hover:text-black font-medium w-[180px] mx-auto rounded-[5px] py-2 mt-5 mb-5'>
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
 
  )
}

export default Sidebar
