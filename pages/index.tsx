import React from 'react'
import Head from 'next/head'
import { Element } from 'react-scroll'

import Page from '@/components/Page'
import Landing from '@/sections/landing'
import About from '@/sections/about'
import Winners from '@/sections/winners'
import Volunteer from '@/sections/volunteer'
import Sponsors from '@/sections/sponsors'
import Faq from '@/sections/faq'
import Team from '@/sections/team'

export default function Home() {
  return (
    <Page>
      <Element name='Home' className='flex justify-center w-full'>
        <Landing/>
      </Element>
      <Element name='About' className='flex justify-center w-full'>
        <About/>
      </Element>
      <Element name='Winners' className='flex justify-center w-full'>
        <Winners/>
      </Element>
      <Element name='Volunteer' className='flex justify-center w-full'>
        <Volunteer/>
      </Element>
      <Element name='Sponsors' className='flex justify-center w-full'>
        <Sponsors/>
      </Element>
      <Element name='Faq' className='flex justify-center w-full'>
        <Faq/>
      </Element>
      <Element name='Team' className='flex justify-center w-full'>
        <Team/>
      </Element>
    </Page>
  )
}