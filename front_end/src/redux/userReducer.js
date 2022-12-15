import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: {        
        token: '',
        username: '',
        image_url: ''
   }
   
}

export const userReducer = createSlice({
    name: 'user',
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