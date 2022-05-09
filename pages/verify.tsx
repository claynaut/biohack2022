import React from 'react'
import Page from '@/components/Page'

export default function VerifyRequest() {
  return (
    <Page title='Verify Sign In Request'>
      <section className='flex flex-col items-center w-full px-4 text-text-dark max-w-[64rem]'>
        <h1>
          Verify Request
        </h1>
        <p>
          Confirm your email to sign in to BioHack. Didn't find an email from us? Check your spam folder or double check if you typed in the correct email.
        </p>
      </section>
    </Page>
  )
}