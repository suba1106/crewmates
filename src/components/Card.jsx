import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card" style={{ '--crewmate-color': props.color }}>
      <Link to={`/crewmate/${props.id}`}>
        <img className="crewmate-img" src="/crewmate.svg" alt="crewmate outline" />
      </Link>
      <h1 className='name'>{props.name}</h1>
      <h2 className='speed'>Speed: {props.speed}</h2>
      <h2 className='color'>Color: {props.color}</h2>
      <Link to={`/EditCrewmates/${props.id}`}>
        <button className='edit-button'>Edit Crewmate</button>
      </Link>
    </div>
  )
}

export default Card