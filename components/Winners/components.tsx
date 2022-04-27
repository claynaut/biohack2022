import { motion } from 'framer-motion'
import { BiLinkExternal } from 'react-icons/bi'

const WinnerCard = ({ place, project, description, link }) => (
  <motion.div
    whileHover={{ y: -3 }} 
    className={
      'p-4 px-6 bg-card rounded-md shadow-md text-sub '
      + (place === 'Overall 1st Place' ? 'col-span-2' : 'col-span-2 sm:col-span-1')
    }
  >
    <a target='_blank' rel='noreferrer noopener' href={link}>
      <div className='flex w-full justify-center items-center gap-2 hover:underline hover:text-accent cursor-pointer'>
        <h3 className='text-center'>{project}</h3>
        <div className='text-2xl'><BiLinkExternal /></div>
      </div>
    </a>
    <h4 className='text-center'>{place}</h4>
    <p className='text-base'>{description}</p>
  </motion.div>
)

const winners = [
  {
    place: 'Overall 1st Place',
    project: 'ESPI',
    link: 'https://devpost.com/software/espi-sp-matching',
    description: 'ESPI is a virtual platform matches standardized patients (SPs) to medical students with greater accessibility, diversity, efficiency, and nuance. SP methodology is backed by the Liaison Committee on Medical Education (LCME) and the Accreditation Council for Graduate Medical Education (ACGME) as a reliable training and evaluation tool for medical education settings.'
  },
  {
    place: 'Best Beginner',
    project: 'XYZ Driver',
    link: 'https://devpost.com/software/xyz-drivers',
    description: 'A Matlab program that uses eye-tracking to evaluate if a driver\'s eyes verge off of the road. If so, the program makes a beeping noise to alert the driver to keep their eyes on the road.'
  },
  {
    place: 'Best Startup',
    project: 'Sunlight Reme-D',
    link: 'https://devpost.com/software/sunshine-reme-d',
    description: 'By including location, season, age, and skin tone parameters, the app provides each user with unique and personal advice to help them get enough sunlight and vitamin D.'
  },
  {
    place: 'Best Hardware',
    project: 'Safety Gas Mask Detector',
    link: 'https://devpost.com/software/safety-gas-mask-detector',
    description: 'The gas detector mask detects the presence of particles and/or noxious gases in the air. It does this using a gas optical density (OD) sensor and a temperature and humidity sensor.'
  },
  {
    place: 'Best Green',
    project: 'Root',
    link: 'https://devpost.com/software/root-8fj2s7',
    description: 'With every person\'s birthday we plant a tree in their name! 20% of our proceeds go to saving our planet. Friends-based approach rather than followers. Unlike many of our competitors we don\'t sell your data and we ensure maximum safety with password authentication and more!'
  },
  {
    place: 'Best Sketch',
    project: 'Hospital Help',
    link: 'https://devpost.com/software/hospital-help-vywo58',
    description: 'Hospital Help allows hospitals to enter in their current resources, capacity, and staff count to manage and view their resources. Hospitals can see the information of other hospitals that are in a close enough vicinity.'
  },
  {
    place: 'Best Google Cloud',
    project: 'Visualise',
    link: 'https://devpost.com/software/visualise',
    description: 'Visualise will read their emotions, through the AI and ML framework, and will formulate the data. The user can see a real-time live graph that\'ll show them their emotions. After the user decides to stop, a pie-chart will display what their face expressions were throughout the session.'
  },
]

export const WinnerGrid = () => (
  <div className='grid grid-cols-2 gap-4'>
    { winners.map(({ place, project, description, link }) =>
      <WinnerCard
        key={place}
        place={place}
        project={project}
        description={description}
        link={link}
      />
    )}
  </div>
)