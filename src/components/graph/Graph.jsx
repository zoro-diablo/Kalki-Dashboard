import './graph.scss'
import { GiWallet } from 'react-icons/gi'
import { GoDotFill } from 'react-icons/go'
import ArearGraph from './Areagraph'

const Graph = () => {
  return (
    <div className='bg-[#202022] rounded-[4.8px] grid grid-cols-5 gap-[32px]'>
      <div className='col-span-2 mt-[25px] ml-[24px] bg-[#313135] px-[25px] py-[20px] rounded-md'>
        <span className='text-[#ff971d]'>All Wallets</span>
        <div className='flex justify-between mt-[17px]'>
          <span className='text-xl font-medium text-white'>$ 4,160</span>
          <div>
            <GiWallet size={20} />
          </div>
        </div>
        <div className='mt-[8px] text-[#bfbfbf] text-[15px]'>
          Espected : $ 4,390
        </div>
      </div>
      <div className='col-span-3 mt-[25px] mr-[24px] bg-[#313135] px-[25px] py-[20px] rounded-md'>
        <span className='text-[#ff971d]'>Recently Trade</span>
        <div className='flex mt-[17px] justify-between  mr-2'>
          <div className='flex'>
            <GoDotFill size={22} className='text-[#ff971d]' />
            <span className='text-sm'>LSK $512.43</span>
          </div>
          <div className='flex'>
            <GoDotFill size={22} className='text-[#ff971d]' />
            <span className='text-sm'>LTC $212.43</span>
          </div>
          <div className='flex'>
            <GoDotFill size={22} className='text-[#ff971d]' />
            <span className='text-sm'>BTC $112.43</span>
          </div>
        </div>
        <div className='flex mt-[12px] justify-between mr-2 '>
          <div className='flex'>
            <GoDotFill size={22} className='text-[#ff971d]' />
            <span className='text-sm'>FTC $512.43</span>
          </div>
          <div className='flex'>
            <GoDotFill size={22} className='text-[#ff971d]' />
            <span className='text-sm'>DGP $212.4</span>
          </div>
          <div className='flex'>
            <GoDotFill size={22} className='text-[#ff971d]' />
            <span className='text-sm'>XRP $112.43</span>
          </div>
        </div>
      </div>
      <div className='col-span-5 w-[95%] mx-auto'>
        <ArearGraph />
      </div>
    </div>
  )
}

export default Graph
