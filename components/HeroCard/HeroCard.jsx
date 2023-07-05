/* eslint-disable react/prop-types */
import './HeroCard.css'

const HeroCard = ({ heading, text, image }) => {
  return (
    <div className="herocard">
      <h2>{heading}</h2>
      <p className='text-underline'>{text}</p>
      <div style={{ backgroundImage: `url(${image})` }} className='herocard__image' />
    </div>
  )
}

export default HeroCard