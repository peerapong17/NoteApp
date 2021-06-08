import 'date-fns';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useDispatch, useSelector } from "react-redux";
import { onClick, onChange, onRefresh } from "../redux/reducer";
import { useHistory } from "react-router-dom";

function CreateNote() {
    const title = useSelector((state) => state.note.data.title);
    const content = useSelector((state) => state.note.data.content);
    const dispatch = useDispatch();
    const history = useHistory();

    const onChangeHandler = (e) => {
        dispatch(onChange(e));
    };

    function onClickHandler(e) {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert("Please fill out the information.")
        } else {
            dispatch(onClick());
            dispatch(onRefresh());
            history.push('/')
        }
    }

    const onCancelHandler = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            history.push('/')
        } else {
            dispatch(onClick());
            dispatch(onRefresh());
            history.push('/')
        }
    };

    return (
        <div className='form-container'>
            <form>
                <input onChange={onChangeHandler} name="title" placeholder="Title" value={title} autoComplete="off" autoFocus />
                <textarea onChange={onChangeHandler}
                    value={content}
                    name="content"
                    placeholder="Take a note..."
                    rows={4} />

                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                </MuiPickersUtilsProvider> */}
            </form>
            <Button className="add-btn" variant="contained" size='large' onClick={onClickHandler} color="primary">
                Add
            </Button>
            <Button style={{ marginTop: "10px" }} className="add-btn" variant="contained" size='large' onClick={onCancelHandler} color="secondary">
                Cancel
            </Button>
        </div>
    );
}

export default CreateNote;
