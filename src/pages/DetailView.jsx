import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'
import crewIMg from '../components/crewmate.svg'

const DetailView = () => {
    const { id } = useParams()
    const [crewmate, setCrewmate] = useState(null)

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from('crewmate')
                .select()
                .eq('id', id)
                .single()
            if (data) setCrewmate(data)
        }
        fetchCrewmate()
    }, [id])

    if (!crewmate) return <p style={{ color: '#c9d8f0', textAlign: 'center', marginTop: '80px' }}>Loading...</p>

    return (
        <div>
        <div className = 'navbar'>
                <Link to="/" className='heading'>
                    <h1>Crewmate</h1>
                </Link>
                <div className='navbuttons'>
                    <Link to='/'>
                        <button className='submit-btn'>Back to Base</button>
                    </Link>
                    <Link to="/crew">
                        <button className="submit-btn">View Crew</button>
                    </Link>
                    <Link to="/create">
                        <button className="submit-btn">+ New Crewmate</button>
                    </Link>
                </div>
            </div>
        <div className="detail-container" style={{ '--crewmate-color': crewmate.color }}>

            <div className="detail-card">
                <div className="detail-header">
                    <img className="detail-img" src={crewIMg} alt="crewmate" />
                    <h1 className="detail-name">{crewmate.name}</h1>
                </div>

                <div className="detail-stats">
                    <div className="detail-stat">
                        <span className="stat-label">Speed</span>
                        <span className="stat-value">{crewmate.speed} mph</span>
                    </div>
                    <div className="detail-stat">
                        <span className="stat-label">Color</span>
                        <span className="stat-value" style={{ color: ['white','yellow'].includes(crewmate.color) ? '#aaa' : crewmate.color }}>
                            ● {crewmate.color}
                        </span>
                    </div>
                    <div className="detail-stat">
                        <span className="stat-label">ID</span>
                        <span className="stat-value">#{crewmate.id}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DetailView