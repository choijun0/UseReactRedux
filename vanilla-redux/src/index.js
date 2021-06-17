import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText=0;

const ADD = "ADD";
const MINUS = "MINUS"


//store is just space of data
// what reducer returns is a data of store
//count = 0 is just initial value, it mean currentValue in redux
//### reducer ###
const countModifier = (count = 0, action) => {
	 //whatever it returns become a data(state) of store count is just current value at all
	switch(action.type){
		case "ADD":
		return count + 1;
		case "MINUS":
		return count - 1;
		default:
		return count;
	}
}

//only reducer who given as args to createStore can modify data called reducer normally
//### createModifier ###
const countStore = createStore(countModifier);  //createStore(reducer, initialValue of state)

const onChange = () => {
	number.innerText = countStore.getState();
}

//### subscribe ###
countStore.subscribe(onChange); //it allows me to listen change in data(state) then call callback function granted (ex)onChange)

//##dispatch### 
//I can grant reducer to action by using disaptch function
add.addEventListener("click", ()=>{
	countStore.dispatch({type : ADD}); //action need to be object
})
minus.addEventListener("click", ()=>{
	countStore.dispatch({type : MINUS});
})


