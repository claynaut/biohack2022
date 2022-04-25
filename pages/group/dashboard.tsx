import React, { useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useForm, useFormState } from 'react-hook-form'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import ProtectedPage from '@/components/ProtectedPage'
import { Input } from '@/components/Form'
import Modal from '@/components/Modal'

interface GroupProps {
  title: string
  children: React.ReactNode | React.ReactNode[]
}

const Group = ({title, children}: GroupProps) => (
  <div className='flex flex-col gap-3 p-6 bg-text-dark rounded shadow-lg '>
    <h3 className='text-center text-3xl'>{title}</h3>
    {children}
  </div>
)

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function GroupDashbaord() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { register, handleSubmit, control } = useForm()
  const { errors } = useFormState({ control })
  const { data, error } = useSWR('/api/groups/user', fetcher)
  const [modalOpen, setModalOpen] = useState(false)

  const joinGroup = ({ invite_code }) => {
    axios.post('/api/groups/join', { invite_code })
    .then(() => {
      toast.success('Successfully joined a group!', { id: 'joinGroupSuccess' })
      router.reload()
    })
    .catch((error) => {
      if (error.response.status === 500) {
        toast.error(
          'Uh oh. Something went wrong. If this issue persists, let us know.',
          { id: 'joinGroupError'}
        )
      }
      else if (error.response.status === 400) {
        toast.error(
          error.response.data.message,
          { id: 'joinGroupInvalidRequestError'}
        )
      }
    })
  }

  const createGroup = () => {
    axios.post('/api/groups/create')
    .then(() => {
      toast.success('Successfully created a group!', { id: 'createGroupSuccess' })
      router.reload()
    })
    .catch(() => {
      toast.error(
        'Uh oh. Something went wrong. If this issue persists, let us know.',
        { id: 'createGroupError'}
      )
    })
  }

  const leaveGroup = () => {
    axios.post('/api/groups/leave')
    .then(() => {
      toast.success('Successfully left your group!', { id: 'leaveGroupSuccess' })
      router.reload()
    })
    .catch(() => {
      toast.error(
        'Uh oh. Something went wrong. If this issue persists, let us know.',
        { id: 'leaveGroupError'}
      )
    })
  }

  const triggerErrorNotification = () => {
    if (Object.keys(errors).length > 0) {
      toast.error('Please input an invite code.', {
        id: 'missingInviteCode',
      })
    }
  }

  return (
    <ProtectedPage title='My Group' restrictions={['signin', 'qualified']}>
      <section className='flex flex-col gap-8 w-full sm:max-w-xl self-center'>
        {
          status === 'authenticated' && (
          session.user.gid === '' ?
            <>
              <Group title='Join Group'>
                <p className='my-4 text-lg text-center'>
                  Have a group to join? Input the invite code below.
                </p>
                <form 
                  className='flex flex-col gap-3 w-full self-center'
                  onSubmit={handleSubmit(joinGroup)}
                >
                  <Input
                    type='text'
                    label='Invite Code'
                    variable='invite_code'
                    register={register}
                    errors={errors}
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.03}} 
                    whileTap={{ scale: 0.995 }}
                    type='submit'
                    className='w-full py-2 rounded bg-accent hover:bg-accent-dark font-semibold text-text-dark'
                    onClick={() => triggerErrorNotification()}
                  >
                    Join a Group
                  </motion.button>
                </form>
              </Group>
              <Group title='Create Group'>
                <p>
                  Want to make a group? Just click the button below.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03}} 
                  whileTap={{ scale: 0.995 }}
                  type='submit'
                  className='w-full py-2 rounded bg-accent hover:bg-accent-dark font-semibold text-text-dark'
                  onClick={() => createGroup()}
                >
                  Create a Group
                </motion.button>
              </Group>
            </>
          :
            <div className='w-full mb-12 text-text-dark'>
              <h3 className='text-4xl'>
                My Group
              </h3>
              <p className='my-4 text-lg'>
                Invite others to your group by sharing the invite code below.
              </p>
              <p className='my-4 text-lg'>
                Note that groups can only have a maximum of 4 hackers, including yourself.
              </p>
              <h3 className='text-4xl'>
                Invite Code
              </h3>
              <p className='my-4 text-lg'>
                {session.user.gid}
              </p>
              <h3 className='text-4xl'>
                Members
              </h3>
              <ul className='mt-4 ml-5 list-disc text-lg'>
                {
                  !error && data && 
                  data.members.map(({ name }) =>
                    <li>
                      {name.first} {name.last}
                    </li>
                  )
                }
              </ul>
            </div>
        )}
        <div className='flex flex-col w-full gap-3'>
          { status === 'authenticated' 
            && session.user.gid !== '' &&
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className='w-full py-2 rounded bg-accent hover:bg-accent-dark font-semibold text-text-dark'
              onClick={() => setModalOpen(true)}
            >
              Leave Group
            </motion.button>
          }
          <Link passHref href='/'>
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className='w-full py-2 rounded bg-accent hover:bg-accent-dark font-semibold text-text-dark'
            >
              Go Back to Homepage
            </motion.button>
          </Link>
        </div>
      </section>
      <Modal
        title='Leave Group?'
        description='Are you sure you want to leave? If you want to rejoin, you will need to re-input the invite code.'
        show={modalOpen}
        handler={setModalOpen}
      >
        <div className='flex gap-3 w-full'>
          <motion.button
            whileHover={{ scale: 1.03}} 
            whileTap={{ scale: 0.995 }}
            className='w-full max-w-lg py-2 rounded bg-highlight hover:bg-highlight-dark font-semibold text-text-dark'
            onClick={() => leaveGroup()}
          >
            Confirm
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03}} 
            whileTap={{ scale: 0.995 }}
            className='w-full max-w-lg py-2 rounded bg-accent hover:bg-accent-dark font-semibold text-text-dark'
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </motion.button>
        </div>
      </Modal>
    </ProtectedPage>
  )
}