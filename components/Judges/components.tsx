import Image from 'next/image'
import { motion } from 'framer-motion'

export const JudgeProfile = ({ image, name, role }) => (
  <div className='flex flex-col w-full max-w-[8rem] md:max-w-[9rem] items-center'>
    <motion.span whileHover={{ y: -4 }}>
      <Image
        src={image}
        width={150}
        height={150}
        objectFit='contain'
        priority={true}
        quality={100}
        className='rounded-full'
      />
    </motion.span>
    <p className='mb-0 w-max font-semibold'>{name}</p>
    <p className='mt-0 leading-4 text-base text-center'>{role}</p>
  </div>
)

const judges = [
  {
    image: '/assets/judges/.jpg',
    name: 'Dr. Anna Hickerson',
    role: 'KGI Sponsor Representative',
  },
  {
    image: '/assets/judges/.jpg',
    name: 'Dr. Robert McKee',
    role: 'BIEN Professor',
  },
  {
    image: '/assets/judges/.jpg',
    name: 'Dr. Modha',
    role: 'PhD Candidate',
  },
  {
    image: '/assets/judges/.jpg',
    name: 'Dwarak Ravichandran',
    role: 'UCR Alumni',
  },
  {
    image: '/assets/judges/.jpg',
    name: 'David Paul Villafuerte',
    role: 'UCR Alumni',
  },
  {
    image: '/assets/judges/.jpg',
    name: 'Allexa Ortiz',
    role: 'UCR Senior',
  },
]

export const JudgeGrid = () => (
  <div className='flex flex-wrap justify-center gap-12 md:gap-16 md:gap-y-12'>
    { judges.map(({ image, name, role }) =>
      <JudgeProfile
        key={name}
        image={image}
        name={name}
        role={role}
      />
    )}
  </div>
)