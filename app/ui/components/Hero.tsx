'use client'
import Navbar from "./Navbar";
import "@/app/globals.css"
import  {inter}from "@/app/layout"
import type { AnimatedIconHandle } from "@/components/ui/types"
import ArrowNarrowRightIcon from "@/components/ui/arrow-narrow-right-icon";
import { useRef } from "react";
import { motion } from "motion/react"

export default function Hero() {
  const companies = ["Novalyr", "Stackrift", "Lunara", "Codewave", "Veltro", "Draftly", "Axiom", "Buildex"]
  const arrowRef = useRef<AnimatedIconHandle>(null)
  return(
     <div className="relative w-full max-w-6xl mx-auto  min-h-[28rem] md:min-h-[40rem] flex items-center justify-center py-16 md:py-32 px-5 sm:px-10 md:px-16 dotted-frame dotted-frame-bottom">
        <div
        style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center top',
      }} className = 'absolute top-0 h-56 md:h-80 w-full mask-b-from-30% md:mask-r-from-60%'></div>
      <div className ='bg-transparent w-full max-w-3xl flex flex-col items-center gap-4 sm:gap-5 justify-start mx-auto mt-12 text-center'>
          <div className = 'mx-auto'>
            <h1 className = {`text-3xl sm:text-4xl md:text-5xl text-center tracking-tight leading-tight font-bold ${inter.className}`}>We build softwares <br className="hidden sm:block" /> that <span className = 'font-serif italic font-extralight'>earns</span> <span className = 'bg-blue-500 text-white px-1.5 sm:px-2 rounded'>trust - pixel by pixel</span></h1>
          </div>
          <div>
            <h1 className = {`text-center text-base sm:text-lg md:text-xl text-neutral-700 ${inter.className}`}>Studio Nine is a web and mobile studio for founders who know the difference between software that ships and software that sticks. We handle both.</h1>
          </div>
          <div className = 'flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full'>
            <button className={`w-full sm:w-auto px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className}`}>Explore our work</button>
             <button
  className={`bg-white border cursor-pointer border-neutral-300 w-full sm:w-40 h-11 rounded-xl hover:bg-neutral-100 ${inter.className} flex items-center justify-center gap-2 `}
  onMouseEnter={() => arrowRef.current?.startAnimation()}
  onMouseLeave={() => arrowRef.current?.stopAnimation()}
>
                Start a project
                <ArrowNarrowRightIcon size={16} color="#000" strokeWidth={2} />
             </button>
              
          </div>
      </div>
        <div className="absolute top-6 md:top-10 left-4 sm:left-8 md:left-12 w-full">
          <Navbar />
        </div>
      </div>
  )
}

