'use client'
import { inter } from "@/app/layout"
import { CiCircleCheck } from "react-icons/ci";

export default function Pricing(){
    return(
        <div id="pricing" className = 'w-full dotted-frame-bottom flex flex-col items-center justify-start gap-10 sm:gap-14 py-10 sm:py-12 px-4 sm:px-6'>
           <h1 className = {`${inter.className} text-lg sm:text-xl text-black font-medium text-center`}>
            <span>Straightforward, one-time pricing</span> <br className="hidden sm:block" /><span className = 'text-xl sm:text-2xl'>that <span className = 'bg-blue-700 text-white px-1 rounded'> works for you</span> and your business.</span>
           </h1>
           <div className = 'flex flex-col items-center justify-start lg:flex-row w-full gap-6'>
             <div className = 'bg-white rounded-lg border border-neutral-300 flex flex-col items-center justify-start gap-3 py-10 sm:py-12 w-full lg:w-1/2'>
             <div className = 'flex flex-col items-center justify-start gap-2 text-center px-6'>
                <h1 className = {`${inter.className} text-xl sm:text-2xl font-semibold text-black`}>Single Page Website</h1>
                <p className = {`${inter.className} text-sm sm:text-base text-gray-600`}>Ideal for startups and small businesses that need a great converting website.</p>
            </div>
            <div>
                <h1 className = {`${inter.className} text-base sm:text-lg text-neutral-500 text-center`}>$ <span className = 'text-3xl sm:text-4xl text-black font-bold'>499</span> one time payment</h1>
            </div>
           <div className = {`${inter.className} flex flex-col gap-2 items-center justify-start mt-4 w-full px-6`} >
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Single Page Landing Page</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Design and Development</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>React / Next / Tailwind Code</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Limited Revisions</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>24-hour support response time</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Private communication channel</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>CMS integration</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Hosting and Deployment Assistance</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Search Engine Optimization</p>
             </div>
             <div>
                <button  className={`px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-sm cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className} mt-8 w-full sm:w-80`}>Buy Single Page Website</button>
             </div>
           </div>
           
        </div>
        <div className = 'bg-white rounded-lg border border-neutral-300 flex flex-col items-center justify-start gap-3 py-10 sm:py-12 w-full lg:w-1/2'>
             <div className = 'flex flex-col items-center justify-start gap-2 text-center px-6'>
                <h1 className = {`${inter.className} text-xl sm:text-2xl font-semibold text-black`}>Multi Page Website</h1>
                <p className = {`${inter.className} text-sm sm:text-base text-gray-600`}>Ideal for startups, enterprises and small businesses that need a great converting website.</p>
            </div>
            <div>
                <h1 className = {`${inter.className} text-base sm:text-lg text-neutral-500 text-center`}>$ <span className = 'text-3xl sm:text-4xl text-black font-bold'>4999</span> one time payment</h1>
            </div>
           <div className = {`${inter.className} flex flex-col gap-2 items-center justify-start mt-4 w-full px-6`} >
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Multi-Page Website</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Design and Development</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>React / Next / Tailwind Code</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Limited Revisions</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>24-hour support response time</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Private communication channel</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>CMS integration</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Hosting and Deployment Assistance</p>
             </div>
             <div className = 'flex items-center justify-start gap-2 w-full'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold'>Search Engine Optimization</p>
             </div>
           </div>
           <button  className={`px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-sm cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className} mt-8 w-full sm:w-80`}>Buy Multi Page Website</button>
        </div>
 
           {/* {first div ends here} */}
           </div>
        </div>
    )
}