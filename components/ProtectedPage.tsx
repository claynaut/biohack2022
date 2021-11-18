import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Page from '@/components/Page'

export default function ProtectedPage({ title = '', requiredSignin = false, requiredCheckedin = false, requiredQualified = false, children }) {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
      if (requiredSignin)
        toast.error('Access denied. Please sign in!', {
          id: 'notSignedInError',
        })
      else if (requiredCheckedin)
        toast.error('Access denied. Please apply!', {
          id: 'notCheckedInError',
        })
      else if (requiredQualified)
        toast.error('Access denied.', {
          id: 'notQualifiedError',
        })
    }
  }, [status, session, router])

  if (status === 'loading' || (status === 'unauthenticated' && requiredSignin || (status === 'authenticated' && (requiredCheckedin || requiredQualified)))) {
    return (
      <Page title={title}>
        <p className='self-center'>Loading...</p>
      </Page>
    )
  }

  return (
    <Page title={title}>
      {children}
    </Page>
  )
}