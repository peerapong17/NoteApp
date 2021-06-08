import { v4 as uuid } from "uuid";

const ONCLICK = "ONCLICK";
const ONDELETE = "ONDELETE";
const ONCHANGE = "ONCHANGE";
const ONREFRESH = "ONREFRESH";
const ONEDIT = "ONEDIT";

export const onClick = () => ({
    type: ONCLICK
});

export const onRefresh = () => ({
    type: ONREFRESH
});

export const onChange = (e) => ({
    type: ONCHANGE,
    payload: e
});

export const onDelete = (id) => ({
    type: ONDELETE,
    payload: id
});

export const onEdit = (id) => ({
    type: ONEDIT,
    payload: id
});

const initialState = {
    data: {
        title: "",
        content: ""
    },
    notes: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ONCHANGE:
            const { name, value } = action.payload.target;

            return {
                ...state,
                data: {
                    ...state.data,
                    [name]: value
                }
            };

        case ONREFRESH:
            return {
                ...state,
                data: {
                    title: "",
                    content: ""
                }
            };

        case ONCLICK:
            state.data.id = uuid()
            return {
                ...state,
                notes: [...state.notes, state.data]
            };

        case ONEDIT:
            const editedNotes = state.notes.find((note) => {
                return note.id === action.payload;
            });
            const remainingNotes = state.notes.filter((note) => {
                return note.id !== action.payload;
            });

            return {
                ...state,
                data: {
                    title: editedNotes.title,
                    content: editedNotes.content
                },
                notes: remainingNotes
            };

        case ONDELETE:
            const deletedNotes = state.notes.filter((note) => {
                return note.id !== action.payload;
            });

            return {
                ...state,
                notes: deletedNotes
            };

        default:
            return state;
    }
};
