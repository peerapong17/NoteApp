import 'date-fns';
import Button from '@material-ui/core/Button';
import './createnote.css'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

function CreateNote({ onChange, onClick, data, onDateChange }) {
    return (
        <div className='form-container'>
            <form>
                <input onChange={onChange} name="title" placeholder="Title" value={data.title} autoComplete="off" autoFocus />
                <textarea onChange={onChange}
                    value={data.content}
                    name="content"
                    placeholder="Take a note..."
                    rows={4} />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        name='date'
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={data.date}
                        onChange={onDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button variant="contained" size='large' onClick={onClick} color="primary">
                    Add
                </Button>
            </form>
        </div>
    );
}

export default CreateNote;
