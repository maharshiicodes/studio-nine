'use client'

import { inter } from "@/app/layout"
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


export default function Footer(){
    return(
        <div className = 'w-full dotted-frame-bottom flex flex-col items-start justify-start md:flex-row md:justify-between gap-8 sm:gap-12 py-10 sm:py-12 px-4 sm:px-8 md:px-20 h-auto'>
            <div className = {`${inter.className} text-xl sm:text-2xl font-normal text-center md:text-left w-full md:w-auto`}>
              Studio Nine<br className="hidden md:block" />
              <p className = {`${inter.className} text-sm text-neutral-500 mt-2`}>We build software that earns<br className="hidden md:block" /> trust pixle by pixel</p>
            </div>
            <div className = {`${inter.className} text-sm text-neutral-500 mt-2 text-center md:text-right w-full md:w-auto`}>
              Made with ❤️ by <span className = {`${inter.className} text-black font-bold`}><a href="https://x.com/maharshi_l1311" target="_blank" rel="noopener noreferrer">Maharshi</a></span>
            
                <div className = 'flex justify-center md:justify-end gap-4 mt-3'>
                    <a href="https://x.com/maharshi_l1311" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size={24} className = 'hover:text-black transition-colors duration-300'/></a>
                    <a href="https://www.linkedin.com/in/maharshi-lavana-4857a2316/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} className = 'hover:text-blue-700 transition-colors duration-300'/></a>
                    <a href="https://leetcode.com/geekymahrshi/" target="_blank" rel="noopener noreferrer"><SiLeetcode size={24} className = 'hover:text-yellow-500 transition-colors duration-300'/></a>
                    <a href="https://github.com/maharshiicodes" target="_blank" rel="noopener noreferrer"><FaGithub size={24} className = 'hover:text-black transition-colors duration-300'/></a>
                </div>
            </div>
        </div>
    )
} 