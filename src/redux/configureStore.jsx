import { combineReducers, createStore } from "redux";
import noteReducer from "./reducer";

const reducer = combineReducers({
  note: noteReducer
});

const store = createStore(reducer);

export default store;
