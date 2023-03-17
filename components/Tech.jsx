import React from 'react';
import {
  FaC,
  FaHaskell,
  FaPython,
  FaJs,
  FaJava,
  FaReact,
  FaDjango,
} from 'react-icons/fa';
import { SiNextdotjs, SiSolidity, SiExpress, SiHaskell, SiC, SiDjango } from 'react-icons/si';
import { motion } from 'framer-motion';

const Tech = () => {
  const techs = [
    { icon: SiHaskell, name: 'Haskell' },
    { icon: SiC, name: 'C' },
    { icon: SiDjango, name: 'Django'},
    { icon: FaPython, name: 'Python' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaJava, name: 'Java' },
    { icon: SiSolidity, name: 'Solidity' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: FaReact, name: 'React' },
    { icon: SiExpress, name: 'Express' },
  ];

  return (
    <div className="p-8">
      <motion.div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
      initial={{ y: '100%', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut', delay: 3, once: true }}
      >
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <tech.icon className="text-4xl text-white mb-2" />
            <span className='text-white'>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
