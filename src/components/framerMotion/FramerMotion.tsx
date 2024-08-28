'use client'
import { motion } from 'framer-motion'

const FramerMotion = () => {
    
    const parentVariants = {
        hidden : {opacity : 0 },
        visible : {opacity : 1 , transition:{
            staggerChildren:0.2,
            delayChildren:0.5
        } }
    }
    
    const childVariants = {
        hidden : { y:15, opacity: 0 },
        visible : {y:0, opacity: 1 },
    }
    
    const arr = [10,20,30,1,1,1,1,1,4,4,4,5,5,5,5,5,5,5];
  return (
    <div className='p-8 h-screen'>

        <motion.div
        className='bg-pink-900 flex flex-wrap justify-center items-center  rounded-lg p-4'
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        transition={{duration:2, delay: 1}}
        >

       {arr.map((item,index)=> 
        <motion.div
        key={index}
        className='bg-pink-500 h-52 w-52 m-1 text-white flex items-center justify-center     rounded-lg'
        variants={childVariants}
        
      >
        <div>

        <h1>Value: {item}</h1>
        <br />
        Child {index + 1}
        </div>
        
      </motion.div>
    )}
            
        </motion.div>
      
    </div>
  ) 

}

export default FramerMotion
