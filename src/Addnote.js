import React, { useState } from "react";

const Addnote = ({ addNote }) => {

    const [noteText, setnoteText] = useState('');

    const handleClick = () => {
        if (noteText) {
            addNote(noteText);
        }

        setnoteText('');
    }
    return (
        <div className='addnote-container' >
            <textarea placeholder='Type to add a new note' rows='9' cols='18' value={noteText} onChange={(e) => setnoteText(e.target.value)} />
            <button className='add-btn' onClick={handleClick}>Save</button>
        </div>

    );
}

export default Addnote;