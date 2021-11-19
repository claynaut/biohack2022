import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { 
  HiUser, 
  HiX, 
  HiOutlineQuestionMarkCircle, 
  HiOutlineLogout,
  HiOutlineUserGroup
} from 'react-icons/hi'

export default function ProfileDropdown() {
  const { data: session, status } = useSession()
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
            'absolute top-12 right-0 w-72 p-4 rounded border-2 bg-white shadow-md transition-all duration-150 '
            + ( profileOpen ? 'z-50 visible opacity-100' : 'z-0 invisible opacity-0' )
          }
        >
          <div className='flex flex-col gap-2 items-center w-full text-lg'>
            <div className='flex flex-col gap-2 items-center w-full pb-2 border-b-2 border-gray-300'>
              <p className='text-center text-base text-gray-500'>
                Signed in as <br/>
                {session.user.email}
              </p>
              {
                status === 'authenticated' && !session.user.uid &&
                <>
                  <p className='flex'>
                    Haven&apos;t applied yet!
                    <HiOutlineQuestionMarkCircle
                      className='mt-1 ml-px text-sm text-gray-400 hover:text-accent-primary cursor-pointer'
                      onClick={() => toast('Fill out the application form to participate in BioHack 2022!', {icon: '📝', id: 'applyInfo'})}
                    />
                  </p>
                  <Link passHref href='/apply'>
                    <motion.button
                      whileHover={{ scale: 1.05}} 
                      whileTap={{ scale: 0.995 }}
                      className='w-full py-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white'
                      onClick={() => setProfileOpen(!profileOpen)}
                    >
                      Apply Here
                    </motion.button>
                  </Link>
                </>
              }
              {
                status === 'authenticated' && session.user.uid &&
                <>
                  <p className='flex'>
                    Your Application Status
                    <HiOutlineQuestionMarkCircle
                      className='mt-1 ml-px text-sm text-gray-400 hover:text-accent-primary cursor-pointer'
                      onClick={() => toast(
                        <div className='flex flex-col gap-4'>
                          <span>
                            This determines your eligibility to participate in BioHack.
                          </span>
                          <span>
                            Application status will be updated within 24 hours, and you will
                            receive an email notification. Check back again later!
                          </span>
                        </div>,
                        {
                          id: 'appStatusInfo',
                          duration: 6000,
                        }
                      )}
                    />
                  </p>
                  <div
                    className='w-full py-1.5 text-center rounded bg-accent-primary font-semibold text-white'
                  >
                    { session.user.qualified === '' && 'Pending' }
                    { session.user.qualified === 'yes' && 'Approved' }
                    { session.user.qualified === 'no' && 'Rejected' }
                  </div>
                </>
              }
              {
                status === 'authenticated' && session.user.qualified === 'yes' &&
                <div className='flex flex-col gap-2 w-full border-t-2 border-gray-300 pt-2'>
                  <Link passHref href='/groups/dashboard'>
                    <motion.button
                      whileHover={{ scale: 1.03}} 
                      whileTap={{ scale: 0.995 }}
                      className='flex items-center gap-3 w-full px-3 py-1.5 rounded hover:bg-accent-primary font-semibold hover:text-white'
                      onClick={() => signOut()}
                    >
                      <HiOutlineUserGroup className='text-2xl'/> My Group
                    </motion.button>
                  </Link>
                </div>
              }
            </div>
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className='flex items-center gap-3 w-full px-3 py-1.5 rounded hover:bg-accent-primary font-semibold hover:text-white'
              onClick={() => signOut()}
            >
              <HiOutlineLogout className='text-2xl'/> Sign Out
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