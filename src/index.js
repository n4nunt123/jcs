import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
const initialState = [
  {
    name: 'Blue Denim Shirt',
    type: 'Shirt',
    color: 'Blue',
    size: 'M',
    price: '50',
    amount: 1,
    img: 'https://cdn.discordapp.com/attachments/1007286935926095954/1056947555944120422/sg-11134201-22100-2o0tm3jl03iv05.png'
  },
  {
    name: 'Red Hoodie',
    type: 'Hoodie',
    color: 'Red',
    size: 'L',
    price: '49',
    amount: 2,
    img: 'https://cdn.discordapp.com/attachments/1007286935926095954/1056947865718628372/81Rx4-S7qL.png'
  }
]
  
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      state[action.index].amount = state[action.index].amount + 1
      return [...state]
    case 'decrement':
      if (state[action.index].amount > 0) state[action.index].amount = state[action.index].amount - 1
      else state[action.index].amount = 0
      return [...state]
    default: 
    return state
  }
}
let store = createStore(rootReducer)  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
