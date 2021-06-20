import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import store from "./store"
import {Provider} from "react-redux"

//Provider hand grant to access 'store' by 'connect' function to all children
ReactDom.render(
	<Provider store={store}> 
	  <App /> 
	</Provider>, 
	document.getElementById("root")
	);