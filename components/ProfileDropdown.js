import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { HiUser, HiX } from 'react-icons/hi'
import { FaRegQuestionCircle } from 'react-icons/fa'

export default function ProfileDropdown() {
  const router = useRouter()
  const [profileOpen, setProfileOpen] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      setProfileOpen(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [setProfileOpen])

  return (
    <>
      <div className='relative'>
        <button
          className='flex lg:hidden p-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark text-white'
          onClick={() => setProfileOpen(!profileOpen)}
        >
          {
            profileOpen 
              ? <HiX className='text-2xl'/>
              : <HiUser className='text-2xl'/>
          }
        </button>
        <motion.button
          whileHover={{ scale: 1.05}} 
          whileTap={{ scale: 0.995 }}
          className='hidden lg:flex p-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark text-white'
          onClick={() => setProfileOpen(!profileOpen)}
        >
          {
            profileOpen 
              ? <HiX className='text-2xl'/>
              : <HiUser className='text-2xl'/>
          }
        </motion.button>
        <div
          className={
            'absolute top-12 right-0 w-[19rem] p-4 rounded border-2 bg-white shadow-md transition-all duration-150 '
            + ( profileOpen ? 'z-50 visible opacity-100' : 'z-0 invisible opacity-0' )
          }
        >
          <div className='flex flex-col gap-4 items-center w-full text-lg'>
            <div className='flex flex-col gap-2 items-center w-full pb-4 border-b-2 border-gray-300'>
              <p className='flex'>
                Not checked in yet!
                <FaRegQuestionCircle
                  className='mt-1 ml-px text-sm text-gray-400 hover:text-accent-primary cursor-pointer'
                  onClick={() => toast('Fill out the check-in form to apply for BioHack 2021!', {icon: '📝'})}
                />
              </p>
              <Link passHref href='/check-in'>
                <motion.button
                  whileHover={{ scale: 1.05}} 
                  whileTap={{ scale: 0.995 }}
                  className='w-full py-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white'
                  onClick={() => setProfileOpen(!profileOpen)}
                >
                  Check In Here
                </motion.button>
              </Link>
            </div>
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className='w-full py-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white'
              onClick={signOut}
            >
              Sign Out
            </motion.button>
          </div>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full transition-all duration-150 '
          + ( profileOpen ? 'z-40 visible opacity-100' : 'z-0 invisible opacity-0' )
        }
        onClick={() => setProfileOpen(false)}
      />
    </>
  )
}