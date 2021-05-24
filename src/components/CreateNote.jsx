import 'date-fns';
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import './createnote.css'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

function CreateNote({ onSaveData }) {

    const [input, setInput] = useState({
        title: '',
        content: '',
        date: new Date('2020-05-24T21:11:54')
    })

    const [show, setShow] = useState(false)

    function showTitle() {
        setShow(true)
    }

    const handleDateChange = (date) => {
        setInput(prevValue=>{
            return {
                ...prevValue,
                date: date
            }
        });
    };

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
        if (!input.title.trim() || !input.content.trim()) {
            alert("Have no Information!!!")
        } else {
            onSaveData(input)
        }
        setInput({
            title: "",
            content: "",
            date: new Date('2020-05-24T21:11:54')
        })
    }

    return (
        <div className='form-container'>
            <form>
                {show && <input onChange={eventHandler} name="title" placeholder="Title" value={input.title} autoComplete="off" autoFocus />}
                <textarea onClick={showTitle} onChange={eventHandler}
                    value={input.content}
                    name="content"
                    placeholder="Take a note..."
                    rows={show && 4} />

                <Button variant="contained" size='large' onClick={clickEventHandler} color="primary">
                    Add
                </Button>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        name='date'
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={input.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                </MuiPickersUtilsProvider>
            </form>
        </div>
    );
}

export default CreateNote;
