import { ControlCameraOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([])
  const [editDiary, setEditDiary] = useState([])

  const [input, setInput] = useState({
    title: '',
    content: '',
    date: new Date('2020-05-24T21:11:54')
  })

  function removeNote(id) {
    setNotes(prevValues => {
      return prevValues.filter((note, index) => {
        return index !== id;
      })
    })
  }

  function eventHandler(e) {
    const { name, value } = e.target;
    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleDateChange = (date) => {
    setInput(prevValue => {
      return {
        ...prevValue,
        date: date
      }
    });
  };

  function clickEventHandler(e) {
    e.preventDefault()
    if (!input.title.trim() || !input.content.trim()) {
      alert("Have no Information!!!")
    } else {
      setNotes(prevValues => {
        return [...prevValues, input]
      })
    }
    setInput({
      title: "",
      content: "",
      date: new Date('2020-05-24T21:11:54')
    })
  }

  function editNote(id) {
    setInput(prevValues => {
      return notes.find((note, index) => {
        return index === id;
      })
    })
    setNotes(prevValues => {
      return prevValues.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateNote onChange={eventHandler} onClick={clickEventHandler} onDateChange={handleDateChange} data={input} />
      {notes.map((note, index) => <Note id={index} key={index} title={note.title} content={note.content} date={note.date} onRemove={removeNote} onEdit={editNote} />)}
      <Footer />
    </div>
  );
}

export default App;
