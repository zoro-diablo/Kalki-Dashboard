import TableSwitch from '../Table/TableSwitch'
import Account from '../account/Account'
import Footer from '../footer/Footer'
import Graph from '../graph/Graph'
import Navbar from '../navbar/Navbar'
import Transaction from '../transaction/Transaction'
import './main.scss'

const Main = () => {
  return (
    <div className='main h-screen overflow-y-auto w-full text-[#bfbfbf]'>
      <Navbar />
      <div className='grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-5 gap-[32px] m-8'>
        <div className='col-span-4 row-span-3 lg:mx-0 mx-auto'>
          <Graph />
        </div>
        <div className='col-span-2 row-span-4 lg:mx-0 mx-auto w-full'>
          <Transaction />
        </div>
        <div className='col-span-4 row-span-2 lg:mx-0 mx-auto'>
          <TableSwitch />
        </div>
        <div className='col-span-2 row-span-1 lg:mx-0 mx-auto w-full lg:flex-none'>
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
