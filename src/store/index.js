//this is just a demonstration of one way to avoid issues in larger projects
// this can be exported 
// export const INCREMENT = 'increment';
// This is demonstrating how to use reduxjstoolkit to make using redux easier


// don't need to 
// import { createSlice, configureStore } from '@reduxjs/toolkit';
// as we broke up the slices into their own files

// breaking this up by moving to its own file
// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// auth has its own file now too
// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// this was the way I was doing it before using reduxjstoolkit
// import redux, { createStore} from 'redux';
// const counterReducer = (state = initialState, action) => {
//     if (action.type === INCREMENT) {
//         state.counter++;
        
//         return {
//             counter: state.counter,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }
    
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         };
//     }

//     return state;
// }

// const store = createStore(counterReducer);
// export default store;
