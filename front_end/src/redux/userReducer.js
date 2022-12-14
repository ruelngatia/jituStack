import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: {
        id: 0,
        image_url: '',
        token: '',
        username: ''
   }
   
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState: initialState,
    reducers:{
        setCurrentUser: (state,action)=>{
            state.user = action.payload
        },
        reset: (state)=>{
            state = initialState
        }
    }
}) 

export default userReducer.reducer;
export const {setCurrentUser,reset} = userReducer.actions