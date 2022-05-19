const EventBlock = ({ name, startTime, endTime, note }) => (
  <div className='flex items-center bg-card p-3 rounded-md shadow-md text-left'>
    <div className='flex flex-col w-full max-w-[8.25rem] text-primary-200 font-bold'>
      <span>
        {startTime} {endTime && <>- {endTime}</>}
      </span>
    </div>
    <div>
      <p className='m-0 text-base text-sub font-bold text-left'>{name}</p>
      { note &&
        <div className='text-sm text-primary-300 font-semibold italic'>
          {note}
        </div> 
      }
    </div>
  </div>
)

const EventStack = ({ title, subtitle, events }) => (
  <div className='flex flex-col gap-3 w-full max-w-lg lg:max-w-md'>
    <div>
      <h4 className='m-0 font-semibold text-card text-center'>{title}</h4>
      { subtitle && <p>{subtitle}</p> }
    </div>
    { events.map(({ name, startTime, endTime, note }) =>
      <EventBlock
        key={name}
        name={name}
        startTime={startTime}
        endTime={endTime}
        note={note}
      />
    )}
  </div>
)

function ScheduleGrid ({ title, schedule }) {
  const { event, workshops, activities } = schedule

  return (
    <div className='flex flex-col gap-2'>
      <h3 className='col-span-3 font-bold text-center'>{title}</h3>
      <div className='flex flex-col justify-center items-center lg:items-baseline lg:flex-row gap-4'>
        <EventStack
          title='Events'
          subtitle={null}
          events={event}
        />
        { workshops &&
          <EventStack
            title='Workshops'
            subtitle={null}
            events={workshops}
          />
        }
        <EventStack
          title='Activities'
          subtitle={null}
          events={activities}
        />
      </div>
    </div>
  )
}

const saturdaySchedule = {
  event: [
    {
      name: 'Check-In',
      startTime: '9',
      endTime: '11:30 AM',
    },
    {
      name: 'Opening Ceremony',
      startTime: '10',
      endTime: '11 AM',
    },
    {
      name: 'Hackathon Start',
      startTime: '12 PM',
    },
  ],
  workshops: [
    {
      name: 'BMES - How to BioHack',
      startTime: '12',
      endTime: '1 PM',
    },
    {
      name: 'ACM - Intro to Arduino',
      startTime: '1',
      endTime: '2:30 PM',
    },
    {
      name: 'Dr. Alva - Modeling of Biological Systems w/ MATLAB',
      startTime: '3 M',
      endTime: '4:30 PM',
    },
    {
      name: 'Dr. Freedman - Real-time Data Streaming From Smart Phone Sensors ',
      startTime: '5',
      endTime: '6:30 PM',
    },
    {
      name: 'Past Projects Panel',
      startTime: '6:30',
      endTime: '7:30 PM',
    },
  ],
  activities: [
    {
      name: 'Paint Nick Competition',
      startTime: 'All Day',
    },
    {
      name: 'Photo Competition',
      startTime: 'All Day',
    },
    {
      name: 'Games',
      startTime: '8:30',
      endTime: '10 PM',
    },
    {
      name: 'Cute Animals',
      startTime: '10',
      endTime: '11 PM',
      note: 'Bring Your Pet(s)',
    },
    {
      name: 'Art Zone',
      startTime: '11:30 PM',
      endTime: '1 AM',
    },
    {
      name: 'Music Session',
      startTime: '1',
      endTime: '1:30 AM',
    },
  ],
}

const sundaySchedule = {
  event: [
    {
      name: 'Hackathon End',
      startTime: '12 PM',
    },
    {
      name: 'Judging',
      startTime: '12',
      endTime: '4 PM',
    },
    {
      name: 'Closing Ceremony',
      startTime: '4:30',
      endTime: '5 PM',
    },
  ],
}

export const MasterSchedule = () => (
  <div className='flex flex-col gap-6 w-full text-center'>
    <ScheduleGrid title='Saturday, April 2' schedule={saturdaySchedule} />
    <ScheduleGrid title='Sunday, April 3' schedule={sundaySchedule} />
  </div>
)