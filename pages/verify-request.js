import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function VerifyRequest() {
  return (
    <>
      <Head>
        <title>BioHack 2022 | Verify Sign In Request</title>
      </Head>
      <Layout>
        <section className="flex w-full max-w-5xl h-screen items-center self-center">
          <div className="w-full">
            <h1 className="font-semibold text-5xl">
              Verify Request
            </h1>
            <p className="mt-4 text-lg">
              Confirm your email to sign in to BioHack. Didn't find an email from us? Check your spam folder or double check if you typed in the correct email.
            </p>
          </div>
        </section>
      </Layout>
    </>
  )
}