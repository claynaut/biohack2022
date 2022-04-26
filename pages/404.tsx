import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Page from '@/components/Page'

export default function Error404() {
  return (
    <Page title='404'>
      <section className='flex flex-col items-center w-full text-text-dark'>
        <h1>
            404
        </h1>
        <p>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link passHref href='/'>
          <motion.button
            whileHover={{ scale: 1.05}} 
            whileTap={{ scale: 0.995 }}
            className='px-4 py-1.5 rounded bg-accent hover:bg-accent-dark'
          >
            Go Back to Homepage
          </motion.button>
        </Link>
      </section>
    </Page>
  )
}