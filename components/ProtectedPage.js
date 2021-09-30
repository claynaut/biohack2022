import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Layout from './Layout'

export default function ProtectedPage({ requiredSignin, requiredCheckedin, requiredQualified, children }) {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && !session && requiredSignin) {
      router.push('/')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInCheckInError',
      })
    }
  }, [loading, session, router])

  if (loading || (!session && requiredSignin)) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )
  }

  return (
    <>
      {children}
    </>
  )
}