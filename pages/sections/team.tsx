import { TeamGrid } from '@/components/Team'

export default function Team() {
  return (
    <section className='flex flex-col w-full h-full my-12 lg:mt-0 max-w-[64rem]'>
      <div>
        <h2 className='mb-12 text-center'>Our Team</h2>
        <TeamGrid />
        <div className='flex flex-col mt-6'>
          <span className='m-0 font-bold text-sm sm:text-base text-center'>
            Operations Committee
          </span>
          <span className='m-0 text-sm sm:text-base text-center'>
            Gagan M.
          </span>
        </div>
      </div>
    </section>
  )
}