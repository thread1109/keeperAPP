import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes , setNote] = useState([]);   // making array object 

   
  function addNote(note){          // adding current note to notes array 
    setNote(prevNote => {
      return [...prevNote , note];
    });
  }

  function deleteNote(id){        // deleting clicked note from notes array 
      return setNote(prevNote => {
        return prevNote.filter((currNote, index ) => {
          return index !== id;
        });
      });
  }

  return (
    <div>
      <Header />
      <CreateArea 
          onAdd = {addNote}
      />

      {notes.map( (currNote , index) => {
        return <Note
          id = {index}
          key = {index}
          title = {currNote.title}
          content = {currNote.content}
          onDelete={deleteNote}
        />
      })}
      {/* <Note key={1} title="Note title" content="Note content" />  static note */}
      <Footer />
    </div>
  );
}

export default App;
