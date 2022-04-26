import Image from 'next/image'
import { WinnerGrid } from '@/components/Winners'

export default function Winners() {
  return (
    <section className='flex flex-col w-full h-full my-12 lg:mt-0 max-w-[64rem]'>
      <div>
        <h2 className='text-center'>Past Winners</h2>
        <p className='text-center'>
          Here are last year&apos;s winners from BioHack 2021!
        </p>
        <WinnerGrid />
      </div>
      <div className='mt-12 w-full max-w-lg self-end'>
        <Image
          src='/assets/chasing.png'
          width={884}
          height={374}
          quality={80}
          layout='responsive'
          objectFit='contain'
        />
      </div>
    </section>
  )
}