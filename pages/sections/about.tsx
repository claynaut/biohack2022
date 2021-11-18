export default function About() {
  return (
    <section className='flex w-full min-h-[60rem] items-center'>
      <div>
        <h1 className='font-semibold text-5xl'>
          About Us
        </h1>
        <h2 className='my-4 font-semibold text-3xl'>
          What is BioHack?
        </h2>
        <p className='my-4 text-lg'>
          BioHack is a 24-hour bioengineering-focused, health and medicine-themed,
          hackathon at the University of California, Riverside.
        </p>
        <h2 className='my-4 font-semibold text-3xl'>
          Our Mission
        </h2>
        <p className='my-4 text-lg'>
          Our mission is to inspire new hackers to collaborate with students and
          sponsors throughout computer science and bioengineering. We encourage
          students of any background and in any field of study to participate in our
          inclusive event. We also motivate our participants to foster strong,
          professional relationships with industrial and academic sponsors.
        </p>
        <p className='my-4 text-lg'>
          By hosting BioHack within the Inland Empire, our goal is to have sponsors
          and students foster connections with engineers throughout the bioengineering
          and computer science community across California.
        </p>
      </div>
    </section>
  )
}