import Addnote from './Addnote';
import Note from "./Note";
import { FaTrash } from 'react-icons/fa';

const NoteList = ({ notes, handleDelete, addNote }) => {

    return (
        <div className='container'>
            {notes.map(n => (

                <div className='notes-container' key={n.id}>
                    <div className='notes-text'>
                        {n.text}
                    </div>

                    <button className='delete-btn' onClick={() => handleDelete(n.id)}
                    ><FaTrash /></button>




                </div>
            ))}
            <Addnote addNote={addNote} />
        </div>
    );
}

export default NoteList;