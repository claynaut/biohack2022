import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { getSession } from 'next-auth/react'

export default async function queryGroups(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })
  const db = (await clientPromise).db(process.env.MONGODB_DB)
  
  if (session && session.user.qualified === 'yeah' && session.user.gid !== '') {
    const groups = await db.collection('groups').find().toArray()
    
    res.status(200).json({ groups })
  }
  else {
    res.status(401).json({})
  }
}