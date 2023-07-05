import './Footer.css'

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
        <img className='footer__socials-workday-img' src='../assets/workday.png' alt='worlday' />
        <div className='footer__socials-logos'>
          <img src='../assets/twitter.svg' alt='twitter' />
          <img src='../assets/linkdin.svg' alt='linkdin' />
          <img src='../assets/facebook.svg' alt='facebook' />
          <img src='../assets/instagram.svg' alt='instagram' />
          <img src='../assets/youtube.svg' alt='youtube' />
        </div>
      </div>
    </div>
  )
}

export default Footer