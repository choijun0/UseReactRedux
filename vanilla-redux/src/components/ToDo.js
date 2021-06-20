import React from "react";
import {connect} from "react-redux";
import { actionCreators } from "../store"

const ToDo = ({text, deleteToDo}) => {
	return (
		<li> 
		{text} <button onClick={deleteToDo}>Del</button>
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