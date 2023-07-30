import React from 'react';
import { BiTransfer } from 'react-icons/bi';
import { MdOpenInNew } from 'react-icons/md';

const Transactions = () => {
  return (
    <div className='bg-[#151c25]'>
      <div className='w-4/5 py-20 mx-auto'>
        <h4 className='text-gradient2 text-3xl font-bold uppercase  text-white py-10'>
          Recent Transactions
        </h4>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-3 py-3'>
          {Array(4).fill().map((nft, i) => (
            <Transaction className="text-white font-bold" key={i} tx={i} />

          ))}
        </div>
        <button className="text-white text-sm font-extrabold shadow-md hover:text-blue-500 hover:bg-white px-2 py-1 mx-2 bg-blue-500 rounded-md">
          Load More...
        </button>
      </div>
    </div>
  )
}

const Transaction = ({ tx }) => (
  <div className=
    'flex justify-between mt-5 mb-3 items-center px-2 py-2 border border-green-600 w-full shadow-sm shadow-green-500  rounded-md overflow-hidden bg-gray-900'>
    <div className='rounded-md p-2  text-purple-600'>
      <BiTransfer />
    </div>

    <div className="text-white">
      <h4 className='text-sm text-white'>#{tx} Fund Transfered</h4>
      <small className='flex justify-start items-center'>
        <span className='mr-1 text-white'>Received by</span>
        <a className="mr-2  text-purple-600" href="#" target='_blank' >0x23435...5344e</a>
        <MdOpenInNew />
      </small>
    </div>
    <p className='text-sm font-bold px-2 text-green-500'>0.5 MATIC</p>
  </div>
)

export default Transactions;