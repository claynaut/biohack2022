import Image from 'next/image'
import { motion } from 'framer-motion'

export const TeamProfile = ({ link, image, name, role }) => (
  <div className='flex flex-col w-full max-w-[8rem] sm:max-w-[12rem] items-center'>
    <motion.span whileHover={{ y: -4 }} className='cursor-pointer'>
      <a target='_blank' rel='noreferrer noopener' href={link}>
        { image ?
            <div className='flex border-2 border-text-dark rounded-full shadow-md w-full'>
              <Image
                src={image}
                width={180}
                height={180}
                objectFit='contain'
                priority={true}
                quality={100}
                className='rounded-full'
              />
            </div>
          :
            <div 
              className='w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] bg-text-dark rounded-full'
            />
        }
      </a>
    </motion.span>
    <p className='mb-0 mt-2 w-max font-bold text-sm sm:text-base'>{name}</p>
    <p className='mt-0 leading-4 text-sm text-center'>{role}</p>
  </div>
)

const staff = [
  {
    link: 'https://www.linkedin.com/in/aneesh-sharma/',
    image: '/team/aneesh.jpg',
    name: 'Aneesh Sharma',
    role: 'Director',
  },
  {
    link: '/',
    image: '/team/jimmy.jpg',
    name: 'Jimmy Ho',
    role: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/kevin-ho-a920491b4',
    image: '/team/kevin.jpg',
    name: 'Kevin Ho',
    role: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/shruti-jawale-294566195/',
    image: '/team/shruti.jpg',
    name: 'Shruti Jawale',
    role: 'Sponsorship Lead',
  },
  {
    link: 'https://www.linkedin.com/in/evelyn-aguirre-vargas-346922205/',
    image: '/team/evelyn.jpg',
    name: 'Evelyn Aguirre Vargas',
    role: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/natasha-tbrinkley/',
    image: '/team/natasha.jpg',
    name: 'Natasha Brinkley',
    role: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/jspescasio/',
    image: '/team/js.jpg',
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