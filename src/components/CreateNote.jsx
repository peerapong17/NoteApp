import React, { useState } from "react";

function CreateNote({onSaveData}) {

    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    const [show, setShow] = useState(false)


    function showTitle(){
        setShow(true)
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

    function clickEventHandler(e) {
        e.preventDefault()
        if(!input.title.trim() || !input.content.trim()){
            alert("Have no Information!!!")
        } else {
            onSaveData(input)
        }
        setInput({
            title: "",
            content: ""
        })
    }

    return (
        <div>
            <form>
                {show && <input onChange={eventHandler} name="title" placeholder="Title" value={input.title} autoComplete="off" autoFocus />}
                <textarea onClick={showTitle} onChange={eventHandler}
                    value={input.content}
                    name="content"
                    placeholder="Take a note..."
                    rows={show && 4}/>
                <button onClick={clickEventHandler}>Add</button>
            </form>
        </div>
    );
}

export default CreateNote;
