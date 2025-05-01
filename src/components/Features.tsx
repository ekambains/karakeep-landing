import { 
    ArrowDownNarrowWide,
    Bookmark,
    BrainCircuit,
    CheckCheck,
    Server,
    SunMoon,
    TextSearch,
    WalletCards,
 } from "lucide-react";
import { motion } from "motion/react";
import Line from "./Line";


const Features = () => {
    const featuresList = [
        {
          icon: Bookmark,
          title: "Bookmark",
          description: "Bookmark links, take simple notes and store images and pdfs.",
        },
        {
          icon: BrainCircuit,
          title: "AI Tagging",
          description:
            "Automatically tags your bookmarks using AI for faster retrieval.",
        },
        {
          icon: ArrowDownNarrowWide,
          title: "Auto Fetch",
          description:
            "Automatically fetches title, description and images for links.",
        },
        {
          icon: WalletCards,
          title: "Lists",
          description: "Sort your bookmarks into lists for better organization.",
        },
        {
          icon: TextSearch,
          title: "Search",
          description: "Search through all your bookmarks using full text search.",
        },
        {
          icon: Server,
          title: "Self Hosting",
          description: "Easy self hosting with docker for privacy and control.",
        },
        {
          icon: CheckCheck,
          title: "Bulk Actions",
          description: "Quickly manage your bookmarks with bulk actions.",
        },
        {
          icon: SunMoon,
          title: "Dark Mode",
          description: "Karakeep supports dark mode for better reading experience.",
        },
      ];

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-4">
        <div className="mb-8">
            <span className="text-5xl text-white font-bold">
                Key Features
            </span>
        </div>
        <div className="flex flex-wrap justify-center w-full gap-6">
            {featuresList.map((feature) => (
                    <motion.div
                        whileHover={{
                            y: -5,
                        }}
                        key={feature.title}
                        className="w-72 h-38 z-10 flex flex-col bg-gray-900/20 hover:bg-[rgba(59,131,255,0.2)] border border-gray-700 rounded-xl py-3 px-5"
                    >
                        <div className="flex gap-4 items-center">
                            <feature.icon size={36} className="text-cyan-500" />
                            <span className="text-lg text-white">{feature.title}</span>
                        </div>
                        <div className="ml-2 mt-3 text-gray-300">
                            <p>{feature.description}</p>
                        </div>
                    </motion.div>
            ))}
        </div>
        <Line />
    </div>
  )
}

export default Features