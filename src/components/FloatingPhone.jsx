import React from 'react'
import {motion} from 'motion/react'
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';
import { SlLayers } from 'react-icons/sl';



const sidebarMenu = [
    {
        icon: '',
        text: 'Dashboard',
    },
    {
        icon: '',
        text: 'Dashboard',
    },
    {
        icon: '',
        text: 'Dashboard',
    },
    {
        icon: '',
        text: 'Dashboard',
    },
    {
        icon: '',
        text: 'Dashboard',
    },
    {
        icon: '',
        text: 'Dashboard',
    },
]

const FloatingPhone = () => {
      return (
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-30deg) rotateX(15deg)",
          }}
          className="rounded-[24px] bg-[#4f46e5]"
        >
          <motion.div
            initial={{
              transform: "translateZ(8px) translateY(-2px)",
            }}
            animate={{
              transform: "translateZ(32px) translateY(-8px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
            className="relative h-full w-full rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
          >
            <HeaderBar />
            <Screen />
          </motion.div>
        </div>
      );
    };
    
    const HeaderBar = () => {
      return (
        <>
          <div className="absolute left-[50%] top-2.5 z-10 h-2 w-2 border border-gray-500 -translate-x-[50%] rounded-md bg-neutral-900"></div>
          <div className="absolute right-3 top-2 z-10 flex gap-2">
            <FiWifi className="text-white" />
            <FiBatteryCharging className="text-white" />
          </div>
        </>
      );
    };
    
    const Screen = () => {
      return (
        <div className="relative z-0 h-full w-full overflow-hidden rounded-[20px] bg-[#111111]">
          <div className='bg-white h-[450px] w-36 p-4 flex flex-col'>
            <div className='flex items-center gap-1 text-black'>
                <SlLayers className='text-xs font-bold font-mono'/>
                <h1 className='text-xs font-bold font-mono'>All Components</h1>
            </div>
            <div className='my-2'>
                <p className='text-xs font-bold font-mono text-gray-500'>Sections</p>
                <ul className='flex flex-col gap-1 '>
                    {sidebarMenu.map((menu, index)=>(
                        <li key={index} className='text-xs flex gap-1 font-bold font-mono text-black px-2 py-1 hover:bg-gray-300 transition-all delay-150 cursor-pointer'>
                            {menu.text}
                        </li>
                    ))}
                </ul>
            </div>

          </div>
        </div>
      );
    };

export default FloatingPhone