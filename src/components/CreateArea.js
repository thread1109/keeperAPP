import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { MdAdd } from "react-icons/md";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false); // for expanding
  const [note, setNote] = useState({     // object 
    title : "", 
    content : ""
  });

  function handleChange(event){
    const {name, value}  = event.target;  // linking with target 

    setNote(prevValue => {                  // connecting link 
        return {
            ...prevValue,
            [name] : value
        };
    });
  }


  function submitNote(event){
    props.onAdd(note);  // adding notes to array 
    event.preventDefault(); // this will prevent refresh of page ocuur after clicking button 
    setNote({           // vaapas se clear karna hai textField ko 
        title : "", 
        content : ""
    });
  }

  function expand() {
    setExpanded(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <button onClick={submitNote}>
            <MdAdd className="icon" />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
