import React, {useState} from "react";
import { connect } from "react-redux";

const Home = ({todos}) => {
	console.log(todos);
	const [text, setText] = useState("");
	const onChange = (e) => {
		setText(e.target.value);
	}
	const onSubmit = e =>{
		e.preventDefault(); //submit is reload the page so use preventDefault to stop the rest event(reload)
		console.log(text);
	}
	return (
		<>
		<h1>To Do</h1>
		<form onSubmit={onSubmit}>
			<input type="text" value={text} onChange={onChange}/>
			<button>Add</button>
		</form>
		<ul></ul>
		</>
	)
}

//Connect store data to props of component
//function that is handed to argument of connect has two arguments automatically
//one is state from store the other is props of components that handed from Route element
//component get state out of store attribute for Provider in index.js
const mapStateToProps = (state, props) =>{ 
	return {todos : state};  //properties of object what it returns added to property of props of component
}
export default connect(mapStateToProps)(Home);