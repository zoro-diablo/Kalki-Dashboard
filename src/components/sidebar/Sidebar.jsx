import { useState, useEffect, useRef } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { MdOutlineCircle } from 'react-icons/md'
import { menuItems } from '../../utils/data'
import { HiOutlineHome } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './sidebar.scss'

const navVarients = {
  whileHover: {
    color: ['#bfbfbf', '#d3d1d1', '#fff'],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

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

  const navRef = useRef()

  useEffect(() => {
    const currentNavRef = navRef.current

    const handleScroll = () => {
      if (currentNavRef.scrollTop > 0) {
        currentNavRef.classList.add('scrolled')
      } else {
        currentNavRef.classList.remove('scrolled')
      }
    }

    currentNavRef.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      currentNavRef.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`container text-[#bfbfbf] w-[296px]  bg-[#19191a]  ${
        isActive ? 'active' : ''
      }`}
    >
      <div className='relative pb-[76px] border-b border-[#4c4c4c]'>
        <div className='head flex fixed py-[13px] pl-[16px]'>
          <div className='flex'>
            <img
              src='/logotwo.png'
              alt='fn'
              className='cursor-pointer'
              width={50}
            />
          </div>
          <div className='user-details flex items-center'>
            <p className='title logo-title cursor-pointer text-[19px] font-[500] text-white'>
             Kalki
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

      <div className='nav  overflow-y-auto h-[89vh]' ref={navRef}>
        <div className='flex justify-between items-center ml-[26px] mt-[28px] mb-[26px] cursor-pointer '>
          <div className=' flex items-center'>
            <HiOutlineHome
              size={21}
              className='text-[#bfbfbf] hover:text-white duration-500 ease-in-out'
            />
            <motion.div
              whileHover='whileHover'
              variants={navVarients}
              className='ml-[16px] text-[14px] content-heading text-[#bfbfbf]  '
            >
              Dashboard
            </motion.div>
          </div>
        </div>
        {menuItems.map((item, index) => (
          <div key={index} className=''>
            <div
              className='flex justify-between items-center ml-[26px] mt-[14px] mb-[13px] cursor-pointer '
              onClick={() => toggleItem(index)}
            >
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className=' flex items-center'
              >
                <item.icon
                  size={21}
                  className='text-[#bfbfbf] hover:text-white duration-500 ease-in-out'
                />
                <motion.div
                  whileHover='whileHover'
                  variants={navVarients}
                  className='ml-[16px] text-[14px] content-heading text-[#bfbfbf] '
                >
                  {item.name}
                </motion.div>
              </motion.div>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='cursor-pointer'
              >
                <IoIosArrowForward
                  className={`text-[#bfbfbf] arrow-icon mr-3 hover:text-white duration-500 ease-in-out ${
                    isRotated[index] ? 'transform rotate-90' : ''
                  }`}
                />
              </motion.div>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                isOpen[index] ? 'max-h-[1000px]' : 'max-h-0'
              }`}
            >
              {item.subItems.map((subItem, i) => (
                <motion.ul
                  whileHover='whileHover'
                  variants={navVarients}
                  key={i}
                  className='flex flex-col mx-auto sub-menus text-[#bfbfbf] '
                >
                  <li className='flex items-center gap-[13px] py-[13px] ml-12'>
                    <MdOutlineCircle size={12} />
                    <motion.span
                      whileHover='whileHover'
                      variants={navVarients}
                      className='text-[14px] cursor-pointer'
                    >
                      {subItem}
                    </motion.span>
                  </li>
                </motion.ul>
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
