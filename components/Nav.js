import React, { useState, useEffect } from 'react'
import { Link as NavLink } from 'react-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import { motion } from 'framer-motion'
import { HiOutlineMenuAlt2, HiX, HiUser } from 'react-icons/hi'
import LoginModal from './LoginModal'

export default function Nav() {
  const [session] = useSession()
  const router = useRouter()
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen)
  }

  const handleResize = () => {
    if (window.innerWidth > 750) setNavOpen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [navOpen])

  return (
    <>
      <div 
        className={
          "fixed flex justify-center w-full "
          + ( navOpen ? "bg-white" : "bg-gradient-to-b from-white to-white-50" )
        }
      >
        <div 
          className={
            "flex flex-col md:flex-row md:justify-between items-center overflow-y-hidden md:overflow-y-visible w-full max-w-5xl mx-4 py-4 md:py-0 text-md font-semibold "
            + ( navOpen ? "h-screen": "h-full max-h-18" )
          }
        >
          <div className="flex justify-between items-center justify-self-center w-full md:w-min mt-2 md:my-6">
            <div className="md:hidden cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
              {
                navOpen 
                ? <HiX className="text-2xl"/>
                : <HiOutlineMenuAlt2 className="text-2xl"/>
              }
            </div>
            {
              router.pathname === '/'
              ?
                <NavLink
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="cursor-pointer"
                >
                  BIO<b>HACK</b>
                </NavLink>
              :
                <Link passHref href="/">
                  <span className="cursor-pointer">
                    BIO<b>HACK</b>
                  </span>
                </Link>
            }
            <div className="flex md:hidden">
              <HiUser className="text-2xl"/>
            </div>
          </div>
          <div
            className={
              "flex flex-col md:flex-row text-center "
              + ( navOpen ? "min-h-full justify-evenly gap-2" : "hidden md:flex gap-6" )
            }
          >
            <NavLink 
              activeClass="border-accent-primary"
              to="About"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="md:mt-6 border-b-3 border-transparent hover:border-accent-primary cursor-pointer transition-all duration-150"
              onClick={() => setNavOpen(false)}
            >
              <motion.div whileHover={{ y: -3 }} className="md:pb-6">
                About
              </motion.div>
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Winners"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="md:mt-6 border-b-3 border-transparent hover:border-accent-primary cursor-pointer transition-all duration-150"
              onClick={() => setNavOpen(false)}
            >
              <motion.div whileHover={{ y: -3 }} className="md:pb-6">
                Winners
              </motion.div>
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Volunteer"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="md:mt-6 border-b-3 border-transparent hover:border-accent-primary cursor-pointer transition-all duration-150"
              onClick={() => setNavOpen(false)}
            >
              <motion.div whileHover={{ y: -3 }} className="md:pb-6">
                Volunteer
              </motion.div>
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Sponsors"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="md:mt-6 border-b-3 border-transparent hover:border-accent-primary cursor-pointer transition-all duration-150"
              onClick={() => setNavOpen(false)}
            >
              <motion.div whileHover={{ y: -3 }} className="md:pb-6">
                Sponsors
              </motion.div>
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Faq"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="md:mt-6 border-b-3 border-transparent hover:border-accent-primary cursor-pointer transition-all duration-150"
              onClick={() => setNavOpen(false)}
            >
              <motion.div whileHover={{ y: -3 }} className="md:pb-6">
                FAQ
              </motion.div>
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Team"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="md:mt-6 border-b-3 border-transparent hover:border-accent-primary cursor-pointer transition-all duration-150"
              onClick={() => setNavOpen(false)}
            >
              <motion.div whileHover={{ y: -3 }} className="md:pb-6">
                Team
              </motion.div>
            </NavLink>
          </div>
          <div className="flex hidden md:block">
            {
              session
              ?
                <motion.button
                  whileHover={{ scale: 1.05}} 
                  whileTap={{ scale: 0.995 }}
                  className="px-4 py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white"
                  onClick={signOut}
                >
                  Sign Out
                </motion.button>
              :
                <motion.button
                  whileHover={{ scale: 1.05}} 
                  whileTap={{ scale: 0.995 }}
                  className="px-4 py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white"
                  onClick={() => toggleLoginModal()}
                >
                  Apply
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