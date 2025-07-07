import AboutMe from './about.js'
import Education from './education.js'
import Experience from './experience.js'
import Avatar from './avatar.js'
// import OpenSourceProjects from './opensource.js'

const Main = () => {
  return (
    <div className='container-lg py-6 p-responsive text-center'>
      <Avatar />
      <AboutMe />
      <Experience />
      <Education />
      {/* <OpenSourceProjects /> */}
    </div>
  )
}

export default Main
