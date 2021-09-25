import React, { useState } from 'react'
import { Link as NavLink } from 'react-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import LoginModal from './LoginModal'

export default function Nav() {
  const [session] = useSession()
  const router = useRouter()
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen)
  }

  return (
    <>
      <div className="fixed flex justify-center w-full bg-gray-200">
        <div className="flex justify-between items-center w-full max-w-5xl mx-4 text-lg font-semibold">
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
                className="my-4 cursor-pointer"
              >
                BIO<b>HACK</b>
              </NavLink>
            :
              <Link passHref href="/">
                <span className="my-4 cursor-pointer">
                  BIO<b>HACK</b>
                </span>
              </Link>
          }
          <div className="flex gap-6">
            <NavLink 
              activeClass="border-accent-primary"
              to="About"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer transition-all duration-150"
            >
              About
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Winners"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer transition-all duration-150"
            >
              Winners
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Volunteer"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer transition-all duration-150"
            >
              Volunteer
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Sponsors"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer transition-all duration-150"
            >
              Sponsors
            </NavLink>
            <NavLink 
              activeClass="border-accent-primary"
              to="Faq"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer transition-all duration-150"
            >
              FAQ
            </NavLink>
          </div>
          <div>
            {
              session
              ?
                <button 
                  className="px-4 py-1 rounded bg-accent-primary font-semibold text-white"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              :
                <button 
                  className="px-4 py-1 rounded bg-accent-primary font-semibold text-white"
                  onClick={() => toggleLoginModal()}
                >
                  Apply
                </button>
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