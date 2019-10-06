import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';



const initialState = {
    count: 0
  };


// providing a function that will return the state
//takes the current state and an action, and then it returns the new state.

function reducer(state = initialState, action) {
    //console.log(action)
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            if(state.count>0) {
                return {
                    count: state.count - 1 
                 };
            } else {
                return state;
            }
            
        default:
            return state;
    }
  }


const store = createStore(reducer);  //making a store for our states
const App = () => (
    <div>
        <Provider store = {store}>
            <Counter/>
        </Provider>
    </div>
  );

  render(<App />, document.getElementById('root'));


serviceWorker.unregister();
