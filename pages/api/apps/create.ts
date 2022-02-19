import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { sendEmail } from '@/lib/sendgrid'
import { getSession } from 'next-auth/react'

export default async function createApp(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })
  const db = (await clientPromise).db(process.env.MONGODB_DB)
  
  if (session) {
    const {
      uid,
      first_name,
      last_name,
      phone_number,
      gender,
      ethnicity,
      school,
      grade,
      major,
      graduation_date,
      first_time,
      github,
      linkedin,
      portfolio,
      project_story,
      additional_info,
      goal,
      source,
      tool_experience,
      criteria_met
    } = req.body

    // send email notification to user applying
    await sendEmail({
      email: session.user.email,
      template_id: process.env.APP_CONFIRMATION_EMAIL_ID,
      name: first_name,
      members: '',
      invite_code: '',
      newcomer: ''
    })
    
    await db.collection('users').updateOne(
      {
        email: session.user.email
      },
      {
        $set: {
          uid,
          name: {
            first: first_name,
            last: last_name,
          },
          phone_number,
          gender,
          ethnicity,
          school,
          year: grade,
          major,
          graduation_date,
          first_time,
          github,
          linkedin,
          portfolio,
          project_story,
          additional_info,
          goal,
          source,
          tool_experience,
          criteria_met,
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