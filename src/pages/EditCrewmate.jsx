import { useState } from 'react'
import './CreateCrewmate.css'
import { supabase } from '../client'

const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "white", "black", "brown", "cyan", "lime"]

const CreateCrewmate = () => {

    const {id} = useParams()
    const [Crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" })

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from('Crewmmates')
                .select()
                .eq('id', id)
                .single()
            if (data) setCrewmate(data)
        }
        fetchCrewmate()
    }, [id])

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmmates')
            .insert({ name: Crewmate.name, speed: Crewmate.speed, color: Crewmate.color })
            .select();

        window.location = "/";
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmmates')
            .delete()
            .eq('id', id); 

        window.location = "/";
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setCrewmate((prev) => ({ ...prev, [name]: value }))
    }

    const handleColorSelect = (color) => {
        setCrewmate((prev) => ({ ...prev, color }))
    }

    return (
        <div className="create-container">
            <h1 className="create-title">Edit Crewmate</h1>
            <form className="create-form">

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter crewmate name" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="speed">Speed (mph)</label>
                    <input type="number" id="speed" name="speed" placeholder="e.g. 120" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Color</label>
                    <div className="color-grid">
                        {COLORS.map((color) => (
                            <button
                                key={color}
                                type="button"
                                className={`color-swatch ${Crewmate.color === color ? 'selected' : ''}`}
                                style={{ '--swatch-color': color }}
                                onClick={() => handleColorSelect(color)}
                                title={color}
                            >
                                {Crewmate.color === color && (
                                    <span className="checkmark">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                    {Crewmate.color && (
                        <p className="color-label">Selected: <span style={{ color: Crewmate.color === 'white' || Crewmate.color === 'yellow' ? '#aaa' : Crewmate.color }}>{Crewmate.color}</span></p>
                    )}
                </div>

                <button className="update-btn" onClick={updateCrewmate}>Update Crewmate</button>
                <button className='delete-btn' onClick={deleteCrewmate}>Delete Crewmate</button>
            </form>
        </div>
    )
}

export default CreateCrewmate