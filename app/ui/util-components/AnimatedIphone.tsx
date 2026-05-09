'use client'
import { animate } from 'motion'
import {motion} from 'motion/react'
import { inter } from '@/app/layout'
import waves from '@/app/assets/images/waves.png'
import  uifaces1 from '@/app/assets/images/uifaces-1.jpg';
import  uifaces3 from '@/app/assets/images/uifaces-3.jpg';
import { CgWebsite } from "react-icons/cg";


export default function AnimatedIphone() {
    return(
        <motion.div whileHover = "animate" initial = "initial" className = 'p-4 rounded-4xl relative'>
            <div className = 'absolute left-3.5 top-18 w-1 h-3.5  rounded-tl-sm rounded-bl-sm bg-neutral-400 z-2'></div>
           <div className = 'absolute left-3.5 top-24 w-1 h-4.5  rounded-tl-sm rounded-bl-sm bg-neutral-400 z-2'></div>
            <div className = 'absolute left-3.5 top-31 w-1 h-4.5 rounded-tl-sm rounded-bl-sm bg-neutral-400 z-2'></div>
            <div className = 'absolute right-3.5 top-27 w-1 h-8 rounded-tr-sm rounded-br-sm bg-neutral-400 z-2'></div>
        <div className = 'flex items-center justify-center h-62 w-38 bg-transparent rounded-4xl border border-2 border-neutral-300  mx-auto px-2 py-2'>
           <div className = 'relative bg-transparent h-58 w-38 rounded-3xl'>
             <div className = 'absolute bg-transparent w-30 h-10  ml-5 mt-1 flex  items-center justify-between '>
                 <div className = 'bg-black w-12 ml-6 mb-5 h-3 rounded-2xl border relative'>
                    <div className = 'absolute left-8 top-0 bottom-0 bg-neutral-700  border border-neutral-800 w-2 h-2 rounded-full mx-auto my-auto'></div>
                 </div>
            </div>
            <div className = 'absolute top-8 left-1 flex flex-col items-center justify-center z-5 w-full h-15 '>
                <h1 className = {`absolute text-white text-sm ${inter.className}  group-hover top-1`}>Sat 13 Nov</h1>
                <h1 className = {`absolute text-white text-2xl ${inter.className} font-bold top-6`}>11:11 AM</h1>
            </div>
            <motion.div 
            variants = {{
            initial : {
                y:0,
                scaleX : 1,
            },
             animate : {
                y:-60,
                z:20,
               scaleX : 1.35,
            }
            }}
            transition = {{
                duration : 0.3,
                type : 'spring',
                stiffness : 80,
                damping : 10,   
            }}
            className = 'absolute bottom-5 w-32 left-0.5  h-8 rounded-lg border border-white bg-gradient-to-r from-transparent from-5% via-cyan-600/20 via-20% via-cyan-400/10 via-59% to-transparent to-99% flex items-center justify-start gap-1 px-1 backdrop-blur-2xl shadow-[0_0_20px_rgba(165,243,252,0.35)]'>
                    <motion.div className = 'w-6 h-6 rounded-full'>
                      <img  src = {uifaces1.src} className = 'w-full h-full object-cover rounded-full' />
                    </motion.div>
                    <motion.div className = 'flex flex-col items-start justify-center h-6 w-25'>
                      <motion.p className = {`${inter.className} text-[9px] text-white font-bold`}>Maharshi</motion.p>
                      <motion.p className = {`${inter.className} text-[9px] text-white font-semibold`}>Pushed to prod</motion.p>
                    </motion.div>
            </motion.div>
            <motion.div 
            variants = {{
            initial : {
                y:0,
                scaleX : 1,
            },
             animate : {
                y:-45,
                z:20,
               scaleX : 1.35,
            }
            }}
            transition = {{
                duration : 0.3,
                type : 'spring',
                stiffness : 80,
                damping : 10,   
            }}
            className = 'absolute bottom-0 w-32 left-0.5  h-8 rounded-lg border border-white bg-gradient-to-r from-transparent from-5% via-cyan-600/20 via-20% via-cyan-400/10 via-59% to-transparent to-99% flex items-center justify-start gap-1 px-1 backdrop-blur-2xl shadow-[0_0_20px_rgba(165,243,252,0.35)]'>
                    <motion.div className = 'w-6 h-6 rounded-full'>
                      <img  src = {uifaces3.src} className = 'w-full h-full object-cover rounded-full' />
                    </motion.div>
                    <motion.div className = 'flex flex-col items-start justify-center h-6 w-25'>
                      <motion.p className = {`${inter.className} text-[9px] text-white font-bold`}>Alex</motion.p>
                      <motion.p className = {`${inter.className} text-[9px] text-white font-semibold`}>Deployed!!</motion.p>
                    </motion.div>
            </motion.div>
             <img src={waves.src} className = 'w-full h-full object-cover rounded-3xl' />
           </div>
        </div>
        </motion.div>
    )
}

