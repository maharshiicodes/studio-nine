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
     <div className="relative w-full max-w-6xl mx-auto h-160 flex items-center justify-between py-32 px-16 dotted-frame dotted-frame-bottom">
        <div
        style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center top',
      }} className = 'absolute top-0 h-80 w-full mask-b-from-30% mask-r-from-60%'></div>
      <div className ='bg-transparent  w-180 h-60 flex flex-col items-center gap-4 justify-start mx-auto'>
          <div className = 'mx-auto'>
            <h1 className = {`text-5xl text-center tracking-tight leading-tight font-bold  ${inter.className}`}>We build softwares <br></br> that <span className = 'font-serif italic font-extralight'>earns</span> <span className = 'bg-blue-500 text-white'>trust - pixel by pixel</span></h1>
          </div>
          <div>
            <h1 className = {`text-center text-xl ${inter.className}`}>Studio Nine is a web and mobile studio for founders who know the difference  between software that ships and software that sticks. We handle both.</h1>
          </div>
          <div className = 'flex items-center justify-center gap-5  w-90 h-20'>
            <button className={`px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className}`}>Explore our work</button>
             <button
  className={`bg-white border cursor-pointer border-neutral-300 w-40 h-11 rounded-xl hover:bg-neutral-100 ${inter.className} flex items-center justify-center gap-2 `}
  onMouseEnter={() => arrowRef.current?.startAnimation()}
  onMouseLeave={() => arrowRef.current?.stopAnimation()}
>
                Start a project
                <ArrowNarrowRightIcon size={16} color="#000" strokeWidth={2} />
             </button>
              
          </div>
      </div>
        <div className="absolute top-10 left-12 w-full">
          <Navbar />
        </div>
      </div>
  )
}

