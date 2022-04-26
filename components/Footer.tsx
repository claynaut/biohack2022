import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaRegEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

import { Border } from '@/components/Border'

export default function Footer() {
  return (
    <div className='flex flex-col w-full'>
      <Border type={4} bgColor='bg-primary-300' fillColor='primary-200'/>
      <footer className='flex justify-center w-full pt-6 pb-12 bg-primary-200 text-text-dark'>
        <div className='flex justify-between items-center w-full max-w-[64rem] mx-4 text-md font-semibold'>
          <div>
            Made with ❤ by the BioHack Team.
          </div>
          <div className='flex gap-2 text-2xl text-highlight'>
            <motion.span whileHover={{ y: -3 }}>
              <Link
                passHref
                href='mailto:biohack.ucr@gmail.com'
              >
                <FaRegEnvelope className='hover:text-text-dark cursor-pointer'/>
              </Link>
            </motion.span>
            <motion.span whileHover={{ y: -3 }}>
              <Link
                passHref
                href='https://www.facebook.com/UCRBioHack/'
              >
                <FaFacebookSquare className='hover:text-text-dark cursor-pointer'/>
              </Link>
            </motion.span>
            <motion.span whileHover={{ y: -3 }}>
              <Link
                passHref
                href='https://www.instagram.com/biohack_ucr/'
              >
                <FaInstagram className='hover:text-text-dark cursor-pointer'/>
              </Link>
            </motion.span>
            <motion.span whileHover={{ y: -3 }}>
              <Link
                passHref
                href='https://www.linkedin.com/company/biohackucr/'
              >
                <FaLinkedin className='hover:text-text-dark cursor-pointer'/>
              </Link>
            </motion.span>
          </div>
        </div>
      </footer>
    </div>
  )
}