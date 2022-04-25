import Head from 'next/head'

export default function Page({ title = '', children }) {
  return (
    <main className='flex flex-col justify-center items-center w-full min-h-screen'>
      <Head>
        <title>BioHack 2022 { title && title !== '' && ('| ' + title) }</title>
      </Head>
      <section className='flex flex-col w-full justify-center items-center'>
        {children}
      </section>
    </main>
  )
}