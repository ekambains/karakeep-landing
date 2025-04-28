import { motion, spring } from 'motion/react';

const Navbar = () => {
    const GITHUB_LINK = "https://github.com/karakeep-app/karakeep";
    const DOCS_LINK = "https://docs.karakeep.app";
    const DEMO_LINK = "https://try.karakeep.app";
  return (
    <div className='flex justify-between items-center'>
        <motion.div
        whileHover={{
            scale: 1.1,
        }}
        transition={{
            type: spring,
        }}
        >
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text'>Karakeep</span>
        </motion.div>
        <div className='flex items-center gap-4 text-gray-300'>
            <a href={DOCS_LINK} className='hover:text-white hover:mb-1 transition-all duration-100'>Docs</a>
            <a href={GITHUB_LINK} className='hover:text-white hover:mb-1 transition-all duration-100'>Github</a>
            <a href={DEMO_LINK} className='bg-blue-500 p-2 text-sm rounded-md hover:cursor-pointer hover:bg-blue-600 hidden sm:flex'>Try Demo</a>
        </div>
    </div>
  )
}

export default Navbar