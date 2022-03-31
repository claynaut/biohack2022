import Image from 'next/image'
import { motion } from 'framer-motion'

export const TeamProfile = ({ link, image, name, role }) => (
  <div className='flex flex-col w-full max-w-[8rem] md:max-w-[9rem] items-center'>
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
        <div className='w-[140px] h-[140px] bg-white rounded-full'/>
      </a>
    </motion.span>
    <p className='mb-0 mt-2 w-max font-bold'>{name}</p>
    <p className='mt-0 leading-4 text-sm text-center font-mono'>{role}</p>
  </div>
)

const staff = [
  {
    link: 'https://www.linkedin.com/in/audrey-kim-696922168/',
    image: '/vercel.svg',
    name: 'Audrey Kim',
    role: 'Director',
  },
  {
    link: 'https://www.linkedin.com/in/rajbirjohar/',
    image: '/vercel.svg',
    name: 'Rajbir Johar',
    role: 'Director',
  },
  {
    link: 'https://www.linkedin.com/in/paulianle7/',
    image: '/vercel.svg',
    name: 'Paulian Le',
    role: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/westin-montano/',
    image: '/vercel.svg',
    name: 'Westin Montano',
    role: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/mariam-golwalla-74930949/',
    image: '/vercel.svg',
    name: 'Mariam Golwalla',
    role: 'Sponsorship Lead',
  },
  {
    link: 'https://www.linkedin.com/in/marshall-jones-0/',
    image: '/vercel.svg',
    name: 'Marshall Jones',
    role: 'Sponsorship Lead',
  },
  {
    link: 'https://www.linkedin.com/in/kimberlylac/',
    image: '/vercel.svg',
    name: 'Kimmy Lac',
    role: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/henry-zheng00/',
    image: '/vercel.svg',
    name: 'Henry Zheng',
    role: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/jspescasio/',
    image: '/vercel.svg',
    name: 'J.S. Pescasio',
    role: 'Web Dev Lead',
  },
  {
    link: 'https://www.linkedin.com/in/michellesspace/',
    image: '/vercel.svg',
    name: 'Michelle Kim',
    role: 'UX Design Lead',
  },
  {
    link: 'https://www.linkedin.com/in/abhivishwas/',
    image: '/vercel.svg',
    name: 'Abhi Vishwasrao',
    role: 'Volunteer Lead',
  },
  {
    link: 'https://www.linkedin.com/in/jakin200/',
    image: '/vercel.svg',
    name: 'Jakin Chan',
    role: 'Volunteer Lead',
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