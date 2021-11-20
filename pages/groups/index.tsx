import React, { useState } from 'react'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { HiChevronRight, HiChevronDown } from 'react-icons/hi'
import ProtectedPage from '@/components/ProtectedPage'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Groups() {
  const { data, error } = useSWR('/api/groups', fetcher)
  const [selectedFilter, setSelectedFilter] = useState('All Groups')
  const [expandedGroups, setExpandedGroups] = useState([])

  const filters = [
    'All Groups',
    'Not Full',
    '1 Hacker',
    '2 Hackers',
    '3 Hackers',
  ]

  const selectFilter = (filter: string) => {
    setSelectedFilter(filter)
    setExpandedGroups([])
  }

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
                  + (selectedFilter === filter ? 'bg-accent-primary hover:bg-accent-primary-dark' : 'bg-gray-300 hover:bg-gray-400')
                }
                onClick={() => selectFilter(filter)}
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
              <div className='col-start-3 col-span-2'>
                Size
              </div>
            </div>
            {/* query all groups */}
            {
              selectedFilter === filters[0] && data.groups &&
              data.groups.map((group) =>
                <div 
                  className={
                    'flex flex-col h-screen border-2 rounded-md bg-white shadow-md transition-size duration-150 overflow-hidden '
                    + (expandedGroups.includes(group) ? 'max-h-[15rem]' : 'max-h-[2.75rem]')
                  }
                >
                  <div className='grid grid-cols-5 items-center text-center px-2'>
                    <button 
                      className='p-1 max-w-min rounded-full hover:bg-gray-200 cursor-pointer text-xl'
                      onClick={
                        () => setExpandedGroups(
                          expandedGroups.includes(group) ?
                            expandedGroups.filter(expandedGroup => expandedGroup !== group) :
                            expandedGroups.concat([group])
                        )
                      }
                    >
                      {
                        expandedGroups.includes(group) ?
                        <HiChevronDown />
                        :
                        <HiChevronRight />
                      }
                    </button>
                    <div className='col-start-2 py-2'>
                      {group.gid.substring(0,6)}
                    </div>
                    <div className='col-start-3 col-span-2 py-2'>
                      {group.users.length} / 4
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.03}} 
                      whileTap={{ scale: 0.995 }}
                      className='w-full max-w-lg py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white whitespace-nowrap'
                    >
                      Request Invite
                    </motion.button>
                  </div>
                  <div className='grid grid-cols-5 items-center text-center px-2 border-t-2'>
                    <div className='col-start-2 py-2'>
                      <div className='font-semibold'>
                        Hackers
                      </div>
                      {
                        group.users.map((user) =>
                          <div className='py-2'>
                            {user.name.first}
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              )
            }
            {/* query all groups that aren't full */}
            {
              selectedFilter === filters[1] && data.groups &&
              data.groups.filter(group => group.users.length < 4).map((group) =>
                <div 
                  className={
                    'flex flex-col h-screen border-2 rounded-md bg-white shadow-md transition-size duration-150 overflow-hidden '
                    + (expandedGroups.includes(group) ? 'max-h-[15rem]' : 'max-h-[2.75rem]')
                  }
                >
                  <div className='grid grid-cols-5 items-center text-center px-2'>
                    <button 
                      className='p-1 max-w-min rounded-full hover:bg-gray-200 cursor-pointer text-xl'
                      onClick={
                        () => setExpandedGroups(
                          expandedGroups.includes(group) ?
                            expandedGroups.filter(expandedGroup => expandedGroup !== group) :
                            expandedGroups.concat([group])
                        )
                      }
                    >
                      {
                        expandedGroups.includes(group) ?
                        <HiChevronDown />
                        :
                        <HiChevronRight />
                      }
                    </button>
                    <div className='col-start-2 py-2'>
                      {group.gid.substring(0,6)}
                    </div>
                    <div className='col-start-3 col-span-2 py-2'>
                      {group.users.length} / 4
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.03}} 
                      whileTap={{ scale: 0.995 }}
                      className='w-full max-w-lg py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white whitespace-nowrap'
                    >
                      Request Invite
                    </motion.button>
                  </div>
                  <div className='grid grid-cols-5 items-center text-center px-2 border-t-2'>
                    <div className='col-start-2 py-2'>
                      <div className='font-semibold'>
                        Hackers
                      </div>
                      {
                        group.users.map((user) =>
                          <div className='py-2'>
                            {user.name.first}
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              )
            }
            {/* query groups with only 1 hacker */}
            {
              selectedFilter === filters[2] && data.groups &&
              data.groups.filter(group => group.users.length === 1).map((group) =>
                <div 
                  className={
                    'flex flex-col h-screen border-2 rounded-md bg-white shadow-md transition-size duration-150 overflow-hidden '
                    + (expandedGroups.includes(group) ? 'max-h-[15rem]' : 'max-h-[2.75rem]')
                  }
                >
                  <div className='grid grid-cols-5 items-center text-center px-2'>
                    <button 
                      className='p-1 max-w-min rounded-full hover:bg-gray-200 cursor-pointer text-xl'
                      onClick={
                        () => setExpandedGroups(
                          expandedGroups.includes(group) ?
                            expandedGroups.filter(expandedGroup => expandedGroup !== group) :
                            expandedGroups.concat([group])
                        )
                      }
                    >
                      {
                        expandedGroups.includes(group) ?
                        <HiChevronDown />
                        :
                        <HiChevronRight />
                      }
                    </button>
                    <div className='col-start-2 py-2'>
                      {group.gid.substring(0,6)}
                    </div>
                    <div className='col-start-3 col-span-2 py-2'>
                      {group.users.length} / 4
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.03}} 
                      whileTap={{ scale: 0.995 }}
                      className='w-full max-w-lg py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white whitespace-nowrap'
                    >
                      Request Invite
                    </motion.button>
                  </div>
                  <div className='grid grid-cols-5 items-center text-center px-2 border-t-2'>
                    <div className='col-start-2 py-2'>
                      <div className='font-semibold'>
                        Hackers
                      </div>
                      {
                        group.users.map((user) =>
                          <div className='py-2'>
                            {user.name.first}
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              )
            }
            {/* query groups with 2 hackers */}
            {
              selectedFilter === filters[3] && data.groups &&
              data.groups.filter(group => group.users.length === 2).map((group) =>
                <div 
                  className={
                    'flex flex-col h-screen border-2 rounded-md bg-white shadow-md transition-size duration-150 overflow-hidden '
                    + (expandedGroups.includes(group) ? 'max-h-[15rem]' : 'max-h-[2.75rem]')
                  }
                >
                  <div className='grid grid-cols-5 items-center text-center px-2'>
                    <button 
                      className='p-1 max-w-min rounded-full hover:bg-gray-200 cursor-pointer text-xl'
                      onClick={
                        () => setExpandedGroups(
                          expandedGroups.includes(group) ?
                            expandedGroups.filter(expandedGroup => expandedGroup !== group) :
                            expandedGroups.concat([group])
                        )
                      }
                    >
                      {
                        expandedGroups.includes(group) ?
                        <HiChevronDown />
                        :
                        <HiChevronRight />
                      }
                    </button>
                    <div className='col-start-2 py-2'>
                      {group.gid.substring(0,6)}
                    </div>
                    <div className='col-start-3 col-span-2 py-2'>
                      {group.users.length} / 4
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.03}} 
                      whileTap={{ scale: 0.995 }}
                      className='w-full max-w-lg py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white whitespace-nowrap'
                    >
                      Request Invite
                    </motion.button>
                  </div>
                  <div className='grid grid-cols-5 items-center text-center px-2 border-t-2'>
                    <div className='col-start-2 py-2'>
                      <div className='font-semibold'>
                        Hackers
                      </div>
                      {
                        group.users.map((user) =>
                          <div className='py-2'>
                            {user.name.first}
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              )
            }
            {/* query groups with 3 hackers */}
            {
              selectedFilter === filters[4] && data.groups &&
              data.groups.filter(group => group.users.length === 3).map((group) =>
                <div 
                  className={
                    'flex flex-col h-screen border-2 rounded-md bg-white shadow-md transition-size duration-150 overflow-hidden '
                    + (expandedGroups.includes(group) ? 'max-h-[15rem]' : 'max-h-[2.75rem]')
                  }
                >
                  <div className='grid grid-cols-5 items-center text-center px-2'>
                    <button 
                      className='p-1 max-w-min rounded-full hover:bg-gray-200 cursor-pointer text-xl'
                      onClick={
                        () => setExpandedGroups(
                          expandedGroups.includes(group) ?
                            expandedGroups.filter(expandedGroup => expandedGroup !== group) :
                            expandedGroups.concat([group])
                        )
                      }
                    >
                      {
                        expandedGroups.includes(group) ?
                        <HiChevronDown />
                        :
                        <HiChevronRight />
                      }
                    </button>
                    <div className='col-start-2 py-2'>
                      {group.gid.substring(0,6)}
                    </div>
                    <div className='col-start-3 col-span-2 py-2'>
                      {group.users.length} / 4
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.03}} 
                      whileTap={{ scale: 0.995 }}
                      className='w-full max-w-lg py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white whitespace-nowrap'
                    >
                      Request Invite
                    </motion.button>
                  </div>
                  <div className='grid grid-cols-5 items-center text-center px-2 border-t-2'>
                    <div className='col-start-2 py-2'>
                      <div className='font-semibold'>
                        Hackers
                      </div>
                      {
                        group.users.map((user) =>
                          <div className='py-2'>
                            {user.name.first}
                          </div>
                        )
                      }
                    </div>
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