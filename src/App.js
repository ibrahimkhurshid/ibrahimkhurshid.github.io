import AboutMe from './about.js'
import Education from './education.js'
import Experience from './experience.js'
import Avatar from './avatar.js'
import { PopupWidget } from 'react-calendly'
import { CALENDLY_URL } from './metadata.js'
// import OpenSourceProjects from './opensource.js'

const Main = () => {
  return (
    <div className='container-lg py-6 p-responsive text-center'>
      <Avatar />
      <AboutMe />
      <Experience />
      <Education />
      {/* <OpenSourceProjects /> */}
      {CALENDLY_URL && (
        <PopupWidget
          url={CALENDLY_URL}
          rootElement={document.getElementById('root')}
          text='Schedule a Meeting'
          textColor='#ffffff'
          color='#586069'
        />
      )}
    </div>
  )
}

export default Main
