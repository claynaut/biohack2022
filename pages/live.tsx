import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'

import Page from '@/components/Page'
import Landing from '@/sections/live-landing'
import Sponsors from '@/sections/sponsors'
import Team from '@/sections/team'
import { Border } from '@/components/Border'

export default function Home() {
  return (
    <Page>
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
      
      <Border bgColor='bg-primary-500' fillColor='primary-600'/>
      <Element 
        name='Sponsors' 
        className='flex justify-center w-full bg-primary-600'
      >
        <span className='flex justify-center px-4 w-full bg-pattern bg-repeat'>
          <Sponsors/>
        </span>
      </Element>
      <Border type={2} bgColor='bg-primary-600' fillColor='primary-300'/>
      <Element 
        name='Team' 
        className='flex justify-center w-full bg-primary-300 text-text-dark'
      >
        <span className='flex justify-center px-4 w-full bg-pattern bg-repeat'>
          <Team/>
        </span>
      </Element>
    </Page>
  )
}