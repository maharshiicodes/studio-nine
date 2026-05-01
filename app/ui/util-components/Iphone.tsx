'use client'
import { animate } from 'motion'
import {motion} from 'motion/react'
import { inter } from '@/app/layout'

export default function Iphone() {
    return(
        <motion.div whileHover = "animate" initial = "initial" className = 'bg-black p-4 rounded-4xl relative'>
            <div className = 'absolute left-3.5 top-18 w-2 h-4 rounded-2xl bg-neutral-500'></div>
            <div className = 'absolute left-3.5 top-24 w-2 h-6 rounded-2xl bg-neutral-500'></div>
            <div className = 'absolute left-3.5 top-31 w-2 h-6 rounded-2xl bg-neutral-500'></div>
            <div className = 'absolute right-3.5 top-27 w-2 h-8 rounded-2xl bg-neutral-500'></div>
        <div className = 'relative h-62 w-42 bg-neutral-600 rounded-4xl border border-2 border-neutral-700 perspective-distant'>
           <div className='relative h-57 w-37 bg-black/90 rounded-3xl mx-auto mt-2'>
           <motion.div 
           whileHover = "animate" initial = "initial"
           variants = {{
            initial : {
                opacity : 0,
                filter : 'blur(20px)',
                z:0,
            },
            animate : {
                opacity : 1,
                filter : 'blur(0px)',
                z:50,
            }
           }}
           transition = {{
            duration : 0.9,
            ease : [0.9,0.01,0,1.03],
           }}
           className = 'absolute top-2 flex flex-col items-center justify-center z-5 w-full h-full'>
              <motion.h1 className = {`absolute text-white text-lg ${inter.className} font-bold group-hover top-1`}>Sat,13 Nov</motion.h1>
                <motion.h1 className = {`absolute text-white text-2xl ${inter.className} font-extrabold top-8`}>11:11 AM</motion.h1>
           </motion.div>
           <motion.img 
           variants = {{
            initial : {
                opacity : 0,
                filter : 'blur(20px)',
            },
            animate : {
                opacity : 1,
                filter : 'blur(0px)',
            }
           }}
           transition = {{
            duration : 0.9,
            ease : [0.9,0.01,0,1.03],
           }}
           src='https://images.pexels.com/photos/34655582/pexels-photo-34655582.jpeg' className = 'w-full h-full object-cover rounded-3xl'
           />
               <div className = 'absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-12 bg-neutral-400 rounded-full'></div>
           </div>
        </div>
        </motion.div>
    )
}
