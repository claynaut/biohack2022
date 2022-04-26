import Image from 'next/image'
import { SponsorsGrid } from '@/components/Sponsors'

export default function Sponsors() {
  return (
    <section className='flex flex-col w-full h-full my-12 lg:mt-0 max-w-[64rem]'>
      <div className='flex items-center gap-12'>
        <div className='w-full'>
          <h2 className='md:text-left'>Sponsors</h2>
          <p className='md:text-left'>
            A huge thank you to all of our sponsors who made this hackathon possible!
          </p>
        </div>
        <div className='hidden md:block mt-12 w-full max-w-[18rem] self-end'>
          <Image
            src='/assets/treasure.png'
            width={1454}
            height={1377}
            quality={80}
            layout='responsive'
            objectFit='contain'
          />
        </div>
      </div>
      <SponsorsGrid />
    </section>
  )
}