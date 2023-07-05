import './Footer.css'
import { workday, twitter, facebook, instagram, linkdin, youtube } from '../../assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__upperpart'>
        <h1 className='main-heading'>Ready to talk? <br />
          Get in touch with us.</h1>
        <button>Talk to Sales</button>
      </div>

      <div className='footer__line'>
        <div className="part-one" />
        <div className="part-two" />
        <div className="part-three" />
      </div>

      <div className='footer__socials'>
        <img className='footer__socials-workday-img' src={workday} alt='worlday' />
        <div className='footer__socials-logos'>
          <img src={twitter} alt='twitter' />
          <img src={linkdin} alt='linkdin' />
          <img src={facebook} alt='facebook' />
          <img src={instagram} alt='instagram' />
          <img src={youtube} alt='youtube' />
        </div>
      </div>
    </div>
  )
}

export default Footer