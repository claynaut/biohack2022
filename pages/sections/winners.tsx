import { WinnerGrid } from '@/components/Winners'

export default function Winners() {
  return (
    <section className='flex w-full min-h-[60rem] items-center'>
      <div>
        <h2>Past Winners</h2>
        <WinnerGrid />
      </div>
    </section>
  )
}