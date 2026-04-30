'use client'
import Navbar from "./Navbar";
import "@/app/globals.css"
import GeistsSans from "@/app/layout"

export default function Hero() {
  return(
     <div className="relative  w-full max-w-4xl mx-auto h-200 flex items-center justify-between py-32 px-16 dotted-frame dotted-frame-bottom">
        <div
        style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center top',
      }} className = 'absolute top-0 h-80 w-full mask-b-from-30%'></div>
      <div className ='bg-transparent w-180 h-60 flex flex-col items-center gap-4 justify-start mx-auto'>
          <div className = 'mx-auto'>
            <h1 className = 'text-4xl font-geist-sans text-center font-black'>We build softwares <br></br> that <span className = 'font-serif italic font-extralight'>earns</span> <span className = 'bg-blue-500 text-white'>trust - pixel by pixel</span></h1>
          </div>
          <div>
            <h1 className = 'text-center text-xl'>Arcform is a web and mobile studio for founders who know the difference  between software that ships and software that sticks. We handle both.</h1>
          </div>
          <div className = 'flex items-center justify-center gap-5  w-90 h-20'>
            <button className=" px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)]">Explore our work</button>
             <button className = 'bg-white border border-neutral-300 w-40 h-11 rounded-xl hover:bg-neutral-100'>
                Start a project
             </button>
              
          </div>
      </div>
        <div className="absolute top-10 left-12 w-full">
          <Navbar />
        </div>
      </div>
  )
}

