import Image from 'next/image'
import { motion } from 'framer-motion'

export const TeamProfile = ({ link, image, name, role }) => (
  <div className='flex flex-col w-full max-w-[8rem] sm:max-w-[12rem] items-center'>
    <motion.span whileHover={{ y: -4 }} className='cursor-pointer'>
      <a target='_blank' rel='noreferrer noopener' href={link}>
        {/* <Image
          src={image}
          width={150}
          height={150}
          objectFit='contain'
          priority={true}
          quality={100}
          className="rounded-full"
        /> */}
        <div className='w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] bg-white rounded-full'/>
      </a>
    </motion.span>
    <p className='mb-0 mt-2 w-max font-bold text-sm sm:text-base'>{name}</p>
    <p className='mt-0 leading-4 text-sm text-center font-mono'>{role}</p>
  </div>
)

const staff = [
  {
    link: '/',
    image: '/vercel.svg',
    name: 'Aneesh Sharma',
    role: 'Director',
  },
  {
    link: '/',
    image: 'Jimmy Ho',
    name: 'Paulian Le',
    role: 'Operations Lead',
  },
  {
    link: '/',
    image: '/vercel.svg',
    name: 'Kevin Ho',
    role: 'Operations Lead',
  },
  {
    link: '/',
    image: '/vercel.svg',
    name: 'Shruti Jawale',
    role: 'Sponsorship Lead',
  },
  {
    link: '/',
    image: '/vercel.svg',
    name: 'Evelyn Aguirre Vargas',
    role: 'Marketing Lead',
  },
  {
    link: '/',
    image: '/vercel.svg',
    name: 'Natasha Brinkley',
    role: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/jspescasio/',
    image: '/vercel.svg',
    name: 'J.S. Pescasio',
    role: 'Web Dev Lead',
  },
]

export const TeamGrid = () => (
  <div className='flex flex-wrap justify-center gap-6'>
    { staff.map(({ link, image, name, role }) =>
      <TeamProfile
        key={link}
        link={link}
        image={image}
        name={name}
        role={role}
      />
    )}
  </div>
)