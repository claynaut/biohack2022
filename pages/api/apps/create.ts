import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
import { getSession } from 'next-auth/client'

export default async function CreateCheckIn(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session) {
    const { db } = await connectToDatabase();
    const {
      user: [ 
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
        resume,
        first_time,
        github,
        linkedin,
        portfolio,
        project_story,
        additional_info,
        goal,
        source,
        tool_experience,
        id 
      ]
    } = req.body;
    
    await db.collection('checkins').insertOne({
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
      resume: resume,
      github: github,
      linkedin: linkedin,
      portfolio: portfolio,
      project_story: project_story,
      additional_info: additional_info,
      goal: goal,
      source: source,
      tool_experience: tool_experience,
      userId: id,
      qualified: '',
      groupId: '',
      createdAt: new Date()
    });
  
    res.status(200).end();
  }
  else {
    res.status(401).end();
  }
}