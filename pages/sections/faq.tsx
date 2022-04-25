import { FaqGrid } from '@/components/Faq'
import Link from 'next/link'

export default function Faq() {
  return (
    <section className='flex flex-col w-full h-full my-12 lg:mt-0 max-w-[64rem]'>
      <div>
        <h2>FAQ</h2>
        <p>
          Still can&#39;t find an answer to your question? Feel free to ask us anything at <Link passHref href='mailto:biohackucr@gmail.com'><span className='font-semibold text-accent hover:underline cursor-pointer'>biohackucr@gmail.com</span></Link>.
        </p>
        <FaqGrid />
      </div>
    </section>
  )
}