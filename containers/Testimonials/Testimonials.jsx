import Heading from '../../components/Heading/Heading'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <Heading text='WHY PARTNER WITH US' />
      <p className='main-heading'>
        A proven leader in finance and HR—time and time again.
      </p>
      <div className='testimonials__reports'>
        <div className='testimonials__reports-report'>
          <img src='../assets/gartner.png' alt='gartner-logo' />
          <p className='main-subtext'>
            A Leader in 2022 Gartner® Magic Quadrant™
            for Cloud ERP for Service-Centric Enterprises
          </p>
          <div className='testimonials__report-report-image'>
            <img src='../assets/report.svg' alt='report-icon' />
            <p className='text-underline'>Read Report</p>
          </div>
        </div>
        <div className='testimonials__reports-report'>
          <img src='../assets/gartner.png' alt='gartner-logo' />
          <p className='main-subtext'>
            A Leader in 2022 Gartner® Magic Quadrant™
            for Cloud HCM Suites
          </p>
          <div className='testimonials__report-report-image'>
            <img src='../assets/report.svg' alt='report-icon' />
            <p className='text-underline'>Read Report</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials