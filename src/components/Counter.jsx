import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = () => {

  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });

    return animation.stop;
  }, [])

  return (
    <motion.div className='flex justify-center items-center bg-slate-200 p-20 text-9xl'>{roundedValue}</motion.div>
  )
}

export default Counter