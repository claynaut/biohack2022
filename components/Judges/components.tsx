import Image from 'next/image'
import { motion } from 'framer-motion'

export const JudgeProfile = ({ image, name, role }) => (
  <div className='flex flex-col w-full max-w-[8rem] sm:max-w-[12rem] items-center'>
    <motion.span whileHover={{ y: -4 }}>
      <div className='flex border-2 border-text-dark rounded-full shadow-md w-full'>
        <Image
          src={image}
          width={150}
          height={150}
          objectFit='contain'
          priority={true}
          quality={100}
          className='rounded-full'
        />
      </div>
    </motion.span>
    <p className='mb-0 mt-2 w-max font-bold text-sm sm:text-base'>{name}</p>
    <p className='mt-0 leading-4 text-sm text-center'>{role}</p>
  </div>
)

const judges = [
  {
    image: '/judges/anna.png',
    name: 'Dr. Anna Hickerson',
    role: 'KGI Sponsor Representative',
  },
  {
    image: '/judges/brian.png',
    name: 'Brian Crites',
    role: 'CS Faculty @ UCR',
  },
  {
    image: '/judges/robert.png',
    name: 'Dr. Robert McKee',
    role: 'BIEN Faculty @ UCR',
  },
  {
    image: '/judges/modha.png',
    name: 'Dr. Modha',
    role: 'BIEN PhD Candidate @ UCR',
  },
  {
    image: '/judges/dwarak.png',
    name: 'Dwarak Ravichandran',
    role: 'BioHack 2021 Director',
  },
  {
    image: '/judges/david.png',
    name: 'David Paul Villafuerte',
    role: 'BioHack 2021 Director',
  },
  {
    image: '/judges/allexa.png',
    name: 'Allexa Ortiz',
    role: 'UCR BIEN Alumni',
  },
]

export const JudgeGrid = () => (
  <div className='flex flex-wrap justify-center gap-6'>
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