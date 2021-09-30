import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

export default function About() {
  const { register, handleSubmit } = useForm()

  const Input = ({ type, label, variable, register, required, pattern }) => (
    <div>
      <label className="font-semibold">
        {label}
        {(variable === "phone_number") && <span className="text-gray-400"> (optional)</span>}
      </label>
      <input
        type={type}
        {...register(variable, { required }, { pattern })}
        className="w-full px-2 py-1 rounded border-2 border-gray-300 focus:border-accent-primary focus:outline-none"
      />
    </div>
  )

  const Select = React.forwardRef(({ onChange, onBlur, name, label, options }, ref) => (
    <div>
      <label className="font-semibold">{label}</label>
      <select
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full px-2 py-1.5 rounded border-2 border-gray-300 focus:border-accent-primary focus:outline-none overflow-ellipsis"
      >
        <option value="" disabled selected hidden>Select your {label.toLowerCase()}...</option>
        {
          options.map((option) =>
            <option value={option}>{option}</option>
          )
        }
      </select>
    </div>
  ))

  const Checkbox = ({ label, variable, options }) => (
    <div>
      <legend className="font-semibold">{label}</legend>
      <div className="flex flex-col gap-2 pl-2">
        {
          options.map((option) =>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={"checkbox" + option.toString()}
                value={option}
                {...register(variable)}
                className="cursor-pointer"
              />
              <label
                htmlFor={"checkbox" + option.toString()}
                className="cursor-pointer"
              >
                {option}
              </label>
            </div>
          )
        }
      </div>
    </div>
  )

  const Radio = ({ label, variable, options }) => (
    <div>
      <legend className="font-semibold">{label}</legend>
      <div className="flex flex-col gap-2 pl-2">
        {
          options.map((option) =>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id={"radio" + option.toString()}
                value={option}
                {...register(variable)}
                className="cursor-pointer"
              />
              <label
                htmlFor={"radio" + option.toString()}
                className="cursor-pointer"
              >
                {option}
              </label>
            </div>
          )
        }
      </div>
    </div>
  )

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
    } = data

    if (first_name === "") {
      toast.error('help')
    }
    console.log(data)
  }

  return (
    <form 
      className="flex flex-col gap-1.5 w-full sm:max-w-md self-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-semibold text-xl">
        Personal Information
      </h2>
      <Input
        type="text"
        label="First Name"
        variable="first_name"
        register={register}
      />
      <Input
        type="text"
        label="Last Name"
        variable="last_name"
        register={register}
      />
      <Input
        type="text"
        label="Phone Number"
        variable="phone_number"
        register={register}
      />
      <h2 className="mt-4 font-semibold text-xl">
        Demographic Survey
      </h2>
      <Select
        label="Gender"
        {...register("gender")}
        options={genders}
      />
      <Select
        label="Ethnicity"
        {...register("ethnicity")}
        options={ethnicities}
      />
      <Input
        type="text"
        label="School"
        variable="school"
        register={register}
      />
      <Select
        label="Year"
        {...register("year")}
        options={years}
      />
      <Select
        label="Major"
        {...register("major")}
        options={majors}
      />
      <div>
        <label className="font-semibold">
          Graduation Date
        </label>
        <input
          type="date"
          {...register("graduation_date")}
          className="w-full px-2 py-1.5 rounded border-2 border-gray-300 focus:border-accent-primary focus:outline-none"
        />
      </div>
      <Radio
        label="Have you graduated or are you a graduate student?"
        variable="graduated"
        options={graduated}
      />
      <Radio
        label="Is this your first time hacking?"
        variable="first_time"
        options={hackerExperience}
      />
      <h2 className="mt-4 font-semibold text-xl">
        Hacker App
      </h2>
      <Input
        type="file"
        label="Resume"
        variable="resume"
        register={register}
      />
      <Input
        type="text"
        label="Github Profile"
        variable="github"
        register={register}
      />
      <Input
        type="text"
        label="Linkedin Profile"
        variable="linkedin"
        register={register}
      />
      <Input
        type="text"
        label="Personal Website"
        variable="portfolio"
        register={register}
      />
      <div>
        <label className="font-semibold">
          Tell us about a project you&#39;re proud of!
        </label>
        <textarea
          {...register("project_story")}
          className="w-full px-2 py-1.5 rounded border-2 border-gray-300 focus:border-accent-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="font-semibold">
          Anything you&#39;d like to add?
          <span className="text-gray-400"> (optional)</span>
        </label>
        <textarea
          {...register("additional_info")}
          className="w-full px-2 py-1.5 rounded border-2 border-gray-300 focus:border-accent-primary focus:outline-none"
        />
      </div>
      <h2 className="mt-4 font-semibold text-xl">
        Feedback Survey
      </h2>
      <div>
        <label className="font-semibold">
          What do you want to learn from BioHack?
          <span className="text-gray-400"> (optional)</span>
        </label>
        <textarea
          {...register("goal")}
          className="w-full px-2 py-1.5 rounded border-2 border-gray-300 focus:border-accent-primary focus:outline-none"
        />
      </div>
      <Radio
        label="How did you hear about BioHack?"
        variable="source"
        options={sources}
      />
      <Checkbox
        label="Which of these do you have experience using?"
        variable="tool_experience"
        options={tools}
      />
      <motion.button
        whileHover={{ scale: 1.03}} 
        whileTap={{ scale: 0.995 }}
        type="submit"
        className="w-full mt-6 py-1.5 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white"
      >
        Submit
      </motion.button>
    </form>
  )
}