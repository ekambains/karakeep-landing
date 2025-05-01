import { Blocks, Download } from "lucide-react"
import { motion } from "motion/react"

const Platforms = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 m-4">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
            <span className="text-5xl font-bold">
                Apps & Extensions
            </span>
            <span className="text-gray-300">
                Enjoy seamless access with our mobile apps and browser extensions.
            </span>
        </div>
        <div className="flex flex-wrap justify-between gap-8 mt-10">
            <motion.a
                whileHover={{
                    scale: 1.1,
                }}
                href="https://apps.apple.com/us/app/karakeep-app/id6479258022"
                target="_blank"
                className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-xl gap-2 hover:from-blue-500 hover:to-cyan-500 w-full sm:w-fit"
                rel="noreferrer"
            >
                <div>
                    <Download size={28} />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">
                        Download on the
                    </span>
                    <span className="text-xl font-bold">
                        App Store
                    </span>
                </div>
            </motion.a>
            <motion.a
                whileHover={{
                    scale: 1.1,
                }}
                href="https://play.google.com/store/apps/details?id=app.hoarder.hoardermobile&pcampaignid=web_share"
                target="_blank"
                className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-xl gap-2 hover:from-blue-500 hover:to-cyan-500 w-full sm:w-fit"
                rel="noreferrer"
            >
                <div>
                    <Download size={28} />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">
                        Get it on
                    </span>
                    <span className="text-xl font-bold">
                        Google Play
                    </span>
                </div>
            </motion.a>
            <motion.a
                whileHover={{
                    scale: 1.1,
                }}
                href="https://chromewebstore.google.com/detail/karakeep/kgcjekpmcjjogibpjebkhaanilehneje"
                target="_blank"
                className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-xl gap-2 hover:from-blue-500 hover:to-cyan-500 w-full sm:w-fit"
                rel="noreferrer"
            >
                <div>
                    <Blocks size={28} />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">
                        Available in the
                    </span>
                    <span className="text-xl font-bold">
                        Chrome Web Store
                    </span>
                </div>
            </motion.a>
            <motion.a
                whileHover={{
                    scale: 1.1,
                }}
                href="https://addons.mozilla.org/en-US/firefox/addon/karakeep/"
                target="_blank"
                className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-xl gap-2 hover:from-blue-500 hover:to-cyan-500 w-full sm:w-fit"
                rel="noreferrer"
            >
                <div>
                    <Blocks size={28} />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">
                        Firefox Browser
                    </span>
                    <span className="text-xl font-bold">
                        Add Ons
                    </span>
                </div>
            </motion.a>
        </div>
    </div>
  )
}

export default Platforms