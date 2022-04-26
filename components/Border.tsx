export const Border = ({ type, bgColor, fillColor }) => (
  <div className={'w-full ' + bgColor}>
      {
        type === 1 &&
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
          className='w-full -mb-px'
        >
          <path
            fill={'var(--' + fillColor + ')'} 
            fill-opacity='1'
            d='M0,32L360,160L720,128L1080,224L1440,128L1440,320L1080,320L720,320L360,320L0,320Z'
          />
        </svg>
      }
      {
        type === 2 &&
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
          className='w-full -mb-px'
        >
          <path
            fill={'var(--' + fillColor + ')'} 
            fill-opacity='1'
            d='M0,0L480,192L960,96L1440,192L1440,320L960,320L480,320L0,320Z'
          />
        </svg>
      }
      {
        type === 3 &&
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
          className='w-full -mb-px'
        >
          <path
            fill={'var(--' + fillColor + ')'} 
            fill-opacity='1'
            d='M0,224L480,192L960,288L1440,224L1440,320L960,320L480,320L0,320Z'
          />
        </svg>
      }
      {
        type === 4 &&
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
          className='w-full -mb-px'
        >
          <path
            fill={'var(--' + fillColor + ')'} 
            fill-opacity='1' 
            d='M0,160L360,128L720,160L1080,96L1440,224L1440,320L1080,320L720,320L360,320L0,320Z' 
          />
        </svg>
      }
  </div>
)

Border.defaultProps = {
  type: 1,
}