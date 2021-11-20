import React, { useState } from 'react'
import useSWR from 'swr'
import { HiChevronRight } from 'react-icons/hi'
import ProtectedPage from '@/components/ProtectedPage'
import { motion } from 'framer-motion'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Groups() {
  const { data, error } = useSWR('/api/groups', fetcher)
  const [selectedFilter, setSelectedFilter] = useState('All Groups')

  const filters = [
    'All Groups',
    'Not Full',
    '1 Hacker',
    '2 Hackers',
    '3 Hackers',
  ]

  if (error) 
    return (
      <ProtectedPage title='All Groups' restrictions={['signin', 'qualified']}>
        <section className='flex flex-col w-full my-32 self-center'>
          Error...
        </section>
      </ProtectedPage>
    )

  if (!data) 
    return (
      <ProtectedPage title='All Groups' restrictions={['signin', 'qualified']}>
        <section className='flex flex-col w-full my-32 self-center'>
          Loading...
        </section>
      </ProtectedPage>
    )

  return (
    <ProtectedPage title='All Groups' restrictions={['signin', 'qualified']}>
      <section className='flex flex-col w-full my-32 self-center'>
        <div className='w-full mb-12'>
          <h1 className='font-semibold text-5xl'>
            All Groups
          </h1>
          <p className='my-4 text-lg'>
            Find a group to work with here!
          </p>
          <p className='my-4 text-lg'>
            Want to join a group? By requesting an invite code, group members will be notified to send an invite code to you via email. Note that your email will be shared as that will be used to send an invite code to you.
          </p>
          <h3 className='font-semibold text-3xl'>
            Filter Options
          </h3>
          <div className='flex gap-3 my-4'>
            {
              filters.map((filter) =>
              <motion.button 
                whileHover={{ scale: 1.03}} 
                whileTap={{ scale: 0.995 }}
                className={
                  'w-full max-w-lg py-1.5 rounded font-semibold text-white '
                  + (selectedFilter === filter ? 'bg-accent-primary hover:bg-accent-primary-dark' : 'bg-gray-400 hover:bg-gray-500')
                }
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </motion.button>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-5 text-center p-2 rounded-md bg-gray-300 font-semibold'>
              <div className='col-start-2 whitespace-nowrap'>
                Group Code
              </div>
              <div className='col-start-4'>
                Size
              </div>
            </div>
            {
              data.groups.map(({ gid, users }) =>
                <div className='grid grid-cols-5 items-center text-center px-2 border-2 rounded-md bg-white shadow-md'>
                  <div className='p-1 max-w-min rounded-full hover:bg-gray-200 cursor-pointer text-xl'>
                    <HiChevronRight />
                  </div>
                  <div className='col-start-2 py-2'>
                    {gid.substring(0,6)}
                  </div>
                  <div className='col-start-4 py-2'>
                    {users.length} / 4
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </ProtectedPage>
  )
}