import Heading from '../../components/Heading/Heading'
import './Testimonials.css'
import { gartner, report } from '../../assets'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <Heading text='WHY PARTNER WITH US' />
      <p className='main-heading'>
        A proven leader in finance and HR—time and time again.
      </p>
      <div className='testimonials__reports'>
        <div className='testimonials__reports-report'>
          <img src={gartner} alt='gartner-logo' />
          <p className='main-subtext'>
            A Leader in 2022 Gartner® Magic Quadrant™
            for Cloud ERP for Service-Centric Enterprises
          </p>
          <div className='testimonials__report-report-image'>
            <img src={report} alt='report-icon' />
            <p className='text-underline'>Read Report</p>
          </div>
        </div>
        <div className='testimonials__reports-report'>
          <img src={gartner} alt='gartner-logo' />
          <p className='main-subtext'>
            A Leader in 2022 Gartner® Magic Quadrant™
            for Cloud HCM Suites
          </p>
          <div className='testimonials__report-report-image'>
            <img src={report} alt='report-icon' />
            <p className='text-underline'>Read Report</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials