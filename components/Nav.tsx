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
          'z-[1000] fixed flex justify-center w-full bg-primary-200 '
          + ( navOpen ? 'h-full' : '' )
        }
      >
        <div 
          className={
            'flex flex-col lg:grid lg:grid-cols-3 items-center w-full max-w-[64rem] h-full mx-4 py-4 lg:py-0 text-md font-bold '
            + ( !navOpen && 'max-h-[4.5rem]' )
          }
        >
          <div 
            className={
              'grid grid-cols-3 lg:flex justify-self-start items-center w-full lg:w-min lg:my-6 text-text-dark '
              + ( navOpen ? 'mt-2' : '' )
            }
          >
            <button className='justify-self-start lg:hidden' onClick={() => setNavOpen(!navOpen)}>
              {
                navOpen 
                ? <HiX className='text-2xl'/>
                : <HiOutlineMenuAlt2 className='text-2xl'/>
              }
            </button>
            {
              (router.pathname === '/' || router.pathname === '/live')
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
            {/* { !navOpen &&
              ( status === 'authenticated' 
                ?
                  <div
                    className='justify-self-end lg:hidden'
                  >
                    <ProfileDropdown />
                  </div>
                :
                  <button
                    className={
                      'justify-self-end lg:hidden px-4 py-1.5 rounded bg-accent hover:bg-accent-dark text-text-dark'
                    }
                    onClick={() => toggleLoginModal()}
                  >
                    Sign In
                  </button>
              )
            } */}
          </div>
          
          <div
            id='nav'
            className={
              'flex flex-col lg:flex-row justify-self-center text-center font-semibold text-highlight '
              + ( navOpen ? 'h-full max-h-[min-content] py-8 justify-evenly gap-2 ' : 'hidden lg:flex gap-6 ' )
              + ( !navOpen && (router.pathname !== '/' && router.pathname !== '/live') && 'invisible')
            }
          >
            {
              (router.pathname === '/' || router.pathname === '/live')
              ?
                <>
                  {/* <NavLink 
                    activeClass='text-text-dark font-bold'
                    to='Schedule'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                      Schedule
                    </motion.div>
                  </NavLink> */}
                  {router.pathname === '/' &&
                    <>
                      <NavLink 
                        activeClass='text-text-dark font-bold'
                        to='About'
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                        onClick={() => setNavOpen(false)}
                      >
                        <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                          About
                        </motion.div>
                      </NavLink>
                      <NavLink 
                        activeClass='text-text-dark font-bold'
                        to='Winners'
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                        onClick={() => setNavOpen(false)}
                      >
                        <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                          Winners
                        </motion.div>
                      </NavLink>
                      <NavLink 
                        activeClass='text-text-dark font-bold'
                        to='Faq'
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                        onClick={() => setNavOpen(false)}
                      >
                        <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                          FAQ
                        </motion.div>
                      </NavLink>
                      <NavLink 
                        activeClass='text-text-dark font-bold'
                        to='Volunteer'
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                        onClick={() => setNavOpen(false)}
                      >
                        <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                          Volunteer
                        </motion.div>
                      </NavLink>
                    </>
                  }
                  {router.pathname === '/live' &&
                    <>
                      <NavLink 
                        activeClass='text-text-dark font-bold'
                        to='Judges'
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                        onClick={() => setNavOpen(false)}
                      >
                        <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                          Judges
                        </motion.div>
                      </NavLink>
                      <NavLink 
                        activeClass='text-text-dark font-bold'
                        to='Resources'
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                        onClick={() => setNavOpen(false)}
                      >
                        <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                          Resources
                        </motion.div>
                      </NavLink>
                    </>
                  }
                  {/* <NavLink 
                    activeClass='text-text-dark font-bold'
                    to='Sponsors'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                      Sponsors
                    </motion.div>
                  </NavLink> */}
                  <NavLink 
                    activeClass='text-text-dark font-bold'
                    to='Team'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    <motion.div whileHover={{ y: -2 }} className='lg:pb-6'>
                      Team
                    </motion.div>
                  </NavLink>
                </>
              :
                <Link passHref href='/'>
                  <span
                    className='lg:mt-6 hover:text-text-dark hover:font-bold cursor-pointer transition-all duration-150'
                    onClick={() => setNavOpen(false)}
                  >
                    Home
                  </span>
                </Link>
            }
          </div>
          <div className='flex justify-self-end gap-4'>
            {/* { status === 'authenticated' &&
              !session.user.uid &&
              router.pathname !== '/apply' &&
              <Link passHref href='/apply'>
                <motion.button
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.995 }}
                  className='hidden lg:block px-4 py-1.5 rounded bg-accent hover:bg-accent-dark font-semibold'
                >
                  Apply
                </motion.button>
              </Link>
            } */}
            {/* { status === 'authenticated'
              ?
                <>
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
                  className='hidden lg:block px-4 py-1.5 rounded bg-accent hover:bg-accent-dark'
                  onClick={() => toggleLoginModal()}
                >
                  Sign In
                </motion.button>
            } */}
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