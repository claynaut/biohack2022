import { MasterSchedule } from '@/components/Schedule'

export default function Schedule() {
  return (
    <section className='flex flex-col w-full h-full my-12 lg:my-0 max-w-[72rem] justify-center items-center'>
      <h2 className='text-center'>Schedule</h2>
      <p className='px-4 py-3 bg-card shadow-md rounded-md text-center italic font-bold text-primary-300'>
        Schedule is in PT (Pacific Time)
      </p>
      <MasterSchedule />
    </section>
  )
}
