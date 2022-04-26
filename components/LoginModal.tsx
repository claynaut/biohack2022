import React, { useState, useEffect } from 'react'
import { signIn, getCsrfToken } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { HiX } from 'react-icons/hi'

export default function LoginModal({ show, handler, csrfToken = '' }) {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(false)
  const [targetElement, setTargetElement] = useState(null)

  const handleEmailChange = () => {
    setError(false)
  }

  const onSubmit = (data) => {
    const { email, csrfToken } = data
    const matchRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    if (email === '' || !matchRegex) {
      toast.error('Please enter a valid email.')
      setError(true)
    }
    else {
      axios.post('/api/auth/signin/email', {
        csrfToken: csrfToken,
        email: email
      })
      .then(() => {
        signIn('email', { csrfToken: csrfToken, email: email })
      })
    }
  }

  useEffect(() => {
    setTargetElement(document.querySelector('#login-modal'))
    if (targetElement) {
      if (show) disableBodyScroll(targetElement)
      else enableBodyScroll(targetElement)
    }
  }, [targetElement, show])

  return (
    <>
      <div
        id='login-modal'
        className={
          'fixed top-1/2 left-1/2 w-11/12 sm:w-[32rem] p-4 rounded bg-text-dark shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 '
          + ( show ? 'z-[1200] visible opacity-100' : 'z-0 invisible opacity-0' )
        }
      >
        <div className='flex flex-col gap-4 items-center w-full mb-8 text-lg'>
          <HiX
            className='self-end text-2xl hover:text-accent cursor-pointer'
            onClick={handler}
          />
          <h1 className='text-center w-full max-w-md font-bold text-2xl'>
            Sign In
          </h1>
          <p className='mt-0 w-full max-w-md text-center'>
            Sign in via email or Google to apply, view your application status, and more. No password required.
          </p>
          <form
            className='w-full max-w-md'
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type='hidden'
              {...register('csrfToken')}
              defaultValue={csrfToken}
            />
            <div>
              <label className='font-semibold'>
                Email Address
              </label>
              <input 
                {...register('email')}
                onChange={handleEmailChange}
                className={
                  'w-full px-2 py-1 rounded border-2 focus:border-accent focus:outline-none '
                  + ( error ? 'border-red-500' : 'border-highlight')
                }
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              type='submit'
              className='w-full mt-2 py-2 rounded bg-accent hover:bg-accent-dark font-semibold'
            >
              Sign In With Email
            </motion.button>
          </form>
          <div className='flex flex-col gap-6 pt-2 justify-center w-full max-w-md'>
            <div className='text-center border-b-2 border-highlight leading-[0.1rem]'>
              <span className='px-4 bg-text-dark text-highlight font-semibold'>or</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className='w-full py-2 rounded bg-accent hover:bg-accent-dark font-semibold'
              onClick={() => signIn('google')}
            >
              Sign In With Google
            </motion.button>
          </div>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full bg-[#0000003F] '
          + ( show ? 'z-[1100] visible opacity-100' : 'z-0 invisible opacity-0' )
        }
        onClick={handler}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}