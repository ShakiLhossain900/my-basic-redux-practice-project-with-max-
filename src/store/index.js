import {createSlice} from '@reduxjs/toolkit';

//creating the store 

//redux toolkit counter 
const initailConterState={counter:0, showCounter:true};

const counterSlice =({
    name: 'counter',
    initialState: initailConterState, 

    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
          state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter= !state.showCounter
        }
        

    }
})