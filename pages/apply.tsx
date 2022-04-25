import React from 'react'
import ProtectedPage from '@/components/ProtectedPage'
import ApplicationForm from '@/components/ApplicationForm'

export default function Apply() {
  return (
    <ProtectedPage title='Apply' restrictions={['signin', 'applied']}>
      <section className='flex flex-col w-full bg-primary-300 px-4'>
        <div className='w-full max-w-2xl my-32 self-center'>
          <div className='w-full mb-4'>
            <h1 className='font-bold text-5xl text-text-dark'>
              Apply
            </h1>
            <p className='mt-4 text-lg text-text-dark'>
              Fill out this form to apply for BioHack 2022.
            </p>
          </div>
          <ApplicationForm/>
        </div>
      </section>
    </ProtectedPage>
  )
}