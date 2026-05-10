'use client'

import { inter } from "@/app/layout"
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


export default function Footer(){
    return(
        <div className = 'w-full dotted-frame-bottom flex flex-col items-start justify-start md:flex-row md:justify-between gap-14 py-12 px-20 h-50 dotted-frame-bottom '>
            <div className = {`${inter.className} text-2xl font-normal`}>Studio Nine<br></br>
            <p className = {`${inter.className} text-sm  text-neutral-500 mt-2`}>We build software that earns<br></br> trust pixle by pixel</p>
            </div>
            <div className = {`${inter.className} text-sm  text-neutral-500 mt-2`}>Made with ❤️ by <span className = {`${inter.className} text-black font-bold`}><a href="https://x.com/maharshi_l1311" target="_blank" rel="noopener noreferrer">Maharshi</a></span>
            
                <div className = 'flex gap-4 mt-3'>
                    <a href="https://x.com/maharshi_l1311" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size={24} className = 'hover:text-black transition-colors duration-300'/></a>
                    <a href="https://www.linkedin.com/in/maharshi-lavana-4857a2316/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} className = 'hover:text-blue-700 transition-colors duration-300'/></a>
                    <a href="https://leetcode.com/geekymahrshi/" target="_blank" rel="noopener noreferrer"><SiLeetcode size={24} className = 'hover:text-yellow-500 transition-colors duration-300'/></a>
                    <a href="https://github.com/maharshiicodes" target="_blank" rel="noopener noreferrer"><FaGithub size={24} className = 'hover:text-black transition-colors duration-300'/></a>
                </div>
            </div>
        </div>
    )
} 