'use client'

import { motion } from 'framer-motion';

interface ButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

export default function Button({ isActive, toggleMenu }: ButtonProps) {
  return (
    <div className="absolute top-0 right-0 w-24 h-10 cursor-pointer rounded-full overflow-hidden">
      <motion.div 
        className="relative w-full h-full"
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div 
          className="w-full h-full bg-zinc-100"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div 
          className="w-full h-full bg-black text-zinc-100"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

interface PerspectiveTextProps {
  label: string;
}

function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full transform-style-3d transition-transform duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)]">
      <p className="m-0 transition-all duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase">
        {label}
      </p>
      <p className="absolute transform-origin-bottom-center transform rotate-x-[-90deg] translate-y-[9px] opacity-0 transition-all duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)]">
        {label}
      </p>
    </div>
  );
}
