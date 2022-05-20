import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Sponsor = ({ image, width, height, link, shrink, tall }) => (
  <div
    className={
      'flex items-center min-h-[10rem] '
      + (shrink ? 'w-[6.5rem] md:w-32 ' : (tall ? 'w-18 md:w-20 ' : 'w-64 md:w-80 '))
    }
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      className='w-full transform-gpu'
    >
      <a target='_blank' rel='noreferrer noopener' href={link}>
        <Image
          src={image}
          width={width}
          height={height}
          quality={50}
          priority={Boolean(true)}
          layout='responsive'
          objectFit='contain'
        />
      </a>
    </motion.div>
  </div>
)

const sponsors = [
  {
    image: '/sponsors/bmes.png',
    width: 995,
    height: 422,
    link: 'https://bmesucr.weebly.com/',
    shrink: null,
    tall: null,
  },
  {
    image: '/sponsors/aspb.png',
    width: 4823,
    height: 1807,
    link: 'https://aspb.ucr.edu/',
    shrink: null,
    tall: null,
  },
  {
    image: '/sponsors/kgi.png',
    width: 1193,
    height: 418,
    link: 'https://www.kgi.edu/',
    shrink: null,
    tall: null,
  },
  {
    image: '/sponsors/blackstone.png',
    width: 4503,
    height: 979,
    link: 'https://www.blackstonelaunchpad.org/',
    shrink: null,
    tall: null,
  },
  {
    image: '/sponsors/acm.png',
    width: 2256,
    height: 2256,
    link: 'https://acmucr.org/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    image: '/sponsors/asucr.png',
    width: 716,
    height: 183,
    link: 'https://asucr.ucr.edu/',
    shrink: null,
    tall: null,
  },
]

export function SponsorsGrid() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className='grid grid-cols-2 flex flex-col mt-16'>
      <div className='col-span-2 relative flex flex-wrap justify-center w-full gap-20 gap-y-0 md:gap-y-6 rounded-md overflow-hidden'>
        { sponsors.map(({ image, width, height, link, shrink, tall }) =>
          <Sponsor
            key={link}
            image={image}
            width={width}
            height={height}
            link={link}
            shrink={shrink}
            tall={tall}
          />
        )}
      </div>
    </div>
  )
}