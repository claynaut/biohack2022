import Link from 'next/link'

export default function Faq() {
  return (
    <section className='flex w-full min-h-[60rem] items-center'>
      <div>
        <h1 className='font-semibold text-5xl'>
          Questions?
        </h1>
        <p className='my-4 text-lg'>
          Still can&#39;t find an answer to your question? Feel free to ask us anything at <Link passHref href='mailto:biohackucr@gmail.com'><span className='font-semibold text-accent-primary hover:text-accent-primary-dark cursor-pointer'>biohackucr@gmail.com</span></Link>.
        </p>
      </div>
    </section>
  )
}