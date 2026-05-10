'use client'
import { motion , useMotionValue , useSpring } from 'motion/react';
import { inter } from '@/app/layout'
import React, { useRef } from 'react';
import asteroid from '../../assets/images/asteroids.png';

export default function CometCard() {
    const cardRef = useRef<HTMLDivElement>(null);
    const rotateX = useSpring(useMotionValue(0),{ stiffness: 300, damping: 30 });
    const rotateY = useSpring(useMotionValue(0),{ stiffness: 300, damping: 30 });
    
    const handleMouseMove = (e : React.MouseEvent) => {
        const card = cardRef.current!.getBoundingClientRect();
        const centerX = card.left + card.width / 2;
        const centerY = card.top + card.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        rotateX.set(deltaX / 5);
        rotateY.set(-deltaY / 5);
    }

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    }

    return(  
        <motion.div 
        ref = {cardRef}
        onMouseMove = {handleMouseMove}
        onMouseLeave = {handleMouseLeave}
        style = {{
            rotateX : rotateX,
            rotateY : rotateY,
            transformStyle : "preserve-3d",
            transformPerspective: 800,
        }}
        transition = {{
            type : 'spring',
            duration : 0.9,
            stiffness : 300,
            damping : 30,
        }}
        className = 'flex flex-col items-start justify-start gap-2 px-3 sm:px-4 py-6 sm:py-8 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-xl bg-linear-to-br/oklch from-black via-neutral-700 to-black cursor-grabbing group'>
           <motion.h1 
           style = {{
            translateZ : 10,
           }}
           className = {`${inter.className} font-semibold text-lg sm:text-xl md:text-2xl bg-linear-to-br from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent tracking-tight`} >Studio Nine</motion.h1>
            <motion.p 
            style = {{
                translateZ : 5,
            }}
            className = {`${inter.className} text-xs sm:text-sm bg-linear-to-r from-white via-neutral-400 to-white bg-clip-text text-transparent `}>Every hover, tap and scroll <br className="hidden sm:block" />feel like it was made to delight.</motion.p>
            <img src={asteroid.src} className='w-full max-w-[18rem] h-28 sm:h-36 md:h-40 object-cover rounded-3xl mt-2 mx-auto grayscale group-hover:grayscale-0 pointer-events-none' />
        </motion.div>
    )
}