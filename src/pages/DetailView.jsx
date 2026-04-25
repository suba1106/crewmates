import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'

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
        <div className="detail-container" style={{ '--crewmate-color': crewmate.color }}>
            <div className="detail-card">
                <div className="detail-header">
                    <img className="detail-img" src="/crewmate.svg" alt="crewmate" />
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

                <div className="detail-actions">
                    <Link to={`/EditCrewmates/${crewmate.id}`}>
                        <button className="submit-btn">Edit Crewmate</button>
                    </Link>
                    <Link to="/">
                        <button className="back-btn">← Back to Crew</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailView