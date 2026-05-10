'use client'
import "@/app/globals.css"
import {inter} from "@/app/layout"
import  uifaces1 from '@/app/assets/images/uifaces-1.jpg';
import  uifaces2 from '@/app/assets/images/uifaces-2.jpg';
import  uifaces3 from '@/app/assets/images/uifaces-3.jpg';
import  uifaces4 from '@/app/assets/images/uifaces4.jpg';
import  uifaces5 from '@/app/assets/images/uifaces5.jpg';
import  uifaces6 from '@/app/assets/images/uifaces-6r.jpg';
import  uifaces7 from '@/app/assets/images/uifaces-7.jpg';
import  uifaces8 from '@/app/assets/images/uifaces-8.jpg';
import GridGray from "@/app/ui/util-components/GridGray";
import TextScroll from "../util-components/TextScroll";   

export default function Testimonials(){
    return(
        <div className = 'w-full max-w-6xl h-auto dotted-frame-bottom flex flex-col items-center justify-start gap-4 py-10 sm:py-14 px-4 sm:px-6'>
            <h1 className = {`${inter.className } text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-black via-neutral-700 to-neutral-500 bg-clip-text text-transparent tracking-tight font-semibold text-center`}>
                WHAT OUR <span className = 'text-blue-500 '>CLIENTS</span> SAY
            </h1>
            <div className = 'w-full h-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-5'>
              <GridGray 
              feedback = "Excellent communication and professionalism: open to ideas, humble when views differ. We'll re-engage; can't wait for the next job together."
              avatar = {uifaces1.src}
              name = "David Thorne"
              work = "Founder at Synthetix"
               />
               <TextScroll 
               feedback="I'd highly recommend Maharshi for a site redesign. He turned our rough shell into a polished product—impeccable taste, real partnership, and the adaptability you need in a startup. We scoped a few pages; he delivered so well we expanded the engagement."
               avatar={uifaces2.src}
               name="Alex Garcia"
               work="Product Manager at Send AI"
               className = "row-span-2 my-auto"
               />
               <GridGray 
              feedback = "The best front-end developer I've worked with. He took the requirements and ran with them. We're delighted with the product."
              avatar = {uifaces3.src}
              name = "Leo Sterling"
              work = "CTO @ OmniMind"
               />
               <GridGray 
              feedback = "Quick to respond, very professional, and shipped a site within a week. Looking forward to the next collaboration"
              avatar = {uifaces4.src}
              name = "Marcus Dean"
              work = "CEO @ CoreLogic AI"
               />
               <GridGray 
              feedback = "Talented, communicative, and fast across the board. Highly recommend."
              avatar = {uifaces5.src}
              name = "Zack Morrison"
              work = "Co-founder @ Jibber"
               />
               <GridGray 
              feedback = "Talented, communicative, and fast across the board. Highly recommend."
              avatar = {uifaces6.src}
              name = "Elias Boyd"
              work = "CMO @ Katchy"
               />
               <GridGray 
              feedback = "From a loose brief to a full site in a week, with strong intuition and taste. He's always leveling up on the newest UI techniques."
              avatar = {uifaces7.src}
              name = "Michael Chang"
              work = "VP Product @ ShiftHQ"
              className="mx-auto w-88"
               />
               <GridGray 
              feedback = "From rough concept to polished product: patient with feedback, great collaboration, and delivery that matched our evolving vision."
              avatar = {uifaces8.src}
              name = "Chloe Lin"
              work = "Head of Product @ Yuzu"
               />
            </div>
        </div>
    )
}
