import Link from 'next/link'
import Image from 'next/image'
import { FaqGrid } from '@/components/Faq'

export default function Faq() {
  return (
    <section className='flex flex-col w-full h-full my-12 lg:mt-0 max-w-[64rem] z-[50]'>
      <div className='flex flex-col w-full items-center'>
        <h2>FAQ</h2>
        <p className='text-center'>
          Still can&#39;t find an answer to your question? Feel free to ask us anything at <Link passHref href='mailto:biohackucr@gmail.com'><span className='font-semibold text-accent hover:underline cursor-pointer'>biohackucr@gmail.com</span></Link>.
        </p>
        <FaqGrid />
      </div>
      <div className='mt-12 w-full max-w-xs self-end'>
        <Image
          src='/assets/cleaning.png'
          width={462}
          height={450}
          quality={80}
          layout='responsive'
          objectFit='contain'
        />
      </div>
    </section>
  )
}