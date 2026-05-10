'use client'
import { inter } from "@/app/layout"
import { CiCircleCheck } from "react-icons/ci";

export default function Pricing(){
    return(
        <div className = 'w-full dotted-frame-bottom flex flex-col items-center justify-start gap-14 py-12 px-2 h-190 dotted-frame-bottom'>
           <h1 className = {`${inter.className} text-xl text-black font-medium text-center`}>
            <span className ='ml-20'>Straightforward, one-time pricing</span> <br></br><span className = 'text-2xl ml-18'>that <span className = 'bg-blue-700 text-white'> works for you</span> and your business.</span>
           </h1>
           <div className = 'flex flex-col items-center justify-start md:flex-row w-full'>
             <div className = 'bg-white rounded-lg h-150 border border-neutral-300 flex flex-col items-center justify-start gap-3 py-12 w-1/2'>
             <div className = 'flex flex-col items-center justify-start gap-2'>
                <h1 className = {`${inter.className} text-2xl font-semibold text-black text-left mr-18`}>Single Page Website</h1>
                <p className = {`${inter.className} text-base text-gray-600 text-left ml-6`}>Ideal for startups and small businesses that<br></br> need a great converting website.</p>
            </div>
            <div>
                <h1 className = {`${inter.className} text-lg text-neutral-500 text-left mr-18`}>$<span>  </span> <span className = 'text-4xl text-black font-bold'>499</span><span>  </span> one time payment</h1>
            </div>
           <div className = {`${inter.className} flex flex-col gap-2 items-center justify-start mt-4`} >
             <div className = 'flex items-center justify-center gap-1 mr-25'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Single Page Landing Page</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-27'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Design and Development</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-21'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>React / Next / Tailwind Code</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-41'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Limited Revisions</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-14'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>24-hour support response time</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-13'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Private communication channel</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-43'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>CMS integration</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-4'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Hosting and Deployment Assistance</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-21'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Search Engine Optimization</p>
             </div>
             <div>
                <button  className={`px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-sm cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className} mt-11 w-140`}>Buy Single Page Website</button>
             </div>
           </div>
           
        </div>
        <div className = 'bg-white rounded-lg h-150 w-1/2 border border-neutral-300 flex flex-col items-center justify-start gap-3 py-12'>
             <div className = 'flex flex-col items-center justify-start gap-2'>
                <h1 className = {`${inter.className} text-2xl font-semibold text-black text-left mr-18`}>Multi Page Website</h1>
                <p className = {`${inter.className} text-base text-gray-600 text-left ml-19`}>Ideal for startups,enterprises and small businesses <br></br>that need a great converting website.</p>
            </div>
            <div>
                <h1 className = {`${inter.className} text-lg text-neutral-500 text-left mr-18`}>$<span>  </span> <span className = 'text-4xl text-black font-bold'>4999</span><span>  </span> one time payment</h1>
            </div>
           <div className = {`${inter.className} flex flex-col gap-2 items-center justify-start mt-4`} >
             <div className = 'flex items-center justify-center gap-1 mr-37'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Multi-Page Website</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-27'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Design and Development</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-21'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>React / Next / Tailwind Code</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-41'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Limited Revisions</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-14'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>24-hour support response time</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-13'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Private communication channel</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-43'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>CMS integration</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-4'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Hosting and Deployment Assistance</p>
             </div>
             <div className = 'flex items-center justify-center gap-1 mr-21'>
                <CiCircleCheck className = 'text-blue-600 text-2xl'/>
                <p className = 'text-neutral-600 font-semibold '>Search Engine Optimization</p>
             </div>
           </div>
           <button  className={`px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-sm cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className} mt-10 w-140`}>Buy Multi Page Website</button>
        </div>
 
           {/* {first div ends here} */}
           </div>
        </div>
    )
}