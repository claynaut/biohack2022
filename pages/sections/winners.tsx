import { WinnerGrid } from '@/components/Winners'

export default function Winners() {
  return (
    <section className='flex w-full my-12'>
      <div>
        <h2>Past Winners</h2>
        <p>
          Here are last year&apos;s winners from BioHack 2021!
        </p>
        <WinnerGrid />
      </div>
    </section>
  )
}