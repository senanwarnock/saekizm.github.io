import React from 'react';
import { motion } from 'framer-motion';
import Tech from './Tech';

const About = () => {
    return (
        <div className='bg-gradient-to-r from-black to-gray-900 h-screen'>
            <motion.h1 className='text-5xl font-extrabold text-white ml-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', once: true }}

            >About</motion.h1>
            <motion.h2 className='text-white text-3xl ml-20'
             initial={{ x: '100%', opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 2, ease: 'easeInOut', delay: 1, once: true }}
            >I am a Computer Science Student at DCU.</motion.h2>
            <motion.h2 className='text-white text-3xl ml-20'
             initial={{ x: '100%', opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 2, ease: 'easeInOut', delay: 2, once: true }}
            >Here are some technologies I have worked with:</motion.h2>
            <Tech />
        </div>
    )
}

export default About;