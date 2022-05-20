import { UseFormRegister, FieldValues, UseFormWatch } from 'react-hook-form'
import { Input, Select, Radio } from '@/components/Form'
import { states } from './options'

interface Props {
  register: UseFormRegister<FieldValues>
  errors: {
    [x: string]: any
  }
  setFileUploaded?: (arg0: boolean) => void
  watch: UseFormWatch<FieldValues>
}

interface GroupProps {
  title: string
  subtitle?: string
  children: React.ReactNode | React.ReactNode[]
}

const Group = ({ title, subtitle, children }: GroupProps) => (
  <div className='flex flex-col gap-3 p-6 bg-text-dark rounded shadow-lg'>
    <h2 className='font-semibold text-xl'>{title}</h2>
    { subtitle && <p className='m-0 text-base'>{subtitle}</p> }
    {children}
  </div>
)

export function Confirmation({ register, errors, watch }: Props) {
  const participating = watch('participating')
  const lives_in_US = watch('lives_in_US')

  return (
    <>
      <Group title='Confirm Details'>
        <Radio
            label='Are you still participating in BioHack 2022?'
            variable='participating'
            options={['Yes', 'No']}
            register={register}
            errors={errors}
            required
          />
        { participating === 'Yes' &&
          <Radio
            label='Do you live in the U.S.?'
            subtext='This is used only for shipping purposes. We will only be able to ship merchandise and/or prizes those who live within the U.S.'
            variable='lives_in_US'
            options={['Yes', 'No']}
            register={register}
            errors={errors}
            required
          />
        }
      </Group>
      { participating === 'Yes' && lives_in_US === 'Yes' &&
        <Group title='Address' subtitle='Please input the best address to ship merchandise and/or prizes to you.'>
          <Input
            type='text'
            label='Street Address'
            variable='address_line_1'
            register={register}
            errors={errors}
            required
          />
          <Input
            type='text'
            label='Apartment, Suite, etc.'
            variable='address_line_2'
            register={register}
            errors={errors}
            required={Boolean(false)}
          />
          <div className='grid sm:grid-cols-7 gap-3'>
            <span className='md:col-span-3'>
              <Input
                type='text'
                label='City'
                variable='city'
                register={register}
                errors={errors}
                required
              />
            </span>
            <span className='md:col-span-2'>
              <Select
                label='State'
                variable='state'
                register={register}
                errors={errors}
                options={states}
                required
              />
            </span>
            <span className='md:col-span-2'>
              <Input
                type='text'
                label='Zip/Postal Code'
                variable='zipcode'
                register={register}
                errors={errors}
                required
              />
            </span>
          </div>
        </Group>
      }
    </>
  )
}
