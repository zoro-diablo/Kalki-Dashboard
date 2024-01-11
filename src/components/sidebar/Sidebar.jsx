import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { MdOutlineCircle } from 'react-icons/md'
import { MdFolderSpecial } from 'react-icons/md'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa6'
import { TiInfoLargeOutline } from 'react-icons/ti'
import { IoBookmarksSharp } from 'react-icons/io5'
import { IoBriefcase } from 'react-icons/io5'
import { BiSolidWidget } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { MdNavigation, MdTableRows } from 'react-icons/md'
import './sidebar.scss'

const menuItems = [
  {
    name: 'Special Pages',
    subItems: ['Portfolio', 'Academy', 'Trading', 'Watchlist', 'List'],
    icon: MdFolderSpecial,
  },
  {
    name: 'Authentication',
    subItems: [
      'Login',

      'Register',

      'Confirm Mail',

      'Lock Screen',

      'Recover Password',
    ],
    icon: MdOutlineSecurity,
  },
  {
    name: 'Users',
    subItems: ['Portfolio', 'Academy', 'Trading', 'Watchlist', 'List'],
    icon: FaUser,
  },
  {
    name: 'Utilities',
    subItems: ['Portfolio', 'Academy', 'Trading', 'Watchlist', 'List'],
    icon: IoBookmarksSharp,
  },
  {
    name: 'UI Elements',
    subItems: [
      'Avatars',
      'Alerts',
      'Badge',
      'Breadcrumb',
      'Buttons',
      'Buttons Group',
      'Box Shadow',
      'Colors',
      'Cards',
      'Carousel',
      'Grid',
      'Helper Classes',
      'Images',
      'List Group',
      'Modal',
      'Notifications',
      'Pagination',
      'Popovers',
      'Typography',
      'Tabs',
      'Tooltips',
      'Video',
    ],
    icon: IoBriefcase,
  },
  {
    name: 'Widget',
    subItems: ['Widget Basic', 'Widget Chart', 'Widget Card'],
    icon: BiSolidWidget,
  },
  {
    name: 'Maps',
    subItems: ['Google', 'Vector'],
    icon: MdNavigation,
  },
  {
    name: 'Form',
    subItems: ['Elements', 'Wizard', 'Validation'],
    icon: FaWpforms,
  },
  {
    name: 'Table',
    subItems: ['Bootstrap Table', 'Datatable'],
    icon: MdTableRows,
  },
  {
    name: 'Icons',
    subItems: ['Solid', 'Outlined', 'Dual Tone'],
    icon: TiInfoLargeOutline,
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
      className={`container text-[#bfbfbf] w-[266px]  bg-[#19191a]  ${
        isActive ? 'active' : ''
      }`}
    >
      <div className='relative pb-[76px] border-b border-[#5b5b5b]'>
        <div className='head flex fixed py-[13px] pl-[16px]'>
          <div className='flex'>
            <img
              src='/logo.png'
              alt='fn'
              className='cursor-pointer'
              width={50}
            />
          </div>
          <div className='user-details flex items-center'>
            <p className='title logo-title cursor-pointer text-[19px] font-[500] text-white'>
              FnMoney
            </p>
          </div>
          <div
            onClick={handleButtonClick}
            className='bg-[#ff971d]  rounded-sm cursor-pointer absolute  top-[32.5%] right-[-40px]'
          >
            <IoIosArrowRoundBack
              size={25}
              className={`text-white ${
                isButtonClicked ? 'transform rotate-180' : ''
              }`}
            />
          </div>
        </div>
      </div>

      <div className='nav overflow-y-auto h-[89vh]'>
        {menuItems.map((item, index) => (
          <div key={index} className=''>
            <div
              className='flex justify-between items-center ml-[26px] mt-[14px] mb-[13px] cursor-pointer '
              onClick={() => toggleItem(index)}
            >
              <div className=' flex items-center'>
                <item.icon size={21} className='text-[#bfbfbf]' />
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
                  className='flex flex-col mx-auto sub-menus text-[#bfbfbf] '
                >
                  <li className='flex items-center gap-[13px] py-[13px] ml-12'>
                    <MdOutlineCircle size={12} />
                    <span className='text-[14px] cursor-pointer'>
                      {subItem}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
            {item.name === 'Utilities' && (
              <div className=' line-bar my-2 inset-x-0 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-75'></div>
            )}
          </div>
        ))}
      <div className='mt-[100px] mx-5 mb-[30px] news'>
        <div className='bg-[#202022] rounded-sm flex flex-col justify-center'>
          <div className='flex justify-center'>
            <img src='/safe.png' alt='safe' width={180} />
          </div>
          <div className='mx-4 flex flex-col justify-center'>
            <p className='text-[14px] text-center'>
              Be more secure with Pro Feature
            </p>
            <button className='bg-[#dd8219] hover:bg-[#dd8219e2] text-[#ffffffed] hover:text-black font-medium   rounded-[5px]  py-2 px-4 mt-5 mb-5 text-[14px]'>
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Sidebar
