import './About.css'
import Heading from '../../components/Heading/Heading'
import { about } from '../../assets'

const About = () => {
  return (
    <div className='about'>
      <Heading text='WHAT WE’RE ABOUT' />
      <img src={about} alt='about' />
      <div className='about__services'>
        <div className='about__services-service'>
          <h2>
            We’re shaking up the world of enterprise software.</h2>
          <p className='text-underline'>Learn Our Story</p>
        </div>
        <div className='about__services-service'>
          <h2>
            We’re doing right by our employees, customers, and community.</h2>
          <p className='text-underline'>Discover Our Values</p>
        </div>
        <div className='about__services-service'>
          <h2>
            We’re building a company that’s one of the best places to work.</h2>
          <p className='text-underline'>Explore Careers</p>
        </div>
      </div>
    </div>
  )
}

export default About