import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { HiX } from 'react-icons/hi'

export default function Modal({ show, handler, title, description, children }) {
  const [targetElement, setTargetElement] = useState(null)

  useEffect(() => {
    setTargetElement(document.querySelector('#modal'))
    if (targetElement) {
      if (show) disableBodyScroll(targetElement)
      else enableBodyScroll(targetElement)
    }
  }, [targetElement, show])

  return(
    <>
      <div
        id='modal'
        className={
          'fixed top-1/2 left-1/2 w-11/12 sm:w-[32rem] p-4 rounded bg-text-dark shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 '
          + ( show ? 'z-[1200] visible opacity-100' : 'z-0 invisible opacity-0' )
        }
      >
        <div className='flex flex-col gap-4 items-center w-full mb-8 text-lg'>
          <HiX
            className='self-end text-2xl hover:text-accent cursor-pointer'
            onClick={() => handler(false)}
          />
          <h1 className='text-center w-full max-w-md font-bold text-2xl'>
            {title}
          </h1>
          <p className='mt-0 w-full max-w-md text-center'>
            {description}
          </p>
          <div className='w-full max-w-md'>
            {children}
          </div>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full bg-[#0000003F] '
          + ( show ? 'z-[1100] visible opacity-100' : 'z-0 invisible opacity-0' )
        }
        onClick={() => handler(false)}
      />
    </>
  )
}