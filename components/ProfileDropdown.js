import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/client'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export default function ProfileDropdown({ show, handler }) {
  return (
    <>
      <div
        className={
          "fixed top-32 -right-34 w-76 p-4 rounded border-2 bg-white shadow-md transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 "
          + ( show ? "z-50 visible opacity-100" : "z-0 invisible opacity-0" )
        }
      >
        <div className="flex flex-col gap-4 items-center w-full mb-8 text-lg">
          <motion.button
            whileHover={{ scale: 1.03}} 
            whileTap={{ scale: 0.995 }}
            className="w-full mt-4 py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white"
            onClick={signOut}
          >
            Sign Out
          </motion.button>
        </div>
      </div>
      <div
        className={
          "fixed top-0 left-0 w-full h-full transition-all duration-150 "
          + ( show ? "z-40 visible opacity-100" : "z-0 invisible opacity-0" )
        }
        onClick={handler}
      />
    </>
  )
}