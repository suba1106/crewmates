import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

const ViewCrewmates = (props) => {

    const [Crewmate, setCrewmates] = useState([])

    useEffect(() => {
        setPosts(props.data)
        const fetchCrewmates = async () => {
            const {data} = await supabase
                .from('Crewmmates')
                .select()
                .order('created_at', { ascending: true })

            setCrewmates(data)
        }
        fetchCrewmates();
    }, [props])
    
    return (
        <div className="ViewCrewmates">
            {
                Crewmate ?
                [...Crewmate]
                .sort((a, b) => a.id - b.id)
                .map((Crewmate, index) => 
                    <Card
                        id={post.id} 
                        name={post.name}
                        speed={post.speed}
                        color={post.color}
                    />
                ) : <h2>{'You Have Not Created Any Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ViewCrewmates