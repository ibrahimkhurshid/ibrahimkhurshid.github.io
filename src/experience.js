import { EXPERIENCES } from './metadata'

const ExperinceItem = ({
  starting,
  ending,
  company,
  jobTitle,
  jobDescription,
  technologies = []
}) => {
  return (
    <li className='timeline-item'>
      <div className='timeline-info mt-1'>
        <span className='f6 text-uppercase text-bold'>
          {`${starting} - ${ending ? ending : 'Present'}`}
        </span>
      </div>
      <div className='timeline-marker'></div>
      <div className='timeline-content mt-1'>
        <p className='timeline-title h3'>
          <img
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzciIGNsYXNzPSJjc3MtZ2hvZWF3LVN1bVVwTG9nbyBlMTZ2bzhhNjAiIHZpZXdCb3g9IjAgMCA2MyA2MyIgd2lkdGg9IjM3Ij48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoLz48cGF0aCBkPSJNNTguMi41SDUuMUMyLjcuNS43IDIuNS43IDQuOXY1Mi44YzAgMi40IDIgNC40IDQuNCA0LjRoNTMuMWMyLjQgMCA0LjQtMiA0LjQtNC40VjQuOWMwLTIuNS0yLTQuNC00LjQtNC40ek0zOS41IDQ2LjhjLTUuNCA1LjQtMTQgNS42LTE5LjcuN2wtLjEtLjFjLS4zLS4zLS40LS45IDAtMS4zTDM4LjkgMjdjLjQtLjMuOS0uMyAxLjMgMCA1IDUuOCA0LjggMTQuNC0uNyAxOS44em00LTMwLjVMMjQuMyAzNS40Yy0uNC4zLS45LjMtMS4zIDAtNS01LjctNC44LTE0LjMuNi0xOS43IDUuNC01LjQgMTQtNS42IDE5LjctLjcgMCAwIC4xIDAgLjEuMS41LjMuNS45LjEgMS4yeiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=='
            className='timeline-title-logo mr-2'
          />
          <span>{company}</span>
        </p>
        <span
          className='block mt-1 mb-2 text-base font-semibold tracking-wide text-blue-700 uppercase'
          style={{ letterSpacing: '0.05em', fontWeight: 700 }}
        >
          {jobTitle}
        </span>

        <p className='f5 text-gray mb-0 mt-2'>{jobDescription}</p>

        <p className='f5 text-gray mb-0 mt-2'>
          <span style={{ fontWeight: 900 }}>Technologies:</span>
          <span className='d-sm-flex flex-wrap mt-2'>
            {technologies.map((technology, index) => (
              <span
                key={index}
                className='mr-1 mb-1 px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-medium'
                style={{ display: 'inline-block' }}
              >
                {technology}
              </span>
            ))}
          </span>
        </p>
      </div>
    </li>
  )
}

const Experience = () => {
  return (
    <div className='my-6'>
      <h2 className='mb-4'>My Experience</h2>

      <div className='d-sm-flex flex-wrap gutter-condensed mb-4'>
        <div className='col-12'>
          <ul className='timeline timeline-centered mt-4'>
            {EXPERIENCES.map((experience, index) => (
              <ExperinceItem
                key={index}
                starting={experience.starting}
                ending={experience.ending}
                company={experience.company}
                jobDescription={experience.jobDescription}
                technologies={experience.technologies}
                jobTitle={experience.jobTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Experience
