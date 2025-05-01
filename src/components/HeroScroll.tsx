import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const HeroScroll = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scaleContent = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]);

  return (
    <motion.div
        ref={ref}
        style={{
            scale: scaleContent,
        }}
        className="m-4"
    >
        <img src="/Hero.png" alt="Karakeep Dashboard" className="w-270" />
    </motion.div>
  )
}

export default HeroScroll