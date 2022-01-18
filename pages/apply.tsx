import React from 'react'
import ProtectedPage from '@/components/ProtectedPage'
import ApplicationForm from '@/components/ApplicationForm'

export default function Apply() {
  return (
    <ProtectedPage title='Apply' restrictions={['signin', 'applied']}>
      <section className='flex flex-col w-full max-w-2xl my-32 self-center'>
        <div className='w-full mb-4'>
          <h1 className='font-semibold text-5xl'>
            Apply
          </h1>
          <p className='mt-4 text-lg'>
            Fill out this application to participate in BioHack 2022.
          </p>
        </div>
        <ApplicationForm/>
      </section>
    </ProtectedPage>
  )
}