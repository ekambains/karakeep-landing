import { ArrowDownNarrowWide, Bookmark, BrainCircuit, Play, Server, Sparkles } from "lucide-react"
import { easeInOut, motion, spring } from "motion/react"

const Hero = () => {
    const DEMO_LINK = "https://try.karakeep.app";
  return (
    <div className="flex flex-col justify-center items-center mt-24 text-center gap-6">
        {/* Motion div starts here */}
        <motion.div
            animate={{
                boxShadow: "10px 10px 50px rgba(8, 112, 184, 0.7)",
            }}
            transition={{
                repeat: Infinity,
                duration: 1,
                ease: easeInOut,
            }}
            className="border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-gray-700 px-4 py-1.5 text-sm font-semibold rounded-md bg-gray-900/50 backdrop-blur-sm flex gap-2"
        >
            <motion.span
                animate={{
                    scale: 1.1,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: easeInOut
                }}
                className="text-cyan-500 bg-transparent"
            >
                <Sparkles />
            </motion.span>
            <span>&nbsp; Trusted By 100k+ Hoarders</span>
        </motion.div>
        {/* Motion div ends here */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-6xl font-bold">
            <span className="inline-block relative">
                Bookmark
                <span className="absolute -bottom-2 left-0 h-1 bg-cyan-500 w-full"></span>
            </span>
            <span>&nbsp;</span>
            <span className="inline-block relative">
                Everything
                <span className="absolute -bottom-2 left-0 h-1 bg-blue-500 w-full"></span>
            </span>
        </div>
        <div className="flex flex-wrap text-4xl font-bold sm:w-150">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                Built for the Data Hoarders out there!
            </span>
        </div>
        <div className="sm:w-150 flex flex-wrap text-lg text-gray-300 mt-4">
            <span>
                Quickly save links, notes, and images and karakeep will automatically tag them for you using AI for faster retrieval.
            </span>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-between gap-4 m-2 sm:w-150 text-sm">
            {/* motion divs starts here */}
            <motion.div
                whileHover={{
                    y: -3,
                }}
                transition={{
                    type: spring,
                    bounce: 0.7,
                    duration: 1,
                }}
                className="border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-gray-700 px-4 py-2 rounded-full bg-gray-900/50 hover:bg-[rgba(59,130,246,0.2)] backdrop-blur-sm flex justify-center items-center"
            >
                <Bookmark className="text-cyan-500" />&nbsp;&nbsp;Bookmark
            </motion.div>
            <motion.div
                whileHover={{
                    y: -3,
                }}
                transition={{
                    type: spring,
                    bounce: 0.7,
                    duration: 1,
                }}
                className="border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-gray-700 px-4 py-2 rounded-full bg-gray-900/50 hover:bg-[rgba(59,130,246,0.2)] backdrop-blur-sm flex justify-center items-center"
            >
                <BrainCircuit className="text-blue-500" />&nbsp;&nbsp;AI Tagging
            </motion.div>
            <motion.div
                whileHover={{
                    y: -3,
                }}
                transition={{
                    type: spring,
                    bounce: 0.7,
                    duration: 1,
                }}
                className="border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-gray-700 px-4 py-2 rounded-full bg-gray-900/50 hover:bg-[rgba(59,130,246,0.2)] backdrop-blur-sm flex justify-center items-center"
            >
                <ArrowDownNarrowWide className="text-cyan-500" />&nbsp;&nbsp;Auto Fetching
            </motion.div>
            <motion.div
                whileHover={{
                    y: -3,
                }}
                transition={{
                    type: spring,
                    bounce: 0.7,
                    duration: 1,
                }}
                className="border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-gray-700 px-4 py-2 rounded-full bg-gray-900/50 hover:bg-[rgba(59,130,246,0.2)] backdrop-blur-sm flex justify-center items-center"
            >
                <Server className="text-blue-500" />&nbsp;&nbsp;Self Hosting
            </motion.div>
            {/* motion divs ends here */}
        </div>
        {/* motion div starts here */}
        <motion.div
            animate={{
                scale: [1.03, 1, 1.03],
                boxShadow: ["0px 0px 10px 0.5px rgba(8, 112, 184, 0.7)", "0px 0px 10px 1px rgba(8, 112, 184, 0)", "0px 0px 10px 0.5px rgba(8, 112, 184, 0.7)"],
            }}
            transition={{
                repeat: Infinity,
                duration: 3,
                ease: easeInOut,
            }}
            className="sm:w-180 w-full my-6 mx-4 p-2 flex justify-center items-center"
        >
            <motion.a
                whileHover="hover"
                href={DEMO_LINK}
                target="_blank"
                className="relative flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-semibold px-8 py-4 rounded-lg overflow-hidden"
                rel="noreferrer"
            >
                <Play />&nbsp;&nbsp;Try Demo
                <motion.span
                    className="absolute top-0 left-[-75%] w-[75%] h-full bg-white/40 opacity-30 pointer-events-none"
                    variants={{
                    hover: {
                        left: "125%",
                        transition: {
                            repeat: Infinity,
                            duration: 1.3,
                            ease: "easeInOut",
                        }
                    }
                    }}
                />
            </motion.a>
        </motion.div>
        {/* motion div ends here */}
    </div>
  )
}

export default Hero