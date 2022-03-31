import { FaqGrid } from '@/components/Faq'
import Link from 'next/link'

export default function Faq() {
  return (
    <section className='flex w-full my-12'>
      <div>
        <h2>FAQ</h2>
        <p>
          Still can&#39;t find an answer to your question? Feel free to ask us anything at <Link passHref href='mailto:biohackucr@gmail.com'><span className='font-semibold text-accent-primary hover:underline cursor-pointer'>biohackucr@gmail.com</span></Link>.
        </p>
        <FaqGrid />
      </div>
    </section>
  )
}