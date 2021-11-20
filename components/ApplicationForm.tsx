import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import axios from 'axios'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import router from 'next/router'
import { Input, TextArea, Select, Checkbox, Radio } from '@/components/Form'

export default function ApplicationForm() {
  const { register, handleSubmit, control } = useForm()
  const { errors, isSubmitSuccessful } = useFormState({ control })
  const genders = [
    'Male',
    'Female',
    'Nonbinary',
    'Other',
    'Prefer not to say',
  ]
  const ethnicities = [
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Hispanic or Latino',
    'Native Hawaiian or Other Pacific Islander',
    'White',
    'Other',
    'Prefer not to say',
  ]
  const grades = [
    '1st Year Undergraduate',
    '2nd Year Undergraduate',
    '3rd Year Undergraduate',
    '4th Year Undergraduate',
    '5th+ Year Undergraduate',
    'Graduate',
    'Other',
  ]
  const majors = [
    'Bioengineering',
    'Chemical Engineering',
    'Computer Engineering',
    'Computer Science',
    'C.S. w/ Business Applications',
    'Electric Engineering',
    'Environmental Engineering',
    'Materials Science & Engineering',
    'Mechanical Engineering',
    'Other',
  ]
  const graduated = [
    'Yes',
    'No',
  ]
  const hackerExperience = [
    'Yes',
    'No',
  ]
  const sources = [
    'University',
    'Facebook',
    'Instagram',
    'LinkedIn',
    'Slack',
    'Discord',
    'Search engine',
    'Other',
  ]
  const tools = [
    'Discord',
    'Hopin',
  ]

  const onSubmit = data => {
    const {
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
      // resume,
      github,
      linkedin,
      portfolio,
      project_story,
      additional_info,
      goal,
      source,
      tool_experience
    } = data
    
    const [year, month, day] = graduation_date.split('-')
    let criteria_met = true

    // determine if criteria to participate is met
    if (grade === 'Graduate')
      criteria_met = false
    if (parseInt(year) < 2022)
      criteria_met = false
    else if (parseInt(year) === 2022)
      if (parseInt(month) < 4)
        criteria_met = false
      else if (parseInt(month) === 5 && parseInt(day) <= 7)
        criteria_met = false
    
    axios.post('/api/apps/create', {
      first_name,
      last_name,
      phone_number,
      gender,
      ethnicity,
      school,
      grade,
      major,
      graduation_date,
      // resume,
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
    })
    .then(() => {
      toast.success('Successfully submitted your application!', {
        id: 'applicationFilledSuccess',
      })
      router.reload()
    })
  }

  const triggerErrorNotification = () => {
    if (Object.keys(errors).length > 0) {
      toast.error('Please fill out all required fields.', {
        id: 'checkinMissingFieldsError',
      })
    }
  }

  return (
    <form 
      className='flex flex-col gap-1.5 w-full sm:max-w-md self-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className='font-semibold text-xl'>
        Personal Information
      </h2>
      <Input
        type='text'
        label='First Name'
        variable='first_name'
        register={register}
        errors={errors}
        required
      />
      <Input
        type='text'
        label='Last Name'
        variable='last_name'
        register={register}
        errors={errors}
        required
      />
      <Input
        type='text'
        label='Phone Number'
        variable='phone_number'
        register={register}
        errors={errors}
        required={false}
      />
      <h2 className='mt-4 font-semibold text-xl'>
        Demographic Survey
      </h2>
      <Select
        label='Gender'
        variable='gender'
        register={register}
        errors={errors}
        options={genders}
        required
      />
      <Select
        label='Ethnicity'
        variable='ethnicity'
        register={register}
        errors={errors}
        options={ethnicities}
        required
      />
      <Input
        type='text'
        label='School'
        variable='school'
        register={register}
        errors={errors}
        required
      />
      <Select
        label='Year'
        variable='grade'
        register={register}
        errors={errors}
        options={grades}
        required
      />
      <Select
        label='Major'
        variable='major'
        register={register}
        errors={errors}
        options={majors}
        required
      />
      <Input
        type='date'
        label='Graduation Date'
        variable='graduation_date'
        register={register}
        errors={errors}
        required
      />
      <Radio
        label='Is this your first time hacking?'
        variable='first_time'
        options={hackerExperience}
        register={register}
        errors={errors}
        required
      />
      <h2 className='mt-4 font-semibold text-xl'>
        Hacker App
      </h2>
      <Input
        type='file'
        label='Resume'
        variable='resume'
        register={register}
        errors={errors}
        required
      />
      <Input
        type='text'
        label='Github Profile'
        variable='github'
        register={register}
        errors={errors}
        required={false}
      />
      <Input
        type='text'
        label='Linkedin Profile'
        variable='linkedin'
        register={register}
        errors={errors}
        required={false}
      />
      <Input
        type='text'
        label='Personal Website'
        variable='portfolio'
        register={register}
        errors={errors}
        required={false}
      />
      <TextArea
        label="Tell us about a project you're proud of!"
        variable='project_story'
        register={register}
        errors={errors}
        required
      />
      <TextArea
        label="Anything you'd like to add?"
        variable='additional_info'
        register={register}
        errors={errors}
        required={false}
      />
      <h2 className='mt-4 font-semibold text-xl'>
        Feedback Survey
      </h2>
      <TextArea
        label='What do you want to learn from BioHack?'
        variable='goal'
        register={register}
        errors={errors}
        required={false}
      />
      <Radio
        label='How did you hear about BioHack?'
        variable='source'
        options={sources}
        register={register}
        errors={errors}
        required
      />
      <Checkbox
        label='Which of these do you have experience using?'
        variable='tool_experience'
        options={tools}
        register={register}
      />
      <motion.button
        whileHover={{ scale: 1.03}} 
        whileTap={{ scale: 0.995 }}
        type='submit'
        className='w-full mt-6 py-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white'
        onClick={() => triggerErrorNotification()}
      >
        Submit
      </motion.button>
    </form>
  )
}