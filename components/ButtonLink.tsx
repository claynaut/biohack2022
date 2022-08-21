import { motion } from 'framer-motion'
import Link from 'next/link'

const Button = ({ primary, label }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.995 }}
    className={
      'flex justify-center items-center self-center w-full sm:w-72 py-1.5 rounded cursor-pointer '
      + (primary ? 'bg-accent hover:bg-accent-dark ' : 'bg-highlight-dark hover:bg-primary-200 ')
    }
  >
    {label}
  </motion.button>
)

Button.defaultProps = {
  primary: Boolean(false),
}

interface ButtonLinkProps {
  primary?: boolean
  label: string
  link: string
  external?: boolean
}

export const ButtonLink = ({ primary, label, link, external }: ButtonLinkProps) => (
  <>
    {
      external
      ?
      <a target='_blank' rel='noreferrer noopener' href={link} className='flex justify-center w-full'>
        <Button 
          primary={primary}
          label={label}
        />
      </a>
      :
      <Link passHref href={link}>
        <span className='flex justify-center w-full'>
            <Button 
              primary={primary}
              label={label}
            />
        </span>
      </Link>
    }
  </>
)

ButtonLink.defaultProps = {
  primary: Boolean(false),
  external: Boolean(false),
  skinny: Boolean(false),
  minWidth: Boolean(false),
}