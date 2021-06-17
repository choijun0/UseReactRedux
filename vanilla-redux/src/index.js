import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//store is just space of data
// what reducer returns is a data of store
//count = 0 is just initial value, it mean currentValue in redux
//### reducer ###
const countModifier = (count = 0, action) => {
	if(action.type === "ADD"){
		return count + 1; //what it returns become a data of store count is just current value at all
	}
	else if(action.type ==="MINUS"){
		return count - 1;
	}
	else{
		return count;		
	}
}

//only reducer who given as args to createStore can modify data called reducer normally
//### createModifier ###
const countStore = createStore(countModifier);

const onChange = () => {
	number.innerText = countStore.getState();
}

//### subscribe ###
countStore.subscribe(onChange); //it allows me to listen change in data(state) then call callback function granted (ex)onChange)

add.addEventListener("click", ()=>{
	countStore.dispatch({type : 'ADD'});
})
minus.addEventListener("click", ()=>{
	countStore.dispatch({type : 'MINUS'});
})

