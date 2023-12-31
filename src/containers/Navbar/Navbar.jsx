import { useState } from 'react'
import { workday, user, search, language, hamburger, cross, arrowRight } from '../../assets'
import './navbar.css'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(prev => !prev)
  }
  return (
    <div className="navbar">

      <div className="navbar__leftside">
        <img src={workday}
          alt="workday-logo" />
        <ul className='navbar__leftside-list'>
          <li>Products</li>
          <li>Industries</li>
          <li>Customer</li>
          <li>Learn</li>
          <li>Company</li>
        </ul>
      </div>

      <div className="navbar__rightside">
        <img className='navbar__rightside-lang' src={language} alt="language" />
        <img className='navbar__rightside-user' src={user} alt="user" />
        <img className='navbar__rightside-search' src={search} alt="search" />
        <button>
          Contact Sales
        </button>
      </div>
      <img
        className='navbar__rightside-hamburger'
        onClick={handleToggle}
        src={hamburger}
        alt="hamburger" />
      {toggle && (
        <div className='navbar__mobile'>
          <img
            className='navbar__rightside-hamburger'
            onClick={handleToggle}
            src={cross}
            alt="cross" />
          <ul className='navbar__mobile-mainlist'>
            <li>
              <p>Products</p>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <p>Industries</p>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <p>Customers</p>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <p>Learn</p>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <p>Company</p>
              <img src={arrowRight} alt='arrow' />
            </li>
          </ul>

          <ul className='navbar__mobile-secondarylist'>
            <li>
              <div>
                <img className='navbar__rightside-lang' src={language} alt="language" />
                <p>United States(English)</p>
              </div>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <div>
                <img className='navbar__rightside-user' src={user} alt="user" />
                <p>Sign In</p>
              </div>
              <img src={arrowRight} alt='arrow' />
            </li>
          </ul>
          {/* <button>
            Contact Sales
          </button> */}
        </div>
      )}
    </div>
  )
}

export default Navbar