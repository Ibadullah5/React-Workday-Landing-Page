import './WhatWeDo.css'
import Heading from '../../components/Heading/Heading'
const WhatWeDo = () => {
  return (
    <div className='whatwedo'>

      <div className='whatwedo__upperpart'>
        <div className='whatwedo__upperpart-heading'>
          <Heading text="WHAT WE DO" />
          <h1 className='main-heading'>
            We help you solve your greatest business challenges.
          </h1>
        </div>
        <img src='../assets/what-we-do.png' alt='what we do' />
      </div>

      <div className='whatwedo__middlepart'>
        <div className='whatwedo__middlepart-card'>
          <h2>Be ready for what comes next.</h2>
          <p className='main-subtext'>As your business needs change,
            you need to be able to pivot fast.
            Our adaptable architecture helps you do just that.</p>
        </div>
        <div className='whatwedo__middlepart-card'>
          <h2>Empower decisions at every level.</h2>
          <p className='main-subtext'>With one source for financial, people,
            and operational data, everyone can access
            real-time insights to make sound decisions.</p>
        </div>
        <div className='whatwedo__middlepart-card'>
          <h2>A technology foundation you can trust.</h2>
          <p className='main-subtext'>We never stop innovating. And you can
            count on us to deliver technology that
            fuels your growth and keeps your data safe.</p>
        </div>
      </div>

      <div className='whatwedo__lowerpart'>
        <img src='../assets/what-we-do-2.png' alt='what-we-do' />
        <div className='whatwedo__lowerpart-heading'>
          <h1 className='main-heading'>
            Amplify your team’s performance with AI.
          </h1>
          <p className='main-subtext'>
            Organizations that use AI to map the skills
            of their workforce will be positioned to
            identify and train their employees for
            the jobs of tomorrow. The future of work
            is here—and Workday is leading the way
            with ethical AI that puts people first.
          </p>
          <p className="text-underline">Learn More</p>
        </div>
      </div>

    </div>
  )
}

export default WhatWeDo