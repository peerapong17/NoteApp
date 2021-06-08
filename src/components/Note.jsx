import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { onEdit, onDelete } from "../redux/reducer";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        text: "white"
    },
}));

function Note({ title, content, id}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    function setMonth(pickedDate) {
        if (pickedDate === 0) {
            return "January"
        } else if (pickedDate === 1) {
            return "February"
        } else if (pickedDate === 2) {
            return "March"
        } else if (pickedDate === 3) {
            return "April"
        } else if (pickedDate === 4) {
            return "May"
        } else if (pickedDate === 5) {
            return "June"
        } else if (pickedDate === 6) {
            return "July"
        } else if (pickedDate === 7) {
            return "August"
        } else if (pickedDate === 8) {
            return "September"
        } else if (pickedDate === 9) {
            return "October"
        } else if (pickedDate === 10) {
            return "November"
        } else {
            return "December"
        }
    }

    const onDeleteHandler = (e) => {
        e.preventDefault();
        dispatch(onDelete(id));
    }

    const onEditHandler = (e) => {
        dispatch(onEdit(id));
        history.push('/create')
    }

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            {/* <p>{date.getDate()} {setMonth(date.getMonth())} {date.getFullYear()}</p> */}
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={onDeleteHandler}
            >
            </Button>
            <Button
                variant="contained"
                color="inherit"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={onEditHandler}
            >
            </Button>
        </div>

    );
}

export default Note;
