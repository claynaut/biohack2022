export default function Layout({ children }) {
  return (
    <main className="flex flex-col flex-grow content-center mx-4">
      {children}
    </main>
  )
}