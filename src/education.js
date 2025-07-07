import { EDUCATION } from './github'

const EducationItem = ({ starting, ending, degree, institute, shortCode }) => {
  return (
    <li className='timeline-item'>
      <div className='timeline-info mt-1'>
        <span className='f6 text-uppercase text-bold'>{`${starting} - ${ending}`}</span>
      </div>
      <div className='timeline-marker'></div>
      <div className='timeline-content mt-1'>
        <p className='timeline-title h3'>
          <span>{shortCode}</span>
        </p>
        <p className='f5 text-gray mb-0 mt-2'>{institute}</p>
        <p className='f5 text-gray mb-0 mt-2'>
          Faculty of Computer Science and Technology
        </p>
        <p className='f5 text-gray mb-0 mt-2 text-bold'>{degree}</p>
      </div>
    </li>
  )
}

const Education = () => {
  return (
    <div className='my-6'>
      <h2 className='mb-4'>Education</h2>

      <div className='d-sm-flex flex-wrap gutter-condensed mb-4'>
        <div className='col-12'>
          <ul className='timeline timeline-centered mt-4'>
            {EDUCATION.map((education, index) => (
              <EducationItem
                key={index}
                starting={education.starting}
                ending={education.ending}
                degree={education.degree}
                institute={education.institute}
                shortCode={education.shortCode}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Education
