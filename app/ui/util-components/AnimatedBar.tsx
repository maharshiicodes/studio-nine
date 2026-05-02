'use client'
import { motion, useAnimate, useInView } from 'motion/react'
import { useEffect } from 'react'

export default function AnimatedBar({
  text,
  delay = 0,
  bottom = 0,
}: {
  text: string
  delay?: number
  bottom?: number
}) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (!isInView) return
    animateBar()
  }, [isInView])

  async function animateBar() {
  await new Promise(r => setTimeout(r, delay * 1000))
  let btm : number = bottom || 0; 
  const loader = scope.current.querySelector('.loader') as Element
  const tick = scope.current.querySelector('.tick') as Element
  const hello = scope.current.querySelector('.hello') as Element

  await animate(scope.current, {
    opacity: 1,
    filter: 'blur(0px)',
    y: -50 - btm,
  }, { duration: 0.5, ease: [0.22, 1, 0.36, 1] })
 
  await animate(loader, { opacity: 1 }, { duration: 0.2 })
  await animate(loader, { rotate: 720 }, { duration: 1, ease: 'linear' })

  animate(loader, { opacity: 0, scale: 0 }, { duration: 0.15 })
  animate(tick, { opacity: 1, scale: 1 }, { duration: 0.3 })
  animate(hello, { opacity: 1, filter: 'blur(0px)', y: 0 }, { duration: 0.5, ease: [0.22, 1, 0.36, 1] })
}

  return (
    <motion.div
      ref={scope}
      style={{ bottom: `${bottom}px` }}   
      className=' absolute left-6 flex items-center gap-3 px-4 h-10 bg-transparent w-45 rounded-md border border-gray-300'
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
    >
      <div className='relative w-5 h-5 shrink-0'>
        <motion.svg
          className='loader absolute inset-0'
          initial={{ opacity: 0 }}
          xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24" fill="none" stroke="black"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>

        <svg
          className='tick absolute inset-0'
          style={{ opacity: 0, transform: 'scale(0.5)' }}
          xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24" fill="none" stroke="#3b82f6"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </div>

      <motion.p
        className='hello text-md tracking-tight text-black font-extralight font-serif'
        initial={{ opacity: 0, filter: 'blur(6px)', y: 6 }}
      >
        {text}
      </motion.p>
    </motion.div>
  )
}