import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevValues => {
      return [...prevValues, newNote]
    })
    console.log(notes)
  }

  function removeNote(id) {
    setNotes(prevValues => {
      return prevValues.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateNote onSaveData={addNote} />
      {notes.map((note, index) => <Note id={index} key={index} title={note.title} content={note.content} date={note.date} onRemove={removeNote} />)}
      <Footer />
    </div>
  );
}

export default App;
