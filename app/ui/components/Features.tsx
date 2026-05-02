'use client'
import "@/app/globals.css"
import {inter} from "@/app/layout"
import Iphone from "../util-components/Iphone"
import Macbook from "../util-components/Macbook"
import BentoFeature from "../util-components/BentoFeature"
import CometCard from "../util-components/CometCard"

export default function Features(){
   return(
    <div className = 'flex flex-col items-start justify-start gap-4 py-24 pl-1 relative w-full max-w-6xl h-full dotted-frame-bottom'>
       <div className = 'flex flex-col items-start justify-start gap-2 ml-10' >
         <h1 className = {`${inter.className} text-2xl text-black font-semibold`}>From idea to infrastructure.</h1>
         <p className = {`${inter.className} text-neutral-600`}>
Whiteboard to production — design, build, and deliver all under one roof.</p>
       </div>
       <div className = 'grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
        <div className = 'flex flex-col items-start justify-start gap-2'>
            <div className = 'flex items-center justify-center bg-white/80 px-4 py-4 w-143 h-100 diamond-grid bg-[repeating-linear-gradient(315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%),repeating-linear-gradient(-315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%)] bg-[size:8px_8px] border border-neutral-200-'>
                 <div className = 'bg-black rounded-xl w-90 h-90 flex items-center justify-center'>
                    <Iphone />
                 </div>
            </div>
            <div className = 'flex items-center justidy-between gap-6 w-140 h-20 px-8 py-2 bg-white'>
                   <div className = 'flex items-center justify-center w-10  h-10 rounded-xs bg-blue-600 text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2)]'>
                     <h1 className = {`${inter.className} text-lg`}>1</h1>
                   </div>
                   <div>
                     <h1 className = {`${inter.className} text-2xl text-neutral-500 font-medium`}><span className = 'font-bold text-black'>Designing</span> with top notch<br></br> attention to detail for every pixel.</h1>
                   </div>
            </div>
            {/* text will come here */}
        </div>
        {/* first bento ends here */}
        <div className = 'flex flex-col items-start justify-start gap-2'>
            <div className = 'flex items-center justify-center bg-white/80 px-4 py-4 w-143 h-100 diamond-grid bg-[repeating-linear-gradient(315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%),repeating-linear-gradient(-315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%)] bg-[size:8px_8px] border border-neutral-200-'>
                 <div className = 'bg-white rounded-xl w-90 h-90 flex items-center justify-center'>
                    <BentoFeature />
                 </div>
            </div>
            <div className = 'flex items-center justidy-between gap-6 w-140 h-20 px-8 py-2 bg-white'>
                   <div className = 'flex items-center justify-center w-10  h-10 rounded-xs bg-yellow-500 text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2)]'>
                     <h1 className = {`${inter.className} text-lg`}>2</h1>
                   </div>
                   <div>
                     <h1 className = {`${inter.className} text-2xl text-neutral-500 font-medium`}><span className = 'font-bold text-black'>Development</span> with the latest stack<br></br> tools, performance optimized.</h1>
                   </div>
            </div>
            {/* text will come here */}
        </div>
        {/* second div ends here */}
        <div className = 'flex flex-col items-start justify-start gap-2'>
            <div className = 'flex items-center justify-center bg-white/80 px-4 py-4 w-143 h-100 diamond-grid bg-[repeating-linear-gradient(315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%),repeating-linear-gradient(-315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%)] bg-[size:8px_8px] border border-neutral-200-'>
                 <div className = 'bg-transparent rounded-xl w-90 h-90 flex items-center justify-center'>
                    <CometCard />
                 </div>
            </div>
            <div className = 'flex items-center justidy-between gap-6 w-140 h-20 px-8 py-2 bg-white'>
                   <div className = 'flex items-center justify-center w-10  h-10 rounded-xs bg-red-600 text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2)]'>
                     <h1 className = {`${inter.className} text-lg`}>3</h1>
                   </div>
                   <div>
                     <h1 className = {`${inter.className} text-2xl text-neutral-500 font-medium`}><span className = 'font-bold text-black'>Microinteractions</span> that feel intentional.</h1>
                   </div>
            </div>
            {/* text will come here */}
        </div>
        {/* third div ends here */}
        <div className = 'flex flex-col items-start justify-start gap-2'>
            <div className = 'flex items-center justify-center bg-white/80 px-4 py-4 w-143 h-100 diamond-grid bg-[repeating-linear-gradient(315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%),repeating-linear-gradient(-315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%)] bg-[size:8px_8px] border border-neutral-200-'>
                 <div className = 'bg-white rounded-xl w-90 h-90 flex items-center justify-center'>
                   <Macbook />
                 </div>
            </div>
            <div className = 'flex items-center justidy-between gap-6 w-140 h-20 px-8 py-2 bg-white'>
                   <div className = 'flex items-center justify-center w-10  h-10 rounded-xs bg-orange-600 text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2)]'>
                     <h1 className = {`${inter.className} text-lg`}>4</h1>
                   </div>
                   <div>
                     <h1 className = {`${inter.className} text-2xl text-neutral-500 font-medium`}><span className = 'font-bold text-black'>Communication </span> with clear and<br></br> concise channel, regular updates.</h1>
                   </div>
            </div>
            {/* text will come here */}
        </div>
        {/* fourth div ends here */}
       </div>
    </div>
   )
}