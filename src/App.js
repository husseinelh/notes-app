import logo from './logo.svg';
import './App.css';
import Search from './Search';

import NoteList from './NoteList';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Toggle from './Toggle';

function App() {

  const [notes, setNotes] = useState([]);

  const [toggle, setToggle] = useState(false);

  const [searchWords, setSearchWords] = useState('');

  const addNote = (text) => {

    const newNote = {
      id: uuidv4(),
      text: text,

    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  const handleDelete = (id) => {

    const afterDelete = notes.filter((n) => n.id !== id);
    setNotes(afterDelete);
  }

  useEffect(() => {
    const loadNotes = JSON.parse(localStorage.getItem('notes-data'));
    if (loadNotes) {
      setNotes(loadNotes);
    }

  }, [])

  useEffect(() => {
    console.log(searchWords)
  }, [searchWords])

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes))
  }, [notes])

  const filteredNotes = notes.filter((note) => note.text.toLowerCase().includes(searchWords));
  return (
    <div className={toggle ? 'App' : 'dark'}>
      <Toggle toggle={toggle} setToggle={setToggle} />
      <Search textSearch={setSearchWords} />

      <NoteList notes={searchWords.length > 0 ? filteredNotes : notes} handleDelete={handleDelete} addNote={addNote} />




    </div>
  );
}

export default App;
