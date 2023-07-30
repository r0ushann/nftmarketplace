import React from 'react';


const Footer = () => {
    return (
        <div className="w-full text-white flex md:justify-center  justify-between items-center p-4 flex-col text-base font-bold bg-black">

            <div className="flex flex-2 justify-evenly items-center  flex-wrap sm:mt-0 mt-5 py-20 w-full">
                <p className="text-white  hover:text-blue-500 text-base text-center mx-2 cursor-pointer">
                    Market
                </p>
                <p className="text-white  hover:text-blue-500 text-base text-center mx-2 cursor-pointer">
                    Artist
                </p>
                <p className="text-white  hover:text-blue-500 text-base text-center mx-2 cursor-pointer">
                    Features
                </p>
                <p className="text-white  hover:text-blue-500 text-base text-center mx-2 cursor-pointer">
                    Community
                </p>

                <p className="text-white  hover:text-blue-500 text-base text-center mx-2 cursor-pointer">
                    About us
                </p>

                <p className="text-white text-base  hover:text-blue-500 text-center mx-2 cursor-pointer">
                    contact us
                </p>
                <p className="text-white text-base  hover:text-blue-500 text-center mx-2 cursor-pointer">
                    Socials
                </p>

                <p className="text-white text-base  hover:text-blue-500 text-center mx-2 cursor-pointer">

                </p>
            </div>

            <div className="flex  items-center flex-row">
                <p className="text-white text-right text-xs">
                    &copy;2023 All rights reserved by roushan
                </p>
                <div className='rounded-full flex p-2'>
                    <a href="https://github.com/r0ushann">
                        <img className="h-8 w-8 rounded-full" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6H3k5o1hr4luxqjzGWsJEKODInCZKG2Q_Fg&usqp=CAU" 
                        alt="github logo" />
                    </a>

                    <a href="https://www.linkedin.com/in/roushan-kumar-74b448217/">
                    <img className="h-18 w-8 flex rounded-full object-contain mx-2"
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt=""/>
                    </a>

                    <a href="https://hashnode.com/@roushan">
                    <img className="h-18 w-8 flex rounded-full object-contain" src="data:image/png;base64,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" 
                    alt="hashnode"/>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer