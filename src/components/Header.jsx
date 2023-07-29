import React from 'react';


const Header = () => {
    return (
        <div className="w-4/5 flex justify-between md:justify-center py-5 mx-auto font-extrabold text-xl">
            <div className="md:flex-[0.5] text-gradient flex-initial items-center justify-center font-bold text-2xl">
                NFTMarketplace
            </div>

            <ul className='md:flex-[0.5] md:flex hidden list-none justify-between items-center flex-initial'>
                <li className='mx-4 cursor-pointer hover:text-white'>Market</li>
                <li className='mx-4 cursor-pointer hover:text-white'>Artist</li>
                <li className='mx-4 cursor-pointer hover:text-white'>Features</li>
                <li className='mx-4 cursor-pointer hover:text-white'>Community</li>
            </ul>

            <button className="shadow-md bg-blue-500 text-white shadow-slate-800 p-3 ml-4 md:text-xs hover:bg-white hover:text-blue-500 rounded-full">
            Connect Wallet</button>
        </div>
    )
}

export default Header