import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'

const data = [
  {
    name: 'Bitcoin BTC',
    priceBTC: '0.29561 BTC',
    totalAmount: '800.34 $',
    averagePriceBTC: '0.02447 BTC',
    totalBTC: '0.029256 BTC',
  },
  {
    name: 'Ethereum ETH',
    priceBTC: '0.032345 BTC',
    totalAmount: '900.12 $',
    averagePriceBTC: '0.03456 BTC',
    totalBTC: '0.032345 BTC',
  },
  {
    name: 'Monero XMR',
    priceBTC: '0.027812 BTC',
    totalAmount: '750.67 $',
    averagePriceBTC: '0.02345 BTC',
    totalBTC: '0.028912 BTC',
  },
  {
    name: 'Litecoin LTC',
    priceBTC: '0.03876 BTC',
    totalAmount: '850.45 $',
    averagePriceBTC: '0.03567 BTC',
    totalBTC: '0.03876 BTC',
  },
  {
    name: 'Solana',
    priceBTC: '0.027654 BTC',
    totalAmount: '780.90 $',
    averagePriceBTC: '0.02678 BTC',
    totalBTC: '0.027654 BTC',
  },
  {
    name: 'USD Coin',
    priceBTC: '0.031098 BTC',
    totalAmount: '920.76 $',
    averagePriceBTC: '0.03789 BTC',
    totalBTC: '0.0321098 BTC',
  },
]

const TableSwitch = () => {
  const [activeTab, setActiveTab] = useState('Active Orders')
  return (
    <div className='bg-[#202022] rounded-md'>
      <div className='flex items-center justify-between px-[24px] pt-[24px] '>
        <div className='flex items-center gap-4 text-[#ff971d] text-[16px]'>
          <div
            className={`border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent cursor-pointer ${
              activeTab === 'Active Orders' ? 'border-[#ff971d]' : ''
            }`}
            onClick={() => setActiveTab('Active Orders')}
          >
            Active Orders
          </div>
          <div
            className={`border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent cursor-pointer ${
              activeTab === 'Filled and Cancelled Orders'
                ? 'border-[#ff971d]'
                : ''
            }`}
            onClick={() => setActiveTab('Filled and Cancelled Orders')}
          >
            Filled and Cancelled Orders
          </div>
          <div
            className={`border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent cursor-pointer ${
              activeTab === 'My Trades' ? 'border-[#ff971d]' : ''
            }`}
            onClick={() => setActiveTab('My Trades')}
          >
            My Trades
          </div>
        </div>
        <div className='pb-7 cursor-pointer'>
          <BsThreeDots size={20} />
        </div>
      </div>
      <div className='line-bar inset-x-0 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-75'></div>
      <div>
        <table className='mx-auto my-4'>
          <tr className='bg-[#19191a]'>
            <th className='font-medium text-[13px] py-4 px-7 '>BITCOIN</th>
            <th className='font-medium text-[13px] py-4 px-7'>PRICE(BTC)</th>
            <th className='font-medium text-[13px] py-4 px-7'>
              TOTAL AMOUNT($)
            </th>
            <th className='font-medium text-[13px] py-4 px-7'>
              AVERAGE PRICE(BTC)
            </th>
            <th className='font-medium text-[13px] py-4 px-7'>TOTAL(BTC)</th>
          </tr>
          {data.map((item, index) => (
            <tr className='text-center pr-2' key={index}>
              <td className='py-[12px]  text-[13px] border-b border-[#d6d0d01d]'>
                {item.name}
              </td>
              <td className='py-[12px]  text-[13px] border-b border-[#d6d0d01d]'>
                {item.priceBTC}
              </td>
              <td className='py-[12px]  text-[13px] border-b border-[#d6d0d01d]'>
                {item.totalAmount}
              </td>
              <td className='py-[12px]  text-[13px] border-b border-[#d6d0d01d]'>
                {item.averagePriceBTC}
              </td>
              <td className='py-[12px]  text-[13px] border-b border-[#d6d0d01d]'>
                {item.totalBTC}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default TableSwitch
