import React, { useState, useEffect } from 'react'
import { Link as NavLink } from 'react-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { HiOutlineMenuAlt2, HiX } from 'react-icons/hi'
import LoginModal from '@/components/LoginModal'
import ProfileDropdown from '@/components/ProfileDropdown'

export default function Nav() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [targetElement, setTargetElement] = useState(null)

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen)
    setNavOpen(false)
  }

  const toggleProfile = () => {
    setProfileOpen(!profileOpen)
    setNavOpen(false)
  }

  const handleResize = () => {
    if (window.innerWidth > 750) setNavOpen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    setTargetElement(document.querySelector('#nav'))
    if (targetElement) {
      if (navOpen) disableBodyScroll(targetElement)
      else enableBodyScroll(targetElement)
    }
  }, [targetElement, navOpen])

  return (
    <>
      <div 
        className={
          'fixed flex justify-center w-full '
          + ( navOpen ? 'h-full bg-white' : 'bg-gradient-to-b from-white to-white-50' )
        }
      >
        <div 
          className={
            'flex flex-col lg:grid lg:grid-cols-3 items-center w-full max-w-[60rem] h-full mx-4 py-4 lg:py-0 text-md font-semibold '
            + ( !navOpen && 'max-h-[4.5rem]' )
          }
        >
          <div className='grid grid-cols-3 lg:flex justify-self-start items-center w-full lg:w-min mt-2 lg:my-6'>
            <button className='justify-self-start lg:hidden' onClick={() => setNavOpen(!navOpen)}>
              {
                navOpen 
                ? <HiX className='text-2xl'/>
                : <HiOutlineMenuAlt2 className='text-2xl'/>
              }
            </button>
            {
              router.pathname === '/'
              ?
                <NavLink
                  activeClass='active'
                  to='Home'
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className='justify-self-center cursor-pointer'
                  onClick={() => setNavOpen(false)}
                >
                  BIO<b>HACK</b>
                </NavLink>
              :
                <Link passHref href='/'>
                  <span
                    className='justify-self-center cursor-pointer'
                    onClick={() => setNavOpen(false)}
                  >
                    BIO<b>HACK</b>
                  </span>
                </Link>
            }
            {
              (status === 'authenticated' && !session.user.uid)
              ?
                <div
                  className='justify-self-end lg:hidden'
                >
                  <ProfileDropdown />
                </div>
              :
                <button
                  className={
                    'justify-self-end lg:hidden px-4 py-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white '
                  }
                  onClick={() => toggleLoginModal()}
                >
                  Sign In
                </button>
            }
          </div>
          <div
            id='nav'
            className={
              'flex flex-col lg:flex-row justify-self-center text-center '
              + ( navOpen ? 'h-full max-h-[min-content] py-8 justify-evenly gap-2 ' : 'hidden lg:flex gap-6 ' )
              + ( !navOpen && router.pathname !== '/' && 'invisible')
            }
          >
            {
              router.pathname === '/'
              ?
                <>
                  <NavLink 
                    activeClass='border-accent-primary text-accent-primary'
                    to='About'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 border-b-[3px] border-transparent hover:border-accent-primary hover:text-accent-primary cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -3 }} className='lg:pb-6'>
                      About
                    </motion.div>
                  </NavLink>
                  <NavLink 
                    activeClass='border-accent-primary text-accent-primary'
                    to='Winners'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 border-b-[3px] border-transparent hover:border-accent-primary hover:text-accent-primary cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -3 }} className='lg:pb-6'>
                      Winners
                    </motion.div>
                  </NavLink>
                  <NavLink 
                    activeClass='border-accent-primary text-accent-primary'
                    to='Volunteer'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 border-b-[3px] border-transparent hover:border-accent-primary hover:text-accent-primary cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -3 }} className='lg:pb-6'>
                      Volunteer
                    </motion.div>
                  </NavLink>
                  <NavLink 
                    activeClass='border-accent-primary text-accent-primary'
                    to='Sponsors'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 border-b-[3px] border-transparent hover:border-accent-primary hover:text-accent-primary cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -3 }} className='lg:pb-6'>
                      Sponsors
                    </motion.div>
                  </NavLink>
                  <NavLink 
                    activeClass='border-accent-primary text-accent-primary'
                    to='Faq'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 border-b-[3px] border-transparent hover:border-accent-primary hover:text-accent-primary cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -3 }} className='lg:pb-6'>
                      FAQ
                    </motion.div>
                  </NavLink>
                  <NavLink 
                    activeClass='border-accent-primary text-accent-primary'
                    to='Team'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 border-b-[3px] border-transparent hover:border-accent-primary hover:text-accent-primary cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -3 }} className='lg:pb-6'>
                      Team
                    </motion.div>
                  </NavLink>
                </>
              :
                <Link passHref href='/'>
                  <span
                    className='lg:mt-6 border-b-[3px] border-transparent hover:border-accent-primary hover:text-accent-primary cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    Home
                  </span>
                </Link>
            }
          </div>
          <div className='flex justify-self-end gap-4'>
            {
              (status === 'authenticated' && !session.user.uid)
              ?
                <>
                  <Link passHref href='/apply'>
                    <motion.button
                      whileHover={{ scale: 1.05}} 
                      whileTap={{ scale: 0.995 }}
                      className='hidden lg:block px-4 py-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white'
                    >
                      Apply
                    </motion.button>
                  </Link>
                  <div
                    className='hidden lg:block'
                  >
                    <ProfileDropdown />
                  </div>
                </>
              :
                <motion.button
                  whileHover={{ scale: 1.05}} 
                  whileTap={{ scale: 0.995 }}
                  className='hidden lg:block px-4 py-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white'
                  onClick={() => toggleLoginModal()}
                >
                  Sign In
                </motion.button>
            }
          </div>
        </div>
      </div>
      <LoginModal
        show={loginModalOpen}
        handler={toggleLoginModal}
      />
    </>
  )
}