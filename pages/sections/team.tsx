import { TeamGrid } from '@/components/Team'

export default function Team() {
  return (
    <section className='flex w-full my-12'>
      <div>
        <h2 className='mb-4'>Our Team</h2>
        <TeamGrid />
      </div>
    </section>
  )
}