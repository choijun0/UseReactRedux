import {createStore} from "redux";
import { writeFile } from "./text/fileInOut";
import {createAction, createReducer, configureStore, createSlice} from "@reduxjs/toolkit";

//Const
const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

/*Basic Redux Reducer
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
*/

//##CreateReducer##
//!!mutate state (don't return) or return new state!!
//if I mutate state createReducer out of ReduxToolkit transfrom it to return new state automatically
const reducer = createReducer([], {
	[addTodo] : (state, action) => {
		state.push({text:action.payload, id : Date.now()});
	},
	[deleteTodo] : (state, action) => {
		return state.filter(toDo => 
				toDo.id !== action.payload
			);
	}
});

//[ChromeExtention : ReduxDevTool]https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko
//이걸사용해서 reduxToolkit을 이용하는 사이트의 흐름을 볼 수 있다 ex> AirBnB
const store = configureStore({reducer});

store.subscribe(()=>{
	
});

export const actionCreators = {
	addTodo,
	deleteTodo
}


export default store;