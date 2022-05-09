import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Page from '@/components/Page'

export default function ProtectedPage({ title = '', restrictions, children }) {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      if (restrictions.includes('signin')) {
        toast.error('Access denied. Please sign in!', {
          id: 'signinRestriction',
        })
        router.push('/')
      }
    }
    else if (status === 'authenticated') {
      if (session.user.qualified === 'no' && restrictions.includes('qualified')) {
        toast.error('Access denied.', {
          id: 'qualifiedRestriction',
        })
        router.push('/')
      }
      else if (session.user.uid && restrictions.includes('applied')) {
        // toast.error('Access denied. You already applied!', {
        //   id: 'alreadyAppliedRestriction',
        // })
        router.push('/')
      }
      else if (restrictions.includes('admin') && !session.user.admin) {
        toast.error('Access denied. Unauthorized user.', {
          id: 'adminRestriction'
        })
        router.push('/')
      }
    }
  }, [status, session, router])

  if (status === 'loading') {
    return (
      <Page title={title}>
        <p className='self-center text-text-dark'>Loading...</p>
      </Page>
    )
  }

  return (
    <Page title={title}>
      {
        status === 'authenticated' && (restrictions.includes('signin')
        || (restrictions.includes('admin') && session.user.admin)
        || (restrictions.includes('applied') && !session.user.uid)
        || (restrictions.includes('qualified') && session.user.qualified === 'yes')) && 
        <>
          {children}
        </> 
      }
    </Page>
  )
}