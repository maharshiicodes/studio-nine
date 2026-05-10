'use client'
import "@/app/globals.css"
import { inter } from "@/app/layout"
import {motion} from "motion/react"
import cobalt from "../../assets/images/cobalt.png";
import finance from "../../assets/images/finance.png";
import mobile_green from "../../assets/images/mobile_green.png";
import jira from "../../assets/images/jira.png";
import gems_ai from "../../assets/images/gems_ai.png";
import { cn } from "@/lib/utils"

export default function Work(){
    const images : string[] = [cobalt.src, finance.src, mobile_green.src, jira.src, gems_ai.src];
    const duplicated_images : string[] = [...images,...images];
    return(
        <div className = 'flex flex-col items-center justify-start px-4 sm:px-6 py-10 sm:py-14 gap-10 sm:gap-16 w-full max-w-6xl h-auto dotted-frame-bottom'>
            <h1 className = {`${inter.className} text-2xl sm:text-3xl md:text-4xl tracking-tight text-black font-semibold mt-6 sm:mt-10 text-center`}>We've worked with some of the<br className="hidden sm:block" /><span className = 'text-blue-500'>best companies</span> around the world </h1>
            <div className = 'relative w-full h-56 sm:h-72 md:h-80 bg-transparent py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]'>
               <HorizontalScale className = 'absolute top-0 w-full max-w-6xl mx-auto'/>
                <HorizontalScale className = 'absolute bottom-0 w-full max-w-6xl mx-auto'/>
               <motion.div 
               animate = {{
                x : ["0%","-50%"],
               }}
               transition = {{
                duration : 20,
                repeat : Infinity,
                ease : "linear"
               }}
                   className = 'flex w-max gap-3 sm:gap-4'>
                {duplicated_images.map((src , index) => (
                   
                    <img src = {src} alt = {`company-${index}`} key = {index} className = 'w-56 h-36 sm:w-64 sm:h-44 md:w-80 md:h-60 object-cover my-4 sm:my-5 rounded-2xl sm:rounded-3xl'/>
                    
                ))}
               </motion.div>
            </div>
        </div>
    )
}

const HorizontalScale = ({ className }: { className?: string }) => {
    return <div className={cn("h-4 w-full bg-[repeating-linear-gradient(315deg,#d4d4d4_0px,#d4d4d4_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-neutral-300", className)} />
} 