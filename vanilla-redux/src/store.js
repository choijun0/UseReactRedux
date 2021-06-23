import {createStore} from "redux";
import { writeFile } from "./text/fileInOut";
import {createAction, createReducer, configureStore, createSlice} from "@reduxjs/toolkit";

//Const
/*
const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

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
*/
const toDos = createSlice({
	name : "toDosReducer",
	initialState : [],
	reducers : {
		add : (state, action) => {
		state.push({text:action.payload, id : Date.now()})},
		remove : (state, action) => 
		state.filter(toDo => 
				toDo.id !== action.payload
	  	)
	}
}
);

//[ChromeExtention : ReduxDevTool]https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko
//이걸사용해서 reduxToolkit을 이용하는 사이트의 흐름을 볼 수 있다 ex> AirBnB

//createSlice에 의해 서 추가된 reducer property
console.log(toDos);
/*
{name: "toDosReducer", actions: {…}, caseReducers: {…}, reducer: ƒ}
actions: {add: ƒ, remove: ƒ} *****
caseReducers: {add: ƒ, remove: ƒ}
name: "toDosReducer"
reducer: ƒ (state, action) *****
__proto__: Object
*/
const store = configureStore({reducer : toDos.reducer});

export const {add, remove} = toDos.actions;


export default store;