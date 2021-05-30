import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        text: "white"
    },
}));

function Note({ title, content, id, onRemove, date, onEdit}) {
    const classes = useStyles();

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

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{date.getDate()} {setMonth(date.getMonth())} {date.getFullYear()}</p>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={()=>onRemove(id)}
            >
                Delete
      </Button>
            <Button
                variant="contained"
                color="inherit"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={()=>onEdit(id)}
            >
                Edit
      </Button>
        </div>

    );
}

export default Note;
