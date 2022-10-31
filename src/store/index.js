import {createSlice, configureStore} from '@reduxjs/toolkit';

//creating the store 

//redux toolkit counter 
const initailConterState={counter:0, showCounter:true};

const counterSlice =createSlice({
    name: "counter",
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
        },
        
    },
});

//redux toolkit authentication
const initailAuthenState = {
    isAuthenticated: false,
}
const authSlice =createSlice({
    name:'authentication',
    initialState: initailAuthenState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        },
    }, 
});


//redux toolkit automatic create the action to dispatch actions
const store = configureStore({
    reducer: {
        counter:counterSlice.reducer,
        auth:authSlice.reducer,
    }
})

export const counterAction = counterSlice.actions;

export default store;







