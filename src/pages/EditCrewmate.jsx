import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'

const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "white", "black", "brown", "cyan", "lime"]

const EditCrewmate = () => {
    const { id } = useParams()
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
        event.preventDefault()
        await supabase
            .from('Crewmmates')
            .update({ name: Crewmate.name, speed: Crewmate.speed, color: Crewmate.color })
            .eq('id', id)
        window.location = "/"
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault()
        await supabase
            .from('Crewmmates')
            .delete()
            .eq('id', id)
        window.location = "/"
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
                    <input
                        type="text" id="name" name="name"
                        value={Crewmate.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="speed">Speed (mph)</label>
                    <input
                        type="number" id="speed" name="speed"
                        value={Crewmate.speed}
                        onChange={handleChange}
                    />
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
                                {Crewmate.color === color && <span className="checkmark">✓</span>}
                            </button>
                        ))}
                    </div>
                    {Crewmate.color && (
                        <p className="color-label">Selected: <span style={{ color: ['white','yellow'].includes(Crewmate.color) ? '#aaa' : Crewmate.color }}>{Crewmate.color}</span></p>
                    )}
                </div>
                <button className="submit-btn" onClick={updateCrewmate}>Update Crewmate ▸</button>
                <button className="delete-btn" onClick={deleteCrewmate}>Delete Crewmate</button>
            </form>
        </div>
    )
}

export default EditCrewmate