import { useState } from 'react'
import { BiCaretRight } from 'react-icons/bi'

function FaqAccordion({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col w-full bg-card text-sub rounded-md shadow-md'>
      <div 
        className={
          'flex px-3 py-2 items-center gap-2 cursor-pointer '
        }
        onClick={() => setOpen(!open)}
      >
        <div>
          <BiCaretRight 
            className={
              'text-2xl transform-gpu transition-transform duration-200 '
              + (open ? 'rotate-90' : 'rotate-0')
            }
          />
        </div>
        <h4 className='font-bold text-xl text-left'>{question}</h4>
      </div>
      <div 
        className={
          'px-4 transition-size overflow-hidden duration-250 '
          + (open ? 'max-h-[30rem]' : 'max-h-0')
        }
      
      >
        { typeof answer === 'string' ?
          <p className='m-0 mb-4 text-base text-left'>{answer}</p>
          :
          <div className='m-0 mb-4 text-base'>{answer}</div>
        }
      </div>
    </div>
  )
}

const questions = [
  {
    question: 'What is a hackathon?',
    answer: 'A hackathon is a weekend-long event that invites curious minds to learn and build something new. You may pick up a project of your choosing to work on during the event, to dive into a topic you\'ve been meaning to explore. You also get to meet new friends as you work in a team of up to 4 members!'
  },
  {
    question: 'Who can attend?',
    answer: 'This event is open to all college students! You do not need any prior skills or qualifications to attend.'
  },
  {
    question: 'Do I need to be a CS major or minor to participate?',
    answer: 'No! Biohack encourages any and all students who are curious about coding and health to participate in our workshops and create a project. We also host beginner friendly workshops where participants can learn new skills that they can utilize in their project submissions.'
  },
  {
    question: 'How do I register?',
    answer: 'Priority registration will open soon. Please keep an eye out on our social media platforms to hear the announcement. Once applications are open, you will be able to register through this website.'
  },
  {
    question: 'When does registration close?',
    answer: 'Registration closes on Friday, May 13 at midnight PT.'
  },
  {
    question: 'How do I know if I\'m qualified to participate?',
    answer: 'You can view your application status via the website\'s profile dropdown. We will also send an email to you once we have reviewed your application.'
  },
  {
    question: 'Does this event cost money?',
    answer: 'No! This event is completely free to all participants.'
  },
  {
    question: 'What timezone is this event in?',
    answer: 'This event takes place in Pacific Time (PT).'
  },
  {
    question: 'Will there be hardware available?',
    answer: 'Due to the virtual format of this year, we are unfortunately unable to provide hardware as we did in previous years. That said, if you do possess your own hardware/equipment, please feel free to utilize them in your own projects.'
  },
  {
    question: 'What should I bring?',
    answer: 'All you need is a device (e.g. laptop, PC, etc.) and access to the internet!'
  },
  {
    question: 'Where do I sleep?',
    answer: 'Because we are virtual this year, you are able to sleep in the luxury of your own home, unlike previous years.'
  },
  {
    question: 'What if I don\'t know how to use Discord and/or Hop In?',
    answer: 'Support for navigating Discord and Hop In will be readily available during the hackathon, but it is recommended that you familiarize yourself with these services prior to the event. You can learn more about Discord here, and Hop In here.'
  },
  {
    question: 'Am I required to enter with a team?',
    answer: 'Participating in the event within a team of at least 2 is mandatory for project submission. (Accommodations can be made should you desire to join a team during check-in.)'
  },
  {
    question: 'How many people can be in my team?',
    answer: 'The maximum number of hackers in a team is 4 participants.'
  },
  {
    question: 'Can I submit a project I already made?',
    answer: 'No! Projects determined to be pre-made or submitted at a previous hackathon will not be considered.'
  },
  {
    question: 'Do I require prior experience with computer programming to attend?',
    answer: 'Prior knowledge is not required to attend the event and go to workshops!'
  },
  {
    question: 'Do I have to create a project?',
    answer: 'Creating a project is not required to attend the event! If you would like to exclusively go to the workshops, you may do so.'
  },
  {
    question: 'What if my question is not listed?',
    answer: 'Feel free to contact us at biohack.ucr@gmail.com with any of your questions.'
  },
]

export const FaqGrid = () => (
  <div className='flex flex-wrap gap-4 max-w-3xl'>
    { questions.map(({ question, answer }) => (
      <FaqAccordion
        key={question}
        question={question}
        answer={answer}
      />
    ))}
  </div>
)