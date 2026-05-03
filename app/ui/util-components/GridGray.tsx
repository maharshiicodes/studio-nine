'use client'
import {inter } from "@/app/layout"
import { cn } from "@/lib/utils"

interface GridGrayProps {
    feedback : string,
    avatar: string,
    name : string,
    work : string,
    className?: string,
}

export default function GridGray({ feedback, avatar, name, work , className }: GridGrayProps){
   return(
    <div className = {cn('flex flex-col items-start justify-between p-6 bg-neutral-50 rounded-3xl gap-4 border border-neutral-300 w-94 h-88 ', className)}>
        <h1 className = {`${inter.className} text-black text-lg`}>{feedback}</h1>
        <div className = 'flex items-center justify-center gap-4'>
            <img src={avatar} alt="Avatar" className = 'w-12 h-12 rounded-full object-cover'/>
            <div className = 'flex flex-col items-start justify-center gap-1'>
                <h2 className = {`${inter.className} text-black text-sm font-semibold`}>{name}</h2>
                <p className = {`${inter.className} text-neutral-500 text-xs`}>{work}</p>
            </div>
        </div>
    </div>
   )
}