import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='m-4'>


      <motion.div
        className=''
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          }
        }}
        viewport={{ once: false }}
      >
        <li className='text-2xl flex flex-col'>
          <Link className='mx-auto my-2 p-2  underline bg-gray-100 rounded w-96 text-center' to="/simple">Simple Animation</Link>
          <Link className='mx-auto my-2 p-2 underline bg-gray-200 rounded w-96 text-center' to="/keyframe">Keyframe Animation</Link>
          <Link className='mx-auto my-2 p-2 underline bg-gray-300 rounded w-96 text-center' to="/button">Button Tap Animation</Link>
          <Link className='mx-auto my-2 p-2 underline bg-gray-400 rounded w-96 text-center' to="/text-motion">Text Motion Animation</Link>
          <Link className='mx-auto my-2 p-2 underline bg-gray-500 rounded w-96 text-center' to="/transition">Transition Type Animation</Link>
          <Link className='mx-auto my-2 p-2 underline bg-gray-600 rounded w-96 text-center text-white' to="/counter">Counter Animation</Link>
          <Link className='mx-auto my-2 p-2 underline bg-gray-700 rounded w-96 text-center text-white' to="/scroll">Scroll Reveal Animation</Link>
          <Link className='mx-auto my-2 p-2 underline bg-gray-800 rounded w-96 text-center text-white' to="/variants">Variants</Link>
        </li>

      </motion.div>
    </div>
  )
}

export default Home