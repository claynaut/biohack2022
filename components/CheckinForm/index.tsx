import React, { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { Confirmation } from './components'

export function CheckinForm() {
  const { data: session } = useSession()
  const { register, handleSubmit, control, watch } = useForm()
  const { errors } = useFormState({ control })
  const router = useRouter()
  const [clickedSubmitOnce, setClickedSubmitOnce] = useState(false)

  const onSubmit = async({
    participating,
    lives_in_US,
    address_line_1,
    address_line_2,
    city,
    state,
    zipcode
  }) => {
    if (clickedSubmitOnce) { return }
    setClickedSubmitOnce(Boolean(true))

    let address = ''

    if (lives_in_US === 'Yes') {
      address = address_line_1
      if (address_line_2 !== '') {
        address += ', ' + address_line_2
      }
      address += ', ' + city + ', ' + state + ' ' + zipcode
    }

    axios.post('/api/users/check-in', {
      uid: session.user.uid,
      participating,
      address
    })
    .then(() => {
      toast.success(
        'Successfully checked in!',
        { id: 'checkinSuccess' }
      )
      router.reload()
    })
    .catch(() => {
      toast.error(
        'Uh oh. Something went wrong. If this issue persists, let us know.',
        { id: 'checkinError' }
      )
      setClickedSubmitOnce(Boolean(false))
    })
  }

  const triggerErrorNotification = () => {
    if (Object.keys(errors).length > 0) {
      toast.error('Please fill out all required fields.', 
        { id: 'applicationNotFilledOut' }
      )
    }
  }

  return (
    <main className='flex flex-col items-center my-24 px-4 w-full'>
      <h1 className='font-bold text-5xl text-text-dark'>
        Check-In
      </h1>
      <p className='mt-4 text-lg text-text-dark'>
        Fill out this form to confirm your participation for BioHack 2022!
      </p>
      <form 
        className='flex flex-col gap-4 w-full sm:max-w-2xl self-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Confirmation
          register={register}
          errors={errors}
          watch={watch}
        />
        <motion.button
          whileHover={{ scale: 1.05}} 
          whileTap={{ scale: 0.995 }}
          type='submit'
          className='w-full py-2 rounded bg-accent hover:bg-accent-dark font-semibold text-text-dark'
          onClick={() => triggerErrorNotification()}
        >
          {clickedSubmitOnce ? 'Submitting...' : 'Submit'}
        </motion.button>
      </form>
    </main>
  )
}