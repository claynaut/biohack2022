import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaRegEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='flex justify-center w-full py-12 bg-primary-100'>
      <div className='flex justify-between items-center w-full max-w-[64rem] mx-4 text-md font-semibold'>
        <div>
          Made with ❤ by the BioHack Team.
        </div>
        <div className='flex gap-2 text-2xl'>
          <motion.span whileHover={{ y: -3 }}>
            <Link
              passHref
              href='mailto:biohack.ucr@gmail.com'
            >
              <FaRegEnvelope className='hover:text-accent-primary cursor-pointer'/>
            </Link>
          </motion.span>
          <motion.span whileHover={{ y: -3 }}>
            <Link
              passHref
              href='https://www.facebook.com/UCRBioHack/'
            >
              <FaFacebookSquare className='hover:text-accent-primary cursor-pointer'/>
            </Link>
          </motion.span>
          <motion.span whileHover={{ y: -3 }}>
            <Link
              passHref
              href='https://www.instagram.com/biohack_ucr/'
            >
              <FaInstagram className='hover:text-accent-primary cursor-pointer'/>
            </Link>
          </motion.span>
          <motion.span whileHover={{ y: -3 }}>
            <Link
              passHref
              href='https://www.linkedin.com/company/biohackucr/'
            >
              <FaLinkedin className='hover:text-accent-primary cursor-pointer'/>
            </Link>
          </motion.span>
        </div>
      </div>
    </footer>
  )
}