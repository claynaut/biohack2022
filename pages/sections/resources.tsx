import { useSession } from 'next-auth/react'
import { ButtonLink } from '@/components/ButtonLink'

export default function Resources() {
  const { data: session, status } = useSession()

  return (
    <section className='flex flex-col w-full h-full my-12 lg:my-0 mb-24 max-w-[60rem] justify-center items-center'>
      <h2 className='mb-16'>Resources</h2>
      <div className='flex flex-col gap-4 w-full'>
        <ButtonLink
          primary
          link='https://biohack-2022-15547.devpost.com'
          label='Devpost'
          external
        />
        <ButtonLink
          link='https://github.com/BioHack-UCR/BioHack-Resources/blob/main/README.md'
          label='GitHub'
          external
        />
        { status === 'authenticated' 
          && session.user.uid
          && session.user.qualified === 'yes' &&
          <ButtonLink
            label='Discord'
            link={process.env.discord}
            external
          />
        }
      </div>
    </section>
  )
}
