import { useState, useRef, useEffect } from 'react';

// Create an input and button function to allow user to input name
// including a focus on the input
export default function Name(prop) {
    const [name, setName] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <label>Enter name: 
                <input
                    ref={inputRef}
                    onChange={(event) => setName(event.target.value)}
                    name="nameInput"
                    value={name}
                />
                <button
                    onClick={(event) => prop.updateName(event.target.value)}
                    value={name}> Find Nationality </button>    
            </label>
        </div>
    );
}