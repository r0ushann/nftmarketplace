import React from 'react';
import contentimg from "../contentimg.jpg";
import Identicon from "react-identicons";

const Content = () => {
    return (
        <div className='flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10'>
            <div className='md:w-3/6 w-full'>
                <div>
                    <h1 className='text-white text-5xl font-bold'>Buy or Sell <br /> Digital Assets, <br />
                        <span className='text-gradient'>NFTs Collections</span>
                    </h1>
                    <p className='text-gradient font-extrabold text-md mt-3'>Mint and collect the coolest NFTs!</p>
                </div>
                <div className='flex mt-5'>
                    <button className="shadow-md bg-blue-500 text-white shadow-slate-800 mt-3 p-3 font-bold hover:bg-white hover:text-blue-500 rounded-full">
                    Create NFTs
                    </button>
                </div>


                <div className='w-3/4 mt-5 ml-2 flex items-center justify-between'>
               
                    <div className=' text-white '>
                        <p className="font-bold">203k</p>
                        <small className='text-white'>Users</small>
                    </div>
           

             
                    <div className=' text-white '>
                        <p className="font-bold">500k</p>
                        <small className='text-white'>Digital Arts</small>
                    </div>
               

                    <div className=' text-white '>
                        <p className="font-bold">103k</p>
                        <small className='text-white'>Artists</small>
                    </div>
                    </div>

            </div>

            <div className='rounded-md shadow-xl shadow-blue-500 md-w-2/5] mt-10 md:mt-1 overflow-hidden lg:mb-20 lg:mt-15'>
            <img  className="h-70 w-full object-cover rounded-md" style={{width:600}} src ={contentimg} alt="contentimg"/>
            <div className='flex justify-start items-center p-3'>
                <Identicon 
                className="h-5 w-10 object-contain rounded-full mr-3"
                string={'0x235....54ja'} size={40} />
                <div>
                    <p className='text-white font-semibold'>0x235....54ja</p>
                    <small className='text-black font-bold'>@you</small>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Content