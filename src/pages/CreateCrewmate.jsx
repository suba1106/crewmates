import { useState } from 'react'
import { supabase } from '../client'
import './CreateCrewmate.css'
import { Link } from 'react-router-dom'

const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "white", "black", "brown", "cyan", "lime"]

const CreateCrewmate = () => {

    const [Crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" })

    const createCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .insert({ name: Crewmate.name, speed: Crewmate.speed, color: Crewmate.color })
            .select();

        window.location = "/crew";
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
            <Link to="/crew">
                <button className="back-btn">← Back to Crew</button>
            </Link>
            <h1 className="create-title">Create Crewmate</h1>
            <form className="create-form">

                <div className="form-group">
                    <label htmlFor="Name">Name</label>
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

                <button className="submit-btn" onClick={createCrewmate}>Launch Crewmate</button>
            </form>
        </div>
    )
}

export default CreateCrewmate