import React, {useState} from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store"
import ToDo from "../components/ToDo"

const Home = ({toDos, addTodo}) => {
	const [text, setText] = useState("");
	const onChange = (e) => {
		setText(e.target.value);
	}
	const onSubmit = e =>{
		e.preventDefault(); //submit is reload the page so use preventDefault to stop the rest event(reload)
		addTodo(text);
		setText("");
		e.target.childNodes[0].focus();
	}
	return (
		<>
		<h1>To Do</h1>
		<form onSubmit={onSubmit}>
			<input type="text" value={text} onChange={onChange}/>
			<button>Add</button>
		</form>
		<ul>
		{toDos.map(todo =>   
			 <ToDo {...todo} key={todo.id} />
		)}
		</ul>
		</>
	)
}

const mapStateToProps = (state, props) =>{ 
	return {toDos : state}; 
}

//dispatch reponds to store.dispatch function
const mapDispatchToProps = (dispatch, props) => {
	return {addTodo : text => dispatch(actionCreators.addTodo(text))};
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);