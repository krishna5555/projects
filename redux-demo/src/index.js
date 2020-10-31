import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

//create a store

//action
const increment = () => {
  return {
    type: "INCREMENT"
  };
}

const decrement = () => {
  return {
    type: "DECREMENT"
  };
}

//reducer
const counter = (state=0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
  }
}

let store = createStore(counter);

store.subscribe(()=> console.log(store.getState()));

//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
