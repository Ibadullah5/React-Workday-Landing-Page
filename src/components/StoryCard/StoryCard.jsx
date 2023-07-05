import './StoryCard.css'

/* eslint-disable react/prop-types */
const StoryCard = ({ mainImage, logoImage, title, subTitle }) => {
  return (
    <div className="storycard">
      <div className="storycard__mainimage">
        <img src={mainImage} alt='main-image' />
      </div>
      <div className="storycard__logoimage">
        <img src={logoImage} alt='logo-image' />
      </div>
      <p className="main-subtext">{title}</p>
      <p className="text-underline">{subTitle}</p>
    </div>
  )
}

export default StoryCard