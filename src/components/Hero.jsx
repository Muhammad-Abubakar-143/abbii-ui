import { useMotionTemplate, motion } from 'motion/react';
import React from 'react'
import HeroText from './HeroText';
import FloatingPhone from './FloatingPhone';

const Hero = () => {
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%,#ffffff30)`;
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid md:grid-cols-2 grid-cols-1 min-h-screen place-content-center overflow-hidden bg-gray-950 px-10 py-24 text-gray-200"
    >
      <HeroText/>
      <FloatingPhone />

    </motion.section>
  )
}

export default Hero