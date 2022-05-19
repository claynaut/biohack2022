import { JudgeGrid } from '@/components/Judges'

export default function Judges() {
  return (
    <section className='flex flex-col w-full h-full my-12 lg:mt-0 max-w-[60rem]'>
      <h2 className='mb-16 text-center'>Judges</h2>
      <JudgeGrid />
    </section>
  )
}
