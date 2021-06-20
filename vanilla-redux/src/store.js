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
		id : parseInt(id)
	}
}

const reducer = (state=[], action) => {
	switch(action.type){
		case ADD:
	    return [{text:action.todoText, id : Date.now()}, ...state];
		case DELETE:
		  return state.filter(toDo => 
				toDo.id !== action.id
			);
		default:
		  return state;
	}
}

export const actionCreators = {
	addTodo,
	deleteTodo
}

const store = createStore(reducer);

export default store;