import { useRef } from "react"
import Heading from "../../components/Heading/Heading"
import StoryCard from "../../components/StoryCard/StoryCard"
import './Stories.css'
import storyData from '../../data/storyData'
import { arrowLeft, arrowRight_1 } from "../../assets"

const Stories = () => {

  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="stories">
      <Heading text="WHO SUCCEEDS WITH US" />
      <h1 className='main-heading'>Change making customers—game-changing results.</h1>
      <div className="stories__slider">
        <button>See All Stories</button>
        <div className="stories__slider-arrows">
          <div onClick={() => handleScroll('left')}>
            <img src={arrowLeft} alt="arrow-left" />
          </div>
          <div onClick={() => handleScroll('right')}>
            <img src={arrowRight_1} alt="arrow-right" />
          </div>
        </div>
      </div>

      <div className="stories__overlay" ref={scrollRef} >
        {
          storyData.map((item) => (
            <StoryCard
              mainImage={item.mainImage}
              logoImage={item.logoImage}
              title={item.title}
              subTitle={item.subTitle}
              key={item.subTitle}
            />
          ))
        }
      </div>
    </div >
  )
}

export default Stories