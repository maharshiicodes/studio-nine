'use client'
import AnimatedBar from "./AnimatedBar"
import inter from '@/app/layout'

export default function BentoFeature() {
  return (
    <div className='relative bg-gradient-to-b from-white via-neutral-100 to-neutral-200 border border-black border-dashed w-80 h-80 rounded-lg shadow-md flex flex-col items-start justify-start gap-4 p-6 mask-tr-from-50%'>
      <div className = 'mb-20'>
        <h1 className='text-2xl font-serif tracking-tight font-black'>Our Tech Stack</h1>
        <p className='text-sm font-serif tracking-tighter font-light'>Built with tools that scale.</p>
        <p className='text-sm font-serif tracking-tighter font-light'>We pick the right stack for your product — fast, modern, and production-ready.</p>

        <AnimatedBar text="Next.js & React" delay={0}   bottom={0}  />
        <AnimatedBar text="Flutter & Swift" delay={1.8} bottom={22} />
        <AnimatedBar text="Prisma & Postgres"   delay={3.6} bottom={44} />
      </div> 
    </div>
  )
}