import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBriefcase, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    function openhandler() {
        setOpen(!open);
    }
    return (
        <div>
            <div className="flex justify-between items-center border-b px-5 py-3">
                <div className="flex gap-x-3 items-center">
                    <div className="font-bold text-xl hover:cursor-pointer">Dribbble</div>
                    <div className="lg:flex hidden gap-x-4 items-center text-gray-500 ">
                        <div className='hover:text-black hover:cursor-pointer'>Inspiration</div>
                        <div className='hover:text-black hover:cursor-pointer'>Find Works</div>
                        <div className='hover:text-black hover:cursor-pointer'>Learn Design</div>
                        <div className='hover:text-black hover:cursor-pointer'>Go Pro</div>
                        <div className='hover:text-black hover:cursor-pointer'>Hire Designers</div>
                    </div>
                </div>
                <div className="flex gap-x-3 items-center">
                    <div className="lg:flex hidden gap-x-2 items-center bg-gray-200 text-gray-400 px-2 py-1 rounded-lg">
                        <div className='hover:cursor-pointer'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <div><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="search" placeholder="Search" /></div>
                    </div>
                    <div className='lg:block hidden cursor-pointer text-gray-400'>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className='cursor-pointer'><img className='h-[50px] w-[50px]' src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1712684852~exp=1712688452~hmac=b378b49ccb0f5c44e422fb7df2bcb88d6073581a2bcd64602af08289097d2c95&w=740" alt="profile" /></div>
                    <div className='lg:block hidden p-2 bg-pink-500 text-white font-bold rounded-lg cursor-pointer'>Upload</div>
                    <div className='lg:hidden block text-gray-500' onClick={openhandler} >{!open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}</div>
                </div>
            </div>
            {open ?
                <div className='px-5 py-3'>
                    <div className="flex gap-x-2 items-center bg-gray-200 text-gray-400 px-2 py-2 rounded-lg">
                        <div className='hover:cursor-pointer'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <div><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="search" placeholder="Search" /></div>
                    </div>
                    <div className='mt-4 py-3 bg-pink-500 text-center text-white font-bold rounded-lg cursor-pointer'>Upload</div>
                    <div className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                        <div className='hover:text-black hover:cursor-pointer'>Inspiration</div>
                        <div className='hover:text-black hover:cursor-pointer'>Find Works</div>
                        <div className='hover:text-black hover:cursor-pointer'>Learn Design</div>
                        <div className='hover:text-black hover:cursor-pointer'>Go Pro</div>
                        <div className='hover:text-black hover:cursor-pointer'>Hire Designers</div>
                    </div>
                </div>
                : ''
            }
        </div>
    );
}