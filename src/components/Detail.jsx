import 'date-fns';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function DetailNote() {
    const title = useSelector((state) => state.note.data.title);
    const content = useSelector((state) => state.note.data.content);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className='form-container'>
            <h1>{title}</h1>
            <p>{content}</p>
            <Button className="add-btn" variant="contained" size='large' color="primary">
                Add
            </Button>
        </div>
    );
}

export default DetailNote;
