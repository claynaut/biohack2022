import React from 'react'
import Page from '@/components/Page'

export default function Error404() {
  return (
    <Page title='500'>
      <section className='flex flex-col items-center w-full px-4 text-text-dark max-w-[64rem]'>
        <h1>
          500
        </h1>
        <p>
          Oops! Something went wrong on our end. Check back later.
        </p>
      </section>
    </Page>
  )
}