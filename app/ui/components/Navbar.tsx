'use client'
import "@/app/globals.css";
import { inter } from "@/app/layout";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
interface NavbarProps {
    className ?: string,
}
export default function Navbar({ className }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className = {cn('w-93 md:w-270 max-w-6xl h-16 bg-white flex items-center justify-between px-4 sm:px-6 md:px-8 shadow-md rounded-2xl border border-neutral-200 mr-12 relative', className)}>
            <div>
                <h1 className = {`text-xl font-bold text-gray-800 cursor-pointer ${inter.className}`}>Studio Nine</h1>
            </div>
            <div className = 'hidden md:flex items-center gap-8'>
                {navlinks.map((item,index) => (
                    <a key = {index} href = {item.link} className = {`text-black ${inter.className}`}>{item.name}</a>
                    
                ))}
            </div>
           <button className={`hidden md:inline-flex px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className}`}>Talk to us</button>

            <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className={`md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-neutral-200 text-gray-800 bg-white shadow-sm transition-colors hover:bg-neutral-50 ${inter.className}`}
            >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute left-0 top-full mt-3 w-full rounded-2xl border border-neutral-200 bg-white shadow-lg p-5 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navlinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className={`text-black ${inter.className}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                className={`w-full px-4 py-2 text-white font-medium bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg cursor-pointer
             border-2 border-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] ${inter.className}`}
                            >
                                Talk to us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
        </nav>
    )
}