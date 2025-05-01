import { motion, spring } from "motion/react"

const Footer = () => {
    const GITHUB_LINK = "https://github.com/karakeep-app/karakeep";
    const DOCS_LINK = "https://docs.karakeep.app";
    const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col flex-wrap justify-center m-2 gap-4 w-full">
        <div className="flex flex-col items-center sm:flex-row justify-between gap-4">
            <div className="flex flex-col justify-center items-center gap-2">
                {/* motion div starts here */}
                    <motion.div
                        whileHover={{
                            scale: 1.07,
                        }}
                        transition={{
                            type: spring,
                            bounce: 0.7,
                            duration: 1,
                        }}
                        className="cursor-pointer"
                    >
                        <span className='text-white'>
                            <img src='/karakeep-full.svg' className='w-40' />
                        </span>
                    </motion.div>
                {/* motion div ends here */}
                <span className="text-gray-300 text-md">The Bookmark Everything App</span>
                <span className="text-gray-500 text-sm mt-4">&copy; 2024-{currentYear} Karakeep. All Rights Reserved.</span>
            </div>
            <div>

            </div>
            <div className="flex items-center gap-8">
                {/* motion divs start here */}
                <motion.a
                    whileHover={{
                        x: 2,
                    }}
                    transition={{
                        type: spring,
                        bounce: 0.7,
                        duration: 1,
                    }}
                    href={DOCS_LINK}
                    target='_blank'
                    className='hover:text-cyan-500'
                    rel='noreferrer'
                >
                    Docs
                </motion.a>
                <motion.a
                    whileHover={{
                        x: 2,
                    }}
                    transition={{
                        type: spring,
                        bounce: 0.7,
                        duration: 1,
                    }}
                    href={GITHUB_LINK}
                    target='_blank'
                    className='hover:text-cyan-500'
                    rel='noreferrer'
                >
                    Github
                </motion.a>
                {/* motion divs end here  */}
            </div>
        </div>
        <div className="flex justify-center mt-4">
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold text-center tracking-tighter leading-none w-full mx-auto text-transparent bg-clip-text bg-[linear-gradient(to_right,rgba(6,182,212,0.8),rgba(6,182,212,0.2))]">KARAKEEP</h1>
        </div>
    </footer>
  )
}

export default Footer