import ProtectedPage from '@/components/ProtectedPage'
import { CheckinForm } from '@/components/CheckinForm'

export default function CheckIn() {
  return (
    <ProtectedPage title='Check-In' restrictions={['signin', 'qualified', 'checkedIn', 'admin']}>
      <CheckinForm />
    </ProtectedPage>
  )
}
