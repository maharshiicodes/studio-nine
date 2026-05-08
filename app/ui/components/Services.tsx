'use client'
import AnimatedIphone from "../util-components/AnimatedIphone"
import  {inter } from "@/app/layout"

export default function Services(){
    return (
        <div className = 'w-full  dotted-frame-bottom flex flex-col items-center justify-start gap-14 py-6 h-220 dotted-frame-bottom '>
           <div>
             <h1 className = {`${inter.className} text-xl font-semibold`}> We take care of things from <span className = 'bg-blue-700 text-white'>start to finish</span></h1>
           </div>
           <div className = 'grid grid-cols-2 grid-rows-2  gap-10 w-full h-80 max-w-4xl'>
               <div className = 'flex items-center justify-center  bg-white/80 px-4 py-4 w-full h-100 diamond-grid bg-[repeating-linear-gradient(315deg,#ffffff_0px,#d4d4d4_1px,transparent_0px,transparent_50%),repeating-linear-gradient(-315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%)] bg-[size:4px_4px]  border border-neutral-200-'>
                  <div className = 'h-70 w-full max-w-xl shadow-xl rounded-lg flex items-center justify-center bg-black border border-white border-4 '>

                  </div>
               </div>
               <div className = 'flex items-center justify-center bg-white px-4 py-4 w-full h-100 diamond-grid bg-[repeating-linear-gradient(315deg,#ffffff_0px,#d4d4d4_1px,transparent_0px,transparent_50%),repeating-linear-gradient(-315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_0px,transparent_50%)] bg-[size:4px_4px] border border-neutral-200-'>

               </div>
               <div className = 'flex items-center justify-center col-span-2 mt-60 bg-white/80 px-4 py-4 w-full h-80 border border-neutral-200-'>

               </div>
           </div>
        </div>
    )
}