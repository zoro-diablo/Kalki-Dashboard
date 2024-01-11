import { BsThreeDots } from 'react-icons/bs'
import { transactions } from '../../utils/data'

const Transaction = () => {
  return (
    <div className='bg-[#202022] rounded-md'>
      <div className='flex justify-between items-center p-[24px]'>
        <div>
          <p className='text-[#ff971d] text-[16px] font-medium'>
            Transaction History
          </p>
        </div>
        <div>
          <BsThreeDots size={20} className='cursor-pointer' />
        </div>
      </div>
      <div className=' mt-2 line-bar inset-x-0 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-75'></div>

      {transactions.map((transaction) => (
        <div
          className='flex  items-center my-4 justify-between'
          key={transaction.id}
        >
          <div className='pl-5 flex gap-x-4'>
            <img src='/coin.png' alt='coin' className='w-auto h-12' />
            <div>
              <div>
                <p className='text-[13px] text-[#ffffffdb] font-semibold'>
                  {transaction.type}
                </p>
              </div>
              <div>
                <span className='text-[14px]'>{transaction.date}</span>
              </div>
            </div>
          </div>
          <div className=''>
            <p className='text-[15px] mr-6'>{transaction.amount}</p>
          </div>
        </div>
      ))}
      <div className='flex justify-center mt-10 items-center pb-5'>
        <button className='bg-[#ff971d] hover:bg-[#ff961dcb] hover:text-[black] text-[#ffffff] text-[14px] font-medium  py-2 px-5 rounded-md'>
          See All
        </button>
      </div>
    </div>
  )
}

export default Transaction
