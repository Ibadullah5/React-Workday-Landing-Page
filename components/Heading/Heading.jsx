import './Heading.css'

// eslint-disable-next-line react/prop-types
const Heading = ({ text }) => {
  return (
    <>
      <p className='text'>{text}</p>
      <div className="heading__line">
        <div className='part-one'></div>
        <div className='part-two'></div>
        <div className='part-three'></div>
      </div>
    </>
  )
}

export default Heading