import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

export default function About() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  const Input = ({ label, variable, register, required}) => (
    <div>
      <label className="font-semibold">{label}</label>
      <input 
        {...register(variable, { required })}
        className="w-full px-2 py-1 rounded border-2 focus:border-accent-primary focus:outline-none"
      />
    </div>
  )
   
  return (
    <form 
      className="flex flex-col gap-2 w-full sm:max-w-xs self-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="First Name"
        variable="first_name"
        register={register}
        required
      />
      <Input
        label="Last Name"
        variable="last_name"
        register={register}
        required
      />
      <motion.button
        whileHover={{ scale: 1.03}} 
        whileTap={{ scale: 0.995 }}
        type="submit"
        className="w-full py-1 rounded bg-accent-primary hover:bg-accent-primary-dark font-semibold text-white"
      >
        Submit
      </motion.button>
    </form>
  )
}