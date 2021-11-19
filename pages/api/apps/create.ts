import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { getSession } from 'next-auth/react'
import { nanoid } from 'nanoid'

export default async function createApp(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })
  const db = (await clientPromise).db(process.env.MONGODB_DB)
  if (session) {
    const {
      first_name,
      last_name,
      phone_number,
      gender,
      ethnicity,
      school,
      year,
      major,
      graduation_date,
      graduated,
      first_time,
      github,
      linkedin,
      portfolio,
      project_story,
      additional_info,
      goal,
      source,
      tool_experience
    } = req.body
    
    await db.collection('users').updateOne(
      {
        email: session.user.email
      },
      {
        $set: {
          first_name: first_name,
          last_name: last_name,
          phone_number: phone_number,
          gender: gender,
          ethnicity: ethnicity,
          school: school,
          year: year,
          major: major,
          graduation_date: graduation_date,
          graduated: graduated,
          first_time: first_time,
          github: github,
          linkedin: linkedin,
          portfolio: portfolio,
          project_story: project_story,
          additional_info: additional_info,
          goal: goal,
          source: source,
          tool_experience: tool_experience,
          uid: nanoid(),
          qualified: '',
          gid: '',
          admin: false,
          createdAt: new Date()
        }
      }
    )
  
    res.status(200).json({})
  }
  else {
    res.status(401).json({})
  }
}