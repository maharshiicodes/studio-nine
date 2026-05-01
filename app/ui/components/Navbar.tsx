'use client'
import "@/app/globals.css";
import { inter } from "@/app/layout";

const navlinks = [
    {
        name : 'Services',
        link : '/services'
    },
    {
        name : 'Pricing',
        link : '/pricing'
    },
    {
        name : 'Work',
        link : '/work'
    }
]
export default function Navbar() {
    return(
        <nav className = 'w-200 h-16 bg-white flex items-center justify-between px-8 shadow-md rounded-2xl border border-neutral-200 mx-auto'>
            <div>
                <h1 className = {`text-xl font-bold text-gray-800 cursor-pointer ${inter.className}`}>Studio Nine</h1>
            </div>
            <div className = 'flex items-center gap-8'>
                {navlinks.map((item,index) => (
                    <a key = {index} href = {item.link} className = {`text-black ${inter.className}`}>{item.name}</a>
                    
                ))}
            </div>
           <button className={`px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className}`}>Talk to us</button>
            
        </nav>
    )
}