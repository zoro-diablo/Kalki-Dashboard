const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-[#202022] mt-10'>
      <div className='flex items-center text-[14px]'>
        <div className='ml-10 '>
          <p className='text-[12px]  py-3 mr-4  text-white cursor-pointer'>Privacy Policy</p>
        </div>
        <div>
          <p className='text-[12px]  py-3  text-white cursor-pointer'>Terms of Use</p>
        </div>
      </div>
      <div>
        <div className='mr-10'>
          <p className='text-[12px]  py-3  text-gray-400'>
            ©2024 <span className='text-[#ff971d]'>FnMOney</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
