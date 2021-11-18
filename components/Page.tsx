import Head from 'next/head'

export default function Page({ title = '', children }) {
  return (
    <main className='flex flex-col justify-center items-center px-4 w-full min-h-screen'>
      <Head>
        <title>BioHack 2022 { title !== '' && ('| ' + title) }</title>
      </Head>
      <div className='w-full max-w-[60rem]'>
        <section className='flex flex-col w-full'>
          {children}
        </section>
      </div>
    </main>
  )
}