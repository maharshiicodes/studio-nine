'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';
import { inter } from '@/app/layout';

interface TextScrollProps {
  feedback: string | string[];
  avatar: string;
  name: string;
  work: string;
  className?: string;
}

function AnimatedWord({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  const start = index / total;
  const end = Math.min(start + 2 / total, 1);

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['rgba(255,255,255,0.25)', 'rgba(255,255,255,1)']
  );

  return (
    <motion.span style={{ color }} 
    transition = {{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.7,
    }}
    className="inline-block mx-1 text-2xl leading-relaxed">
      {word}
    </motion.span>
  );
}

export default function TextScroll({ feedback, avatar, name, work, className }: TextScrollProps) {
  if (typeof feedback === 'string') {
    feedback = feedback.split(' ');
  }

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end 0.9'],
  });

  return (
    <div ref={ref} className= {cn("relative flex flex-col items-start justify-start gap-24 px-8 py-8 bg-blue-500 text-white rounded-3xl mx-auto w-90 h-176", className)}>
      <div>
        <h1 className = {`${inter.className} text-lg font-normal leading-relaxed`}>
        {feedback.map((word, index) => (
          <AnimatedWord
            key={index}
            word={word}
            index={index}
            total={feedback.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <img src={avatar} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className={`${inter.className} text-white font-semibold text-sm`}>{name}</p>
          <p className={`${inter.className} text-white text-xs`}>{work}</p>
        </div>
      </div>
    </div>
  );
}