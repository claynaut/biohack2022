import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import LoginModal from '@/components/LoginModal'
import { CountdownWrapper } from '@/components/Countdown'
import { ButtonLink } from '@/components/ButtonLink'

export default function Landing() {
  const { data: session, status } = useSession()
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen)
  }

  return (
    <>
      <section className='flex w-full max-w-[64rem] h-screen min-h-[32rem] md:min-h-[60rem] my-12 lg:mt-0 items-center justify-center xs:justify-start z-[50]'>
        <div className='flex flex-col w-full'>
          <div className='flex flex-col 2xl:flex-row w-full items-center lg:gap-6'>
            <div className='w-32 md:w-40 lg:w-48'>
              <Image
                src='/logo.png'
                width={922}
                height={1063}
                quality={80}
                priority={Boolean(true)}
                objectFit='contain'
              />
            </div>
            <div className='w-full'>
              <h1 className='text-center 2xl:text-left text-6xl md:text-7xl font-semibold'>
                BIO<b>HACK</b>
              </h1>
              <h4 className='text-center 2xl:text-left'>
                Virtual <span className='font-bold'>Healthcare Hackathon</span>
              </h4>
              <h3 className='text-center 2xl:text-left text-accent font-extrabold'>
                Coming in Late 2022
              </h3>
            </div>
          </div>
          {/* <CountdownWrapper date='2022-05-21T19:00:00Z' /> */}
          <div className='flex flex-col 2xl:flex-row justify-center items-center 2xl:justify-start w-full gap-3 sm:gap-4 mt-8'>
            <div className='flex flex-col gap-3 w-full sm:w-min'>
              <ButtonLink
                primary
                label='Apply for Lead'
                link='https://docs.google.com/forms/d/1Ofm7rsm-UIouZz4KSCS_-NYZBCchSnGhmOQ6wQUpI2A'
                external
              />
              <ButtonLink
                primary
                label='Apply for Web Developer'
                link='https://docs.google.com/forms/d/1aUQnitpLxcRkueuUFs8vkNJgbe9f_RprNUWt257vSVA'
                external
              />
            </div>
            <div className='flex flex-col gap-3 w-full sm:w-min'>
              <ButtonLink
                label='Join a Committee'
                link='https://docs.google.com/forms/d/1ceVRzwBes5c3CQavdhr-a98ctjKCxQAHhw_tfyBLz9I'
                external
              />
              <ButtonLink
                label='Join the Web Dev Committee'
                link='https://docs.google.com/forms/d/1WnQUlLoEbcFVND2Cnuwjbet4dSVsrMPChT_BF7Z0O_o'
                external
              />
            </div>
            {/* {
              status !== 'authenticated' &&
              <motion.button
                whileHover={{ scale: 1.05}} 
                whileTap={{ scale: 0.995 }}
                className='w-full sm:w-52 py-1.5 rounded bg-accent hover:bg-accent-dark'
                onClick={() => toggleLoginModal()}
              >
                Sign In
              </motion.button>
            } */}
            {/* {
              status === 'authenticated' && 
              !session.user.uid &&
              <Link passHref href='/apply'>
                <motion.button
                  whileHover={{ scale: 1.05}} 
                  whileTap={{ scale: 0.995 }}
                  className='w-full sm:w-52 py-1.5 rounded bg-accent hover:bg-accent-dark'
                >
                  Apply Now
                </motion.button>
              </Link>
            } */}
            {/* { status === 'authenticated' 
              && session.user.uid
              && session.user.qualified === 'yes'
              && !session.user.checkedIn &&
              <Link passHref href='/checkin'>
                <motion.button
                  whileHover={{ scale: 1.05}} 
                  whileTap={{ scale: 0.995 }}
                  className='w-full sm:w-52 py-1.5 rounded bg-accent hover:bg-accent-dark'
                >
                  Check-In Now!
                </motion.button>
              </Link>
            } */}
            {
              status === 'authenticated' && 
              session.user.uid && 
              session.user.qualified === 'yes' &&
              <>
                {/* <a target='_blank' rel='noreferrer noopener' href={process.env.discord} className='flex justify-center'>
                  <motion.button
                    whileHover={{ scale: 1.05}} 
                    whileTap={{ scale: 0.995 }}
                    className='w-full sm:w-52 py-1.5 rounded bg-highlight-dark hover:bg-primary-200'
                  >
                    Open Discord
                  </motion.button>
                </a> */}
                {/* <Link passHref href='/group/dashboard'>
                  <motion.button
                    whileHover={{ scale: 1.05}} 
                    whileTap={{ scale: 0.995 }}
                    className='w-full sm:w-52 py-1.5 rounded bg-highlight-dark hover:bg-primary-200'
                  >
                    View My Group
                  </motion.button>
                </Link> */}
              </>
            }
          </div>
        </div>
      </section>
      <LoginModal
        show={loginModalOpen}
        handler={toggleLoginModal}
      />
    </>
  )
}