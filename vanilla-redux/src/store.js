import {createStore} from "redux";
import { writeFile } from "./text/fileInOut";
import {createAction} from "@reduxjs/toolkit";

//Const
const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = (state=[], action) => {
	switch(action.type){
		case addTodo.type:
	    return [{text:action.payload, id : Date.now()}, ...state];
		case deleteTodo.type:
		  return state.filter(toDo => 
				toDo.id !== action.payload
			);
		default:
		  return state;
	}
}

const store = createStore(reducer);

store.subscribe(()=>{
	
});

export const actionCreators = {
	addTodo,
	deleteTodo
}


export default store;