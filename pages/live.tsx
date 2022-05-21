import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'

import ProtectedPage from '@/components/ProtectedPage'
import Landing from '@/sections/live-landing'
import Judges from './sections/judges'
import Resources from './sections/resources'
import Sponsors from '@/sections/sponsors'
import Team from '@/sections/team'
import Schedule from '@/pages/sections/schedule'
import { Border } from '@/components/Border'

export default function Live() {
  return (
    <ProtectedPage title='Live' restrictions={['signin', 'admin']}>
      <Element
        name='Home'
        className='relative flex justify-center w-full px-4 bg-primary-100'
      >
        <div className='absolute top-0 left-0 block lg:hidden w-full max-w-lg'>
          <Image
            src='/assets/foliage-left.png'
            width={740}
            height={629}
            quality={80}
            priority={Boolean(true)}
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <div className='absolute bottom-0 right-0 block 2xl:hidden w-80'>
          <Image
            src='/assets/foliage-right.png'
            width={557}
            height={563}
            quality={80}
            priority={Boolean(true)}
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <div className='absolute top-0 left-0 hidden lg:block md:w-[34rem]'>
          <Image
            src='/assets/tree-left.png'
            width={740}
            height={1017}
            quality={80}
            priority={Boolean(true)}
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <div className='absolute top-0 right-0 hidden 2xl:block w-[40rem]'>
          <Image
            src='/assets/tree-right.png'
            width={911}
            height={1281}
            quality={80}
            priority={Boolean(true)}
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <Landing/>
      </Element>
      <Border bgColor='bg-primary-100' fillColor='primary-200'/>
      {/* <Element
        name='Schedule'
        className='flex justify-center w-full bg-primary-200 text-text-dark'
      >
        <span className='flex justify-center px-4 w-full bg-pattern bg-repeat'>
          <Schedule/>
        </span>
      </Element> */}
      <Border bgColor='bg-primary-200' fillColor='primary-300'/>
      <Element
        name='Judges'
        className='flex justify-center w-full bg-primary-300 text-text-dark'
      >
        <span className='flex justify-center px-4 w-full bg-pattern bg-repeat'>
          <Judges/>
        </span>
      </Element>
      <Border type={4} bgColor='bg-primary-300' fillColor='primary-400'/>
      <Element 
        name='Resources' 
        className='flex justify-center w-full bg-primary-400 text-text'
      >
        <span className='flex justify-center px-4 w-full bg-pattern bg-repeat'>
          <Resources/>
        </span>
      </Element>
      <Border bgColor='bg-primary-400' fillColor='primary-600'/>
      {/* <Element 
        name='Sponsors' 
        className='flex justify-center w-full bg-primary-600'
      >
        <span className='flex justify-center px-4 w-full bg-pattern bg-repeat'>
          <Sponsors/>
        </span>
      </Element> */}
      <Border type={2} bgColor='bg-primary-600' fillColor='primary-300'/>
      <Element 
        name='Team' 
        className='flex justify-center w-full bg-primary-300 text-text-dark'
      >
        <span className='flex justify-center px-4 w-full bg-pattern bg-repeat'>
          <Team/>
        </span>
      </Element>
    </ProtectedPage>
  )
}