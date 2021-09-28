import Layout from '../components/Layout'
import ApplicationForm from '../components/ApplicationForm'

export default function CheckIn() {
  return (
    <Layout>
      <section className="flex flex-col w-full max-w-5xl my-32 self-center">
        <div className="w-full mb-12">
          <h1 className="font-semibold text-5xl">
            Check In
          </h1>
          <p className="mt-4 text-lg">
            Check in to confirm your application for BioHack 2022.
          </p>
        </div>
        <ApplicationForm/>
      </section>
    </Layout>
  )
}