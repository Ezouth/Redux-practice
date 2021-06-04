import redux, { createStore} from 'redux';

const initialState = { counter: 0, showCounter: true }

// this is just a demonstration of one way to avoid issues in larger projects
// this can be exported 
export const INCREMENT = 'increment';

const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        state.counter++;
        
        return {
            counter: state.counter,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }
    
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        };
    }

    return state;
}

const store = createStore(counterReducer);

export default store;
