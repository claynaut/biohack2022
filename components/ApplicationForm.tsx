import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

const Input = ({ type, label, variable, register, required, errors }) => (
  <div>
    <label className='font-semibold'>
      {label}
      {!required && <span className='text-gray-400'> (optional)</span>}
    </label>
    <input
      type={type}
      {...register(variable, {required})}
      className={
        'w-full px-2 rounded border-2 focus:border-accent-primary focus:outline-none '
        + (type === 'date' ? 'py-1.5 ' : 'py-1 ')
        + (errors[variable] ? 'border-red-500' : 'border-gray-300')
      }
    />
  </div>
)

const TextArea = ({ label, variable, register, required, errors }) => (
  <div>
    <label className='font-semibold'>
      {label}
      {!required && <span className='text-gray-400'> (optional)</span>}
    </label>
    <textarea
      {...register(variable, {required})}
      className={
        'w-full px-2 py-1.5 rounded border-2 focus:border-accent-primary focus:outline-none '
        + (errors[variable] ? 'border-red-500' : 'border-gray-300')
      }
    />
  </div>
)

const Select = ({ label, variable, register, required, options, errors }) => (
  <div>
    <label className='font-semibold'>{label}</label>
    <select
      {...register(variable, {required})}
      className={
        'w-full px-2 py-1.5 rounded border-2 focus:border-accent-primary focus:outline-none overflow-ellipsis '
        + (errors[variable] ? 'border-red-500' : 'border-gray-300')
      }
      
    >
      <option 
        value=''
        disabled
        selected
        hidden
      >
        Select your {label.toLowerCase()}...
      </option>
      {
        options.map((option) =>
          <option value={option}>{option}</option>
        )
      }
    </select>
  </div>
)

const Checkbox = ({ register, label, variable, options }) => (
  <div>
    <legend className='font-semibold'>{label}</legend>
    <div className='flex flex-col gap-2 pl-2'>
      {
        options.map((option) =>
          <div id={label} className='flex items-center gap-2'>
            <input
              type='checkbox'
              id={variable.toString() + option.toString()}
              value={option}
              {...register(variable)}
              className='cursor-pointer'
            />
            <label
              htmlFor={variable.toString() + option.toString()}
              className='cursor-pointer'
            >
              {option}
            </label>
          </div>
        )
      }
    </div>
  </div>
)

const Radio = ({ register, label, variable, required, options, errors }) => (
  <div>
    <legend className='font-semibold'>{label}</legend>
    <div className='flex flex-col gap-2 pl-2'>
      {
        options.map((option) =>
          <div id={label} className='flex items-center gap-2'>
            <input
              type='radio'
              id={variable.toString() + option.toString()}
              value={option}
              {...register(variable, {required})}
              className={
                'cursor-pointer ' + (errors[variable] && 'border-red-500')
              }
            />
            <label
              htmlFor={variable.toString() + option.toString()}
              className={
                'cursor-pointer ' + (errors[variable] && 'text-red-500')
              }
            >
              {option}
            </label>
          </div>
        )
      }
    </div>
  </div>
)

export default function About() {
  const { data: session } = useSession()
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
  const years = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    '5th Year',
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
      year,
      major,
      graduation_date,
      graduated,
      first_time,
      resume,
      github,
      linkedin,
      portfolio,
      project_story,
      additional_info,
      goal,
      source,
      tool_experience
    } = data
    
    console.log(data)
    axios.post('/api/apps/create', {
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
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const triggerErrorNotification = () => {
    if (!isSubmitSuccessful) {
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
        variable='year'
        register={register}
        errors={errors}
        options={years}
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
        label='Have you graduated or are you a graduate student?'
        variable='graduated'
        options={graduated}
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