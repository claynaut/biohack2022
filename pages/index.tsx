import React from 'react'
import { Element } from 'react-scroll'

import Page from '@/components/Page'
import Landing from '@/sections/landing'
import About from '@/sections/about'
import Winners from '@/sections/winners'
import Volunteer from '@/sections/volunteer'
import Sponsors from '@/sections/sponsors'
import Faq from '@/sections/faq'
import Team from '@/sections/team'
import { Border } from '@/components/Border'

export default function Home() {
  return (
    <Page>
      <Element
        name='Home'
        className='flex justify-center w-full px-4 bg-primary-100'
      >
        <Landing/>
      </Element>
      <Border bgColor='bg-primary-100' fillColor='primary-200'/>
      <Element
        name='About'
        className='flex justify-center w-full px-4 bg-primary-200 text-text-dark'
      >
        <About/>
      </Element>
      <Border type={4} bgColor='bg-primary-200' fillColor='primary-300'/>
      <Element 
        name='Winners' 
        className='flex justify-center w-full px-4 bg-primary-300 text-text-dark'
      >
        <Winners/>
      </Element>
      <Border type={2} bgColor='bg-primary-300' fillColor='primary-400'/>
      <Element 
        name='Faq' 
        className='flex justify-center w-full px-4 bg-primary-400'
      >
        <Faq/>
      </Element>
      <Border type={3} bgColor='bg-primary-400' fillColor='primary-500'/>
      <Element 
        name='Volunteer' 
        className='flex justify-center w-full px-4 bg-primary-500'
      >
        <Volunteer/>
      </Element>
      <Border bgColor='bg-primary-500' fillColor='primary-600'/>
      <Element 
        name='Sponsors' 
        className='flex justify-center w-full px-4 bg-primary-600'
      >
        <Sponsors/>
      </Element>
      <Border type={2} bgColor='bg-primary-600' fillColor='primary-300'/>
      <Element 
        name='Team' 
        className='flex justify-center w-full px-4 bg-primary-300 text-text-dark'
      >
        <Team/>
      </Element>
    </Page>
  )
}