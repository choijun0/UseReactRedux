import {createStore} from "redux";

//Const
const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = text =>{
	return{
		type : ADD,
		todoText : text
	}
}
const deleteTodo = id =>{
	return{
		type : DELETE,
		id
	}
}

const reducer = (state=['cake', 'choco'], action) => {
	switch(action.type){
		case ADD:
	    return [{text:action.todoText, id : Date.now()}, ...state];;
		case DELETE:
		default:
		return state;
	}
}

const store = createStore(reducer);

export default store;