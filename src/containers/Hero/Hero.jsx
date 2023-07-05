import './Hero.css'
import data from '../../data/data'
import HeroCard from '../../components/HeroCard/HeroCard'
import { hero } from '../../assets'

const Hero = () => {
  return (
    <div className='hero'>

      <div className='hero__upperpart'>
        <div className='hero__upperpart-text'>
          <h1 className='main-heading'>The buyer’s guide to finance, HR, and payroll solutions.</h1>
          <p className='main-subtext'>Learn how to choose the right system for your organization.</p>
          <button>Read Guide</button>
        </div>
        <div className='hero__upperpart-image'>
          <img src={hero} alt='hero' />
        </div>
      </div>

      <div className='hero__lowerpart'>
        {data.map((item) => (
          <HeroCard
            heading={item.heading}
            text={item.text}
            image={item.image}
            key={item.text}
          />
        ))}
      </div>


    </div>
  )
}

export default Hero