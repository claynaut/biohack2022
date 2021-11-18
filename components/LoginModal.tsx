import React, { useState, useEffect } from 'react'
import { getCsrfToken } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { FaTimes } from 'react-icons/fa'

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
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
          'fixed top-1/2 left-1/2 w-11/12 sm:w-[28rem] p-4 rounded bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 '
          + ( show ? 'z-50 visible opacity-100' : 'z-0 invisible opacity-0' )
        }
      >
        <div className='flex flex-col gap-4 items-center w-full mb-8 text-lg'>
          <FaTimes
            className='self-end hover:text-accent-primary cursor-pointer'
            onClick={handler}
          />
          <h1 className='text-center w-full max-w-sm font-semibold text-2xl'>
            Sign In
          </h1>
          <p className='w-full max-w-sm'>
            Sign in to BioHack with your email to apply and access more. No password required.
          </p>
          <form
            className='w-full max-w-sm'
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
                  'w-full px-2 py-1 rounded border-2 focus:border-accent-primary focus:outline-none '
                  + ( error ? 'border-red-500' : 'border-gray-300')
                }
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              type='submit'
              className='w-full mt-4 py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white'
            >
              Sign In
            </motion.button>
          </form>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full bg-overlay transition-all duration-150 '
          + ( show ? 'z-40 visible opacity-100' : 'z-0 invisible opacity-0' )
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