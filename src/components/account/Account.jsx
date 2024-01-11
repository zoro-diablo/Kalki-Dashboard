const Account = () => {
  return (
    <div className='bg-[#202022] rounded-md'>
      <div className='flex justify-between'>
        <div>
          <p className='p-[24px] text-[14px] text-[#ff971d]'>
            Complete Your Account
          </p>
        </div>
        <div className='p-[24px] text-[14px]'>1/3</div>
      </div>
      <div className='line-bar inset-x-0 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-75'></div>
      <div className=''>
        <div className='flex  items-center my-4 justify-between'>
          <div className='pl-5 flex gap-x-4 py-4 mb-2'>
            <img src='/coin.png' alt='coin' width={42} />
            <div>
              <div>
                <p className='text-[15px] text-[#ffffffdb] font-semibold'>
                  Confirm your email address
                </p>
              </div>
              <div >
                <span className='text-[14px]'>Add basic account Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
