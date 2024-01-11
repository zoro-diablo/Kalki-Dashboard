import { BsThreeDots } from 'react-icons/bs'

const Transaction = () => {
  const transactions = [
    {
      id: 1,
      date: '24.04.2021',
      amount: '0.0121 BTC',
      type: 'Funds received on wallet',
    },
    { id: 2, date: '25.04.2021', amount: '0.0152 BTC', type: 'Withdraw Fund' },
    {
      id: 3,
      date: '26.04.2021',
      amount: '0.0098 BTC',
      type: 'Transaction Fund',
    },
    { id: 4, date: '27.04.2021', amount: '0.0075 BTC', type: 'Deposit Fund' },
    { id: 5, date: '28.04.2021', amount: '0.0112 BTC', type: 'Purchase' },
    {
      id: 6,
      date: '24.04.2021',
      amount: '0.0121 BTC',
      type: 'Funds received on wallet',
    },
    { id: 7, date: '29.04.2021', amount: '0.0087 BTC', type: 'Sell' },
    {
      id: 8,
      date: '26.04.2021',
      amount: '0.0098 BTC',
      type: 'Transaction Fund',
    },
    { id: 9, date: '30.04.2021', amount: '0.0063 BTC', type: 'Withdraw Fund' },
    { id: 10, date: '01.05.2021', amount: '0.0145 BTC', type: 'Purchase' },
    { id: 11, date: '02.05.2021', amount: '0.0132 BTC', type: 'Deposit Fund' },
  ]
  return (
    <div className='bg-[#202022] rounded-md'>
      <div className='flex justify-between items-center p-[24px] '>
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
