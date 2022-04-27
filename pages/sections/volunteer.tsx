import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Volunteer() {
  return (
    <section className='flex flex-col w-full h-full my-12 lg:mt-0 max-w-[64rem]'>
      <div>
        <h2 className='text-center'>Get Involved</h2>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-12'>
          <div className='mt-6 w-full max-w-sm'>
            <Image
              src='/assets/excavating.png'
              width={519}
              height={320}
              quality={80}
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <div>
            <p>
              Not interested in hacking, but still interested in the behind-the-scenes of BioHack? 
              Great! We&apos;d love to have you on our team. Just click a button below to sign up!
            </p>
            <div className='flex flex-col sm:flex-row justify-center lg:justify-start w-full gap-3 sm:gap-4'>
              <a target='_blank' rel='noreferrer noopener' href='https://forms.gle/4Qu8FWoQ9rRAfBvJ8'>
                <motion.button
                  whileHover={{ scale: 1.05}} 
                  whileTap={{ scale: 0.995 }}
                  className='w-full px-10 py-1.5 rounded bg-accent hover:bg-accent-dark'
                >
                  Become a Mentor
                </motion.button>
              </a>
              <a target='_blank' rel='noreferrer noopener' href='https://forms.gle/xzYWWEai9aFRWwDGA'>
                <motion.button
                  whileHover={{ scale: 1.05}} 
                  whileTap={{ scale: 0.995 }}
                  className='w-full px-10 py-1.5 rounded bg-accent hover:bg-accent-dark'
                >
                  Join a Committee
                </motion.button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}