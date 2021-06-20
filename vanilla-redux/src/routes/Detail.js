import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

const Detail = ( {todo} ) => {
	return (
		<>
		  <span>{todo?.text}</span>
		  <h5>Created at: {todo?.id}</h5>
		</>
	)
}
//Array.find returns what pass test function
//params obj is equal object what useParams (react Hook) returning.
const mapStateToProps= (state, ownProps) => {
	const {match : {params : {id}}} = ownProps;
	console.log(ownProps);
	return {
		todo : state.find(toDo => toDo.id === parseInt(id))
	}
}
export default connect(mapStateToProps)(Detail);