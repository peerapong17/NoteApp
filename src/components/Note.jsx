import React from "react";

function Note({title, content, id, onRemove}) {

    function eliminateNote(){
        onRemove(id)
    }

    return (
        <div className = "note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={eliminateNote}>Delete</button>
        </div>

    );
}

export default Note;
