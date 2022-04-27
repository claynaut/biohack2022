import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown'
import { motion } from 'framer-motion'
import Link from 'next/link'

var buttonVariants = {}

interface TimeBlockProps {
  condition: boolean
  num: string
  label: string
  separator?: boolean
}

function TimeBlock({ condition, num, label, separator }: TimeBlockProps) {
  return (
    condition &&
    <>
      <div className='relative flex flex-col col-span-2 items-center text-highlight-dark'>
        <div className='flex gap-0.5 xs:gap-1 sm:gap-2'>
          { Array.from(num).map((n, idx) =>
            <motion.div
              key={label+String(idx)}
              variants={buttonVariants}
              whileHover='hover'
              className='flex justify-center items-center w-8 xs:w-11 sm:w-14 h-12 xs:h-14 sm:h-20 rounded bg-card shadow-md cursor-default' 
            >
              {n}
            </motion.div>
          )}
        </div>
        <p className='absolute top-10 xs:top-12 sm:top-[4.25rem] text-lg xs:text-xl leading-3 font-extrabold text-sub'>
          {label}
        </p>
      </div>
      { separator && 
        <div className='flex flex-col text-xl xs:text-3xl sm:text-4xl text-center justify-center text-sub'>
          :
        </div> }
    </>
  )
}

const Completionist = () => (
  <div className='flex w-full justify-center 2xl:justify-start mb-4'>
    <Link passHref href='/live'>
      <motion.button
        whileHover={{ scale: 1.05}} 
        whileTap={{ scale: 0.995 }}
        className='w-full sm:w-52 py-1.5 rounded bg-accent hover:bg-accent-dark text-base'
      >
        Live Page
      </motion.button>
    </Link>
  </div>
)

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />
  } 
  else {
    const numDays = days < 10 ? String(`0${days}`) : String(days)
    const numHours = hours < 10 ? String(`0${hours}`) : String(hours)
    const numMinutes = minutes < 10 ? String(`0${minutes}`) : String(minutes)
    const numSeconds = seconds < 10 ? String(`0${seconds}`) : String(seconds)

    return (
      <div className='flex flex-col w-full items-center 2xl:items-start mb-10'>
        <div 
          className={
            'grid flex max-w-xl '
            + (days <= 0 ? (hours <= 0 ? (minutes <= 0 ? 'grid-cols-2' : 'grid-cols-5') : 'grid-cols-8') : 'grid-cols-11')
          }
        >
          <TimeBlock
            condition={Boolean(days > 0)}
            num={numDays}
            label='days'
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0)}
            num={numHours}
            label='hours'
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0 || minutes > 0)}
            num={numMinutes}
            label='mins'
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0 || minutes > 0 || seconds > 0)}
            num={numSeconds}
            label='secs'
          />
        </div>
      </div>
    )
  }
}

export function CountdownWrapper({ date }) {
  const [isMobile, setIsMobile] = useState(false)
  
  if (!isMobile)
    buttonVariants = { hover: { y: -3 } }
  else
    buttonVariants = {}

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <h2 className='flex justify-center xl:justify-start text-2xl xs:text-4xl sm:text-5xl'>
      <Countdown date={date} renderer={renderer} />
    </h2>
  )
}

const HackerCompletionist = () => (
  <div className='flex w-full justify-center 2xl:justify-start mb-4'>
    <h3 className='text-center font-extrabold'>
      Hacking has ended!
    </h3>
  </div>
)

const hackingRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <HackerCompletionist />
  } 
  else {
    const numDays = days < 10 ? String(`0${days}`) : String(days)
    const numHours = hours < 10 ? String(`0${hours}`) : String(hours)
    const numMinutes = minutes < 10 ? String(`0${minutes}`) : String(minutes)
    const numSeconds = seconds < 10 ? String(`0${seconds}`) : String(seconds)

    return (
      <div className='flex flex-col w-full items-center 2xl:items-start mb-10'>
        <h3 className='text-center sm:text-left font-extrabold'>
          Hacking ends in...
        </h3>
        <div 
          className={
            'grid flex max-w-xl '
            + (days <= 0 ? (hours <= 0 ? (minutes <= 0 ? 'grid-cols-2' : 'grid-cols-5') : 'grid-cols-8') : 'grid-cols-11')
          }
        >
          <TimeBlock
            condition={Boolean(days > 0)}
            num={numDays}
            label='days'
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0)}
            num={numHours}
            label='hours'
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0 || minutes > 0)}
            num={numMinutes}
            label='mins'
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0 || minutes > 0 || seconds > 0)}
            num={numSeconds}
            label='secs'
          />
        </div>
      </div>
    )
  }
}

export function HackerCountdownWrapper({ date }) {
  const [isMobile, setIsMobile] = useState(false)
  
  if (!isMobile)
    buttonVariants = { hover: { y: -3 } }
  else
    buttonVariants = {}

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <h2 className='flex justify-center xl:justify-start text-2xl xs:text-4xl sm:text-5xl'>
      <Countdown date={date} renderer={hackingRenderer} />
    </h2>
  )
}
