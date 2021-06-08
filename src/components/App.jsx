import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import DetailNote from "./Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const notes = useSelector((state) => state.note.notes);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            {notes.map((note) => (
              <Note
                id={note.id}
                key={note.id}
                title={note.title}
                content={note.content}
              // date={note.date}
              />
            ))}
          </Route>
          <Route exact path="/create">
            <CreateNote />
          </Route>
          <Route exact path="/detail">
            <DetailNote />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
