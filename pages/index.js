import Head from 'next/head'
import React from 'react'
import { connectToDatabase } from '../util/mongodb'
import { Element } from 'react-scroll'

import Layout from '../components/Layout'
import Landing from '../pages/landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>BioHack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Element className="w-full">
          <Landing/>
        </Element>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  await connectToDatabase()
  return { props: {} }
}
