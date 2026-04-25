import crewmatesImg from '../assets/crewmates.png'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home-page">
                <div className="crewmate">
                    <h1>Welcome to Crewmates</h1>
                    <p>
                        Discover your next adventure, connect with friends, and explore the
                        galaxy together.
                    </p>
            </div>
            <div className='crewmates-img-container'>
                <img src={crewmatesImg} className='crewmates-img' alt="pictures of crewmates" />
            </div>
            <Link to="/crew">
                    <button className="submit-btn">Launch Now</button>
            </Link>

        </div>
    );
};

export default HomePage;