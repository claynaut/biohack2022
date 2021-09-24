export default function Nav() {
  return (
    <div className="fixed flex justify-center w-full bg-gray-200">
      <div className="flex justify-between items-center w-full max-w-5xl mx-4 text-lg font-semibold">
        <div className="py-4">
          BIO<b>HACK</b>
        </div>
        <div className="flex gap-6">
          <div className="py-4 border-b-4 hover:border-black cursor-pointer">
            About
          </div>
          <div className="py-4 border-b-4 hover:border-black cursor-pointer">
            Winners
          </div>
          <div className="py-4 border-b-4 hover:border-black cursor-pointer">
            Volunteer
          </div>
          <div className="py-4 border-b-4 hover:border-black cursor-pointer">
            Sponsors
          </div>
          <div className="py-4 border-b-4 hover:border-black cursor-pointer">
            FAQ
          </div>
        </div>
        <div>
          <button className="px-4 py-1 bg-gray-400 rounded font-semibold">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}