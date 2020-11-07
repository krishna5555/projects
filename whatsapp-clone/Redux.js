import React from 'react';
import {createStore} from 'redux';

//create a store
const store = createStore(reducer);

//action
const increment = () => {
    return {
        type: "INCREMENT"
    }
}

const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

//reducer
const reducer = (state, action) =>{
    switch(action){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
    }
}

//subscribe
store.subscribe(() => console.log(store.getState()));

//dispatch
store.dispatch(decrement());