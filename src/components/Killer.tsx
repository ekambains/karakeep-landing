import { easeInOut, motion } from "motion/react"
import { useState, useEffect } from "react";

const Killer = () => {
    const [position, setPosition] = useState({ x: -300, y: -300 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX - 300, y: e.clientY - 300 });
          };
      
          window.addEventListener('mousemove', updateMousePosition);
      
          return () => {
            window.removeEventListener('mousemove', updateMousePosition);
          };
    }, []);

  return (
    <motion.div
        animate={{
            x: position.x,
            y: position.y,
        }}
        transition={{
            type: "tween",
            duration: 1,
            ease: easeInOut
        }}
        className="absolute overflow-hidden pointer-events-none w-[500px] h-[500px] rounded-full opacity-20 bg-gradient-to-r from-cyan-500 to-blue-500 blur-[100px] z-10"
    >
    </motion.div>
  )
}

export default Killer