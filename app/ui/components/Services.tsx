'use client'
import AnimatedIphone from "../util-components/AnimatedIphone"
import { inter } from "@/app/layout"
import clonely from '../../assets/images/clonely.png'
import {
   HiOutlineCodeBracket,
   HiOutlineDevicePhoneMobile,
   HiOutlineMoon,
   HiOutlineSparkles,
   HiOutlineChatBubbleLeftRight,
   HiOutlineArrowPath
} from "react-icons/hi2"

export default function Services(){
   const features = [
      {
         title: "Web design and development",
         description: "We design and build with love, care and attention to detail.",
         icon: HiOutlineCodeBracket
      },
      {
         title: "Mobile Responsive",
         description: "We make sure your website is responsive and looks great on all devices.",
         icon: HiOutlineDevicePhoneMobile
      },
      {
         title: "Dark and Light Mode",
         description: "We make sure your website is accessible and looks great in both modes.",
         icon: HiOutlineMoon
      },
      {
         title: "Latest Tech Stack",
         description: "We use the latest and greatest technologies to build your website.",
         icon: HiOutlineSparkles
      },
      {
         title: "Regular updates and communication",
         description: "We keep you updated on the progress of your website and communicate with you regularly.",
         icon: HiOutlineChatBubbleLeftRight
      },
      {
         title: "Future updates and improvements",
         description: "We make sure your website is future-proof and can be easily updated and improved.",
         icon: HiOutlineArrowPath
      }
   ]

    return (
        <div className = 'w-full dotted-frame-bottom flex flex-col items-center justify-start gap-10 sm:gap-14 py-10 sm:py-14 px-4 sm:px-6'>
           <div className="text-center">
             <h1 className = {`${inter.className} text-lg sm:text-xl font-semibold`}> We take care of things from <span className = 'bg-blue-700 text-white px-1 rounded'>start to finish</span></h1>
           </div>
           <div className = 'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 w-full max-w-4xl'>
               <div className = 'relative flex items-center justify-center px-4 py-4 w-full min-h-[22rem] sm:min-h-[26rem] diamond-grid bg-neutral-100 border border-neutral-200 rounded-lg'>
                  <div className = 'absolute top-5 h-56 sm:h-64 md:h-70 w-[80%] sm:w-[400px] shadow-xl rounded-lg flex items-center justify-center bg-transparent overflow-hidden'>
                   <img src={clonely.src} alt="Clonely" className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] grayscale-100 hover:filter-none hover:cursor-pointer hover:scale-101 transition-all ease-in-out" />
                  </div>
                  <div className = 'flex flex-col items-start bg-neutral-100 justify-start gap-1 absolute bottom-1 left-3 px-2 py-4 bg-linear-to-t rounded-md border border-neutral-200 border-b-0 border-l-0 border-r-0 w-[90%] sm:w-100 h-auto z-5'>
                     <h1 className = {`${inter.className} text-black font-bold`}>Web and App Design & Development</h1>
                     <h3 className = {`${inter.className} text-neutral-600 text-sm`}>From idea, to wireframes to design, all taken care at a speed nobody can match.</h3>
                  </div>
               </div>
                <div className = 'relative flex items-center justify-center px-4 py-4 w-full min-h-[22rem] sm:min-h-[26rem] diamond-grid bg-neutral-100 border border-neutral-200 rounded-lg'>
                 <div>
                     <AnimatedIphone />
                 </div>
                  <div className = 'flex flex-col items-start justify-start gap-1 absolute bottom-1 left-3 px-2 py-4 bg-neutral-100 rounded-md border border-neutral-200 border-b-0 border-l-0 border-r-0 w-[90%] sm:w-100 h-auto'>
                     <h1 className = {`${inter.className} text-black font-bold`}>Microinteractions and 3D</h1>
                     <h3 className = {`${inter.className} text-neutral-600 text-sm`}>We specialize in creating microinteractions and 3D animations to make your website more engaging and interactive.</h3>
                  </div>
               </div>
                  <div className = 'flex items-center justify-center lg:col-span-2 bg-white/80 px-4 py-8 w-full border border-neutral-200 rounded-lg'>
                     <div className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full max-w-5xl'>
                        {features.map((feature) => {
                           const Icon = feature.icon
                           return (
                              <div key={feature.title} className = 'flex items-start gap-4'>
                                 <div className = 'mt-1 flex h-9 w-9 items-center justify-center  bg-white text-blue-700'>
                                    <Icon className = 'h-5 w-5' />
                                 </div>
                                 <div className = 'flex flex-col gap-2'>
                                    <h3 className = {`${inter.className} text-sm font-semibold text-neutral-900`}>
                                       {feature.title}
                                    </h3>
                                    <p className = {`${inter.className} text-sm text-neutral-600`}>
                                       {feature.description}
                                    </p>
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                  </div>
           </div>
        </div>
    )
}