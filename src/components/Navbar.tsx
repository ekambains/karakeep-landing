import { motion, spring } from 'motion/react';

const Navbar = () => {
    const GITHUB_LINK = "https://github.com/karakeep-app/karakeep";
    const DOCS_LINK = "https://docs.karakeep.app";
    const DEMO_LINK = "https://try.karakeep.app";
  return (
    <div className='flex justify-between items-center hover:cursor-pointer'>
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
        >
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text'>Karakeep</span>
        </motion.div>
        {/* motion div ends here */}
        <div className='flex items-center gap-4 text-gray-300'>
            {/* motion divs start here */}
            <motion.a
                whileHover={{
                    y: -2,
                }}
                transition={{
                    type: spring,
                    bounce: 0.7,
                    duration: 1,
                }}
                href={DOCS_LINK}
                target='_blank'
                className='hover:text-white'
                rel='noreferrer'
            >
                Docs
            </motion.a>
            <motion.a
                whileHover={{
                    y: -2,
                }}
                transition={{
                    type: spring,
                    bounce: 0.7,
                    duration: 1,
                }}
                href={GITHUB_LINK}
                target='_blank'
                className='hover:text-white'
                rel='noreferrer'
            >
                Github
            </motion.a>
            <motion.a
                whileHover={{
                    scale: 1.05,
                }}
                href={DEMO_LINK}
                target='_blank'
                className='bg-blue-500 p-2 text-sm font-semibold rounded-md hover:cursor-pointer hover:bg-blue-600 hidden sm:flex'
                rel='noreferrer'
            >
                Try Demo
            </motion.a>
            {/* motion divs end here */}
        </div>
    </div>
  )
}

export default Navbar