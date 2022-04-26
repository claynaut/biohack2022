import Image from 'next/image'

export default function Landing() {
  return (
    <section className='flex w-full max-w-[64rem] h-screen min-h-[48rem] md:min-h-[60rem] my-12 lg:mt-0 items-center justify-center xs:justify-start'>
      <div className='flex flex-col lg:flex-row w-full items-center lg:gap-6'>
        <div className='w-32 md:w-40 lg:w-48'>
          <Image
            src='/logo.png'
            width={922}
            height={1063}
            quality={80}
            objectFit='contain'
          />
        </div>
        <div className='w-full text-center xs:text-left'>
          <h1 className='text-6xl md:text-7xl font-semibold'>
            BIO<b>HACK</b>
          </h1>
          <h4>
            Virtual Healthcare Hackathon
          </h4>
          <h3>
            May 14-15, 2022
          </h3>
        </div>
      </div>
    </section>
  )
}