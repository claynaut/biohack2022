import Layout from '../components/Layout'

export default function CheckIn() {
  return (
    <Layout>
      <section className="flex w-full max-w-5xl h-screen items-center self-center">
        <div className="w-full">
          <h1 className="font-semibold text-5xl">
            Check In
          </h1>
          <p className="mt-4 text-lg">
            Check in to confirm your application for BioHack 2022.
          </p>
        </div>
      </section>
    </Layout>
  )
}