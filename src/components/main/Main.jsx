import TableSwitch from "../Table/TableSwitch"
import Account from "../account/Account"
import Footer from "../footer/Footer"
import Graph from "../graph/Graph"
import Navbar from "../navbar/Navbar"
import Transaction from "../transaction/Transaction"
import './main.scss'


const Main = () => {
  return (
    <div className='main h-screen overflow-y-auto w-full text-[#bfbfbf]'>
      <Navbar />
      <div className='grid grid-cols-6 grid-rows-5 gap-[32px]'>
        <div className='col-span-4 row-span-3 mt-[32px] ml-[32px]'>
          <Graph />
        </div>
        <div className='col-span-2 row-span-4 mt-[32px] mr-[32px]'>
          <Transaction />
        </div>
        <div className='col-span-4 row-span-2  ml-[32px]'>
          <TableSwitch />
        </div>
        <div className='col-span-2 row-span-1 mr-[32px]'>
          <Account />
        </div>
      </div>
      <div className='col-span-5  mt-2'>
        <Footer />
      </div>
    </div>
  )
}

export default Main