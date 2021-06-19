import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";
//don't mutate state (ex)store.getState.push ~~) just return new state only!!

//action is usually written over reducer 
const addTodo = text =>{
	return{
		type : ADD,
		todoText : text
	}
}
const deleteTodo = (id) =>{
	return{
		type : DELETE,
		id
	}
}

const reducer = (state = [], action) =>{
	switch(action.type){
		case ADD:
		  //state.push(action.todoText); <- mutation
		  return [{text:action.todoText, id : Date.now()}, ...state];
		case DELETE:
		  return state.filter(toDo => toDo.id !== action.id); //filter return new!! array that pass test
		default:
		return state;
	}
}

const store = createStore(reducer);

const paintTodos = () =>{
	const todos = store.getState();

	ul.innerHTML = ""; //clear ul
	todos.forEach(todo => {
			const li = document.createElement("li");
			const btn = document.createElement("button");
			btn.innerText = "Del";
			btn.addEventListener("click", dispatchDeleteTodo);
		  li.innerText = todo.text;
			li.id = todo.id;
			li.appendChild(btn);
		  ul.appendChild(li);
	})
}

store.subscribe(paintTodos);


const dispatchAddTodo = text => {
	store.dispatch(addTodo(text));
}

const dispatchDeleteTodo = e => {
	const id = parseInt(e.target.parentNode.id); //data from html is string so turn it to integer
	console.log(id);
	store.dispatch(deleteTodo(id));
}

const handleInsert = (e) =>{
	e.preventDefault();
	dispatchAddTodo(input.value);
	input.value = "";
	input.focus();
}	
form.addEventListener("submit", handleInsert);
