import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { options } from 'next-auth/client'

export default function About() {
  const { register, handleSubmit } = useForm()

  const Input = ({ type, label, variable, register, required, pattern }) => (
    <div>
      <label className="font-semibold">
        {label}
        {!required && <span className="text-gray-400"> (optional)</span>}
      </label>
      <input
        type={type}
        {...register(variable, { required }, { pattern })}
        className="w-full px-2 py-1 rounded border-2 focus:border-accent-primary focus:outline-none"
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
        className="w-full px-2 py-1.5 rounded border-2 focus:border-accent-primary focus:outline-none overflow-ellipsis"
      >
        {
          options.map(({ value }) =>
            <option value={value}>{value}</option>
          )
        }
      </select>
    </div>
  ))

  const years = [
    { value: '1st Year', },
    { value: '2nd Year', },
    { value: '3rd Year', },
    { value: '4th Year', },
    { value: '5th Year', },
    { value: 'Other', },
  ]

  const majors = [
    { value: 'Bioengineering', },
    { value: 'Chemical Engineering', },
    { value: 'Computer Engineering', },
    { value: 'Computer Science', },
    { value: 'C.S. w/ Business Applications', },
    { value: 'Electric Engineering', },
    { value: 'Environmental Engineering', },
    { value: 'Materials Science & Engineering', },
    { value: 'Mechanical Engineering', },
    { value: 'Other', },
  ]

  const experiences = [
    { value: 'I have created a project at a previous hackathon.', },
    { value: 'I have attended previous hackathon, but not created a project.', },
    { value: 'I have not attended a hackathon before!', },
  ]

  const sources = [
    { value: 'University', },
    { value: 'Facebook', },
    { value: 'Instagram', },
    { value: 'LinkedIn', },
    { value: 'Slack', },
    { value: 'Discord', },
    { value: 'Other', },
  ]

  const tools = [
    { value: 'Discord', },
    { value: 'Hopin', },
  ]
  
  const onSubmit = data => {
    const {
      first_name,
      last_name,
      phone_number,
      school,
      year,
      major
    } = data
    console.log(data)
  }

  return (
    <form 
      className="flex flex-col gap-1 w-full sm:max-w-md self-center"
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
        required
      />
      <Input
        type="text"
        label="Last Name"
        variable="last_name"
        register={register}
        required
      />
      <Input
        type="text"
        label="Phone Number"
        variable="phone_number"
        register={register}
      />
      <h2 className="mt-4 font-semibold text-xl">
        Education and Experience
      </h2>
      <Input
        type="text"
        label="School"
        variable="school"
        register={register}
        required
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
      <Select // bullet
        label="Hackathon Experience"
        {...register("experience")}
        options={experiences}
      />
      <h2 className="mt-4 font-semibold text-xl">
        Hacker App
      </h2>
      <Input
        type="file"
        label="Resume"
        variable="resume"
        register={register}
        required
      />
      <Input
        type="text"
        label="Github Profile"
        variable="github"
        register={register}
        required
      />
      <Input
        type="text"
        label="Linkedin Profile"
        variable="linkedin"
        register={register}
        required
      />
      <Input
        type="text"
        label="Personal Website"
        variable="portfolio"
        register={register}
        required
      />
      <div>
        <label className="font-semibold">
          Tell us about a project you&#39;re proud of!
        </label>
        <textarea
          {...register("project_story")}
          required
          className="w-full px-2 py-1 rounded border-2 focus:border-accent-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="font-semibold">
          Anything you&#39;d like to add?
          <span className="text-gray-400"> (optional)</span>
        </label>
        <textarea
          {...register("additional_info")}
          className="w-full px-2 py-1 rounded border-2 focus:border-accent-primary focus:outline-none"
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
          className="w-full px-2 py-1 rounded border-2 focus:border-accent-primary focus:outline-none"
        />
      </div>
      <Select // bullet
        label="How did you hear about BioHack?"
        {...register("source")}
        options={sources}
      />
      <Select // checkbox
        label="Which do you have experience using?"
        {...register("tool")}
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