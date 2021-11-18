import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Layout from './Layout'

export default function ProtectedPage({ requiredSignin, requiredCheckedin, requiredQualified, children }) {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && !session) {
      router.push('/')
      if (requiredSignin)
        toast.error('Access denied. Please sign in!', {
          id: 'notSignedInError',
        })
      else if (requiredCheckedin)
        toast.error('Access denied. Please check in!', {
          id: 'notCheckedInError',
        })
      else if (requiredQualified)
        toast.error('Access denied.', {
          id: 'notQualifiedError',
        })
    }
  }, [loading, session, router])

  if (loading || (!session && (requiredSignin || requiredCheckedin || requiredQualified))) {
    return (
      <Layout>
        <p className='self-center'>Loading...</p>
      </Layout>
    )
  }

  return (
    <>
      {children}
    </>
  )
}