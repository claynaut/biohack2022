import { 
  FaRegEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="flex justify-center w-full py-12 bg-gray-200">
      <div className="flex justify-between items-center w-full max-w-5xl mx-4 text-lg font-semibold">
        <div>
          Made with ❤ by the BioHack Team.
        </div>
        <div className="flex gap-2 text-2xl">
          <FaRegEnvelope/>
          <FaFacebookSquare/>
          <FaInstagram/>
          <FaLinkedin/>
        </div>
      </div>
    </footer>
  )
}