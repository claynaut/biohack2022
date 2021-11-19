import React from 'react'
import Page from '@/components/Page'

export default function Error404() {
  return (
    <Page title='Verify Sign In Request'>
      <div className='w-full'>
        <h1 className='font-semibold text-5xl'>
          404
        </h1>
        <p className='mt-4 text-lg'>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    </Page>
  )
}