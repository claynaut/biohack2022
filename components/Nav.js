import { Link as NavLink } from 'react-scroll'

export default function Nav() {
  return (
    <div className="fixed flex justify-center w-full bg-gray-200">
      <div className="flex justify-between items-center w-full max-w-5xl mx-4 text-lg font-semibold">
        <NavLink 
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="my-4 cursor-pointer"
        >
          BIO<b>HACK</b>
        </NavLink>
        <div className="flex gap-6">
          <NavLink 
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer"
           >
            About
          </NavLink>
          <NavLink 
            activeClass="active"
            to="Winners"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer"
           >
            Winners
          </NavLink>
          <NavLink 
            activeClass="active"
            to="Volunteer"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer"
           >
            Volunteer
          </NavLink>
          <NavLink 
            activeClass="active"
            to="Sponsors"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer"
           >
            Sponsors
          </NavLink>
          <NavLink 
            activeClass="active"
            to="Faq"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="mt-4 pb-4 border-b-4 hover:border-accent-primary cursor-pointer"
           >
            FAQ
          </NavLink>
        </div>
        <div>
          <button className="px-4 py-1 rounded bg-accent-primary font-semibold text-white">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}