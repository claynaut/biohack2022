import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { getSession } from 'next-auth/react'

export default async function checkin(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })
  const db = (await clientPromise).db(process.env.MONGODB_DB)
  if (session) {
    const { 
      uid,
      address
    } = req.body

    const actualAddress = (address === '') ? 'Lives Outside the U.S.' : address

    await db.collection('users').updateOne(
      { uid },
      { $set: { 
          address: actualAddress,
          checkedIn: true
        } 
      }
    )
  
    res.status(200).json({})
  }
  else {
    res.status(401).json({})
  }
}