'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import Nav from './Nav';

const menuVariants = {
  open: {
    width: '480px',
    height: '650px',
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: '100px',
    height: '40px',
    top: '0px',
    right: '0px',
    transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="absolute w-[480px] h-[650px] bg-zinc-100 rounded-[25px]"
        variants={menuVariants}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>
      { isActive && <Nav/>}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </div>
  );
}
