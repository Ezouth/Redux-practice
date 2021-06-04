import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = { counter: 0, showCounter: true }

// this is just a demonstration of one way to avoid issues in larger projects
// this can be exported 
// export const INCREMENT = 'increment';


// This is demonstrating how to use reduxjstoolkit to make using redux easier
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        // can add our methods here
        increment(state) {
         // here with REDUXJSTOOLKIT only
         // we can change the state directly
         // Should NOT do this in regular redux
         state.counter++;   
         // this is allowed because of a package reduxtoolkit contains
         // it basically checks for code like this where the state may be affected directly
         // and deals with it for us
        },
        decreement(state) {
            state.counter--;
        },
        // we didn't use action in the others so we didn't pass as a parameter
        increase(state, action) {
            // note that we use the word payload 
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const store = configureStore({
    reducer: {counter: counterSlice.reducer}
});

export const counterActions = counterSlice.actions;
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
