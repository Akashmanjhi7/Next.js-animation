'use client'

import Link from "next/link"
import { Links } from "./data"
import { motion } from "framer-motion";

const perspectiveAnimation = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -40,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.9,
      delay: 0.35 + i * 0.1,
      ease: [.215, .61, .355, 1],
      opacity: { duration: 0.95 },
      
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
  },
};

const Nav = () => {
  return (
    <div className="flex flex-col justify-between h-full px-8 font-semibold py-12 box-border">
      <div className="flex flex-col gap-3">
      {Links.map((link, i) => (
          <div key={`b_${i}`} className="linkContainer ">
            <motion.div
              className="text-4xl"
              custom={i}
              variants={perspectiveAnimation}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a href={link.href} className="relative text-prime pb-2 hover:before:w-full hover:before:right-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-zinc-900 before:transition-all before:duration-300 sm:mt-6 hover:text-underline text-zinc-900">
                {link.title}
              </a>
            </motion.div>
          </div>
        ))}
    </div>
    </div>
  )
}

export default Nav
