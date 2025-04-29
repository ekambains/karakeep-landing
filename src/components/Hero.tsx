import { Sparkles } from "lucide-react"

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 text-center gap-6">
        <div className="border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-gray-700 px-4 py-1.5 text-sm font-semibold rounded-md bg-black/50 backdrop-blur-sm flex gap-2">
            <span className="text-cyan-500"><Sparkles /></span>
            <span>&nbsp; Trusted By 100k+ Hoarders</span>
        </div>
        <div className="flex justify-center items-center gap-2 text-4xl sm:text-6xl font-bold">
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
        <div className="text-3xl sm:text-4xl font-bold sm:w-150">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                Built for the Data Hoarders out there!
            </span>
        </div>
        <div className="sm:w-150 text-lg text-gray-300 mt-4">
            <span>
                Quickly save links, notes, and images and karakeep will automatically tag them for you using AI for faster retrieval.
            </span>
        </div>
    </div>
  )
}

export default Hero