import React, { useState } from 'react'
import './search.css'

export default function App() {
    const [state, setState] = React.useState({
        Scifi: false,
        Action: false,
        FPS: false,
        Adventure: false,
        Horror: false,
        Survival: false,
        Arcade: false,
        RTS: false
    })

    const handleToggle = ({ target }) =>
        setState(s => ({ ...s, [target.name]: !s[target.name] }))

    return (
        <div className="checkboxContainer">
            {Object.keys(state).map(key => (
                <label className="label">{key}
                    <input
                        type="checkbox"
                        onChange={handleToggle}
                        key={key}
                        name={key}
                        checked={state[key]}
                    />
                </label>
            ))}
        </div>
    )

}