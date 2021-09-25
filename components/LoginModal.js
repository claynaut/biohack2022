import React, { useState } from 'react'
import { signIn, getCsrfToken } from 'next-auth/client'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export default function LoginModal({ show, handler, csrfToken }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setError(false)
  }

  const handleSubmit = () => {
    const matchRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    if (email === "" || !matchRegex) {
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
  
      signIn('email', { csrfToken: csrfToken, email: email })
    }
  }

  return (
    <>
      <div
        className={
          "fixed top-1/2 left-1/2 w-11/12 sm:w-112 p-4 rounded bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 "
          + ( show ? "z-50 visible opacity-100" : "z-0 invisible opacity-0" )
        }
      >
        <div className="flex flex-col gap-4 items-center w-full mb-8 text-lg">
          <FaTimes
            className="self-end hover:text-accent-primary cursor-pointer"
            onClick={handler}
          />
          <h1 className="text-center w-full max-w-sm font-semibold text-2xl">
            Sign In
          </h1>
          <p className="w-full max-w-sm">
            Sign in to BioHack with your email to apply and access more. No password required.
          </p>
          <div className="w-full max-w-sm">
            <label 
              for="email"
              className={
                "w-full font-semibold "
                + ( error ? "text-red-500" : "" )
              }
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className={
                "w-full px-2 py-1 rounded border-2 focus:border-accent-primary focus:outline-none "
                + ( error ? "border-red-500" : "border-gray-300" )
              }
            />
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className="w-full mt-4 py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white"
              onClick={() => handleSubmit()}
            >
              Sign In
            </motion.button>
          </div>
        </div>
      </div>
      <div
        className={
          "fixed top-0 left-0 w-full h-full bg-overlay transition-all duration-150 "
          + ( show ? "z-40 visible opacity-100" : "z-0 invisible opacity-0" )
        }
        onClick={handler}
      />
    </>
  )
}

export async function getServerSideProps(context){
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}