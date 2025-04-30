import { motion, spring } from 'motion/react';

const Navbar = () => {
    const GITHUB_LINK = "https://github.com/karakeep-app/karakeep";
    const DOCS_LINK = "https://docs.karakeep.app";
    const DEMO_LINK = "https://try.karakeep.app";
  return (
    <div className='flex justify-between items-center hover:cursor-pointer my-2'>
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
            <span className='text-white'>
                <img src='/karakeep-full.svg' className='w-36' />
            </span>
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
                className='bg-blue-600 px-3 py-2 text-sm font-semibold rounded-md hover:cursor-pointer hover:bg-blue-500 hidden sm:flex'
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