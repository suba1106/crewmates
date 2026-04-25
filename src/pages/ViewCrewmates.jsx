import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { supabase } from '../client'

const ViewCrewmates = () => {
    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data } = await supabase
                .from('crewmate')
                .select()
                .order('created_at', { ascending: true })
            if (data) setCrewmates(data)
        }
        fetchCrewmates()
    }, [])

    return (
        <div>
            <nav style={{ padding: '20px', textAlign: 'center' }}>
                <Link to="/create">
                    <button className="submit-btn">+ New Crewmate</button>
                </Link>
            </nav>
            <div className="ViewCrewmates" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
                {crewmates.length > 0
                    ? crewmates.map((crewmate) =>
                        <Card
                            key={crewmate.id}
                            id={crewmate.id}
                            name={crewmate.name}
                            speed={crewmate.speed}
                            color={crewmate.color}
                        />
                    )
                    : <h2>You Have Not Created Any Crewmates Yet 😞</h2>
                }
            </div>
        </div>
    )
}

export default ViewCrewmates