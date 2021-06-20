import React from "react";
import {connect} from "react-redux";
import { actionCreators } from "../store"
import { Link } from "react-router-dom";

//<Link to={`/${id}`}> same as <Link to={ { pathname : `/${id}`} }>

const ToDo = ({text, id, deleteToDo}) => {
	return (
		<li> 
		<Link to={`/${id}`}>
		{text} 
		</Link>
		<button onClick={deleteToDo}>Del</button>
	  </li>
	 );
}

//ownProps는 어디서 받은것이냐?? =>  <ToDo {...todo} key={todo.id} /> / {...todo}로 전달
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		deleteToDo : () => dispatch(actionCreators.deleteTodo(ownProps.id))
	}
};
export default connect(null, mapDispatchToProps)(ToDo);