import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
        questions:[],
        loading: true
}

const config = {
    headers:{
      Authorization: "Bearer ".concat(localStorage.getItem('token'))
    }
  }


export const getAllQuestions = createAsyncThunk(
    'getAllQuestions',
    async (path,thunkAPI) =>{
        console.log(path);
        try {
            let result = await (await axios.get(`http://localhost:4040${path}`,config)).data 
            return result
        } catch (error) {
            console.log(error);
        }
        
       
        
    }
)

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
        builder.addCase(getAllQuestions.fulfilled, (state,action)=>{
            state.loading = false
            state.questions = action.payload
        })
    }
    
})


export default questionsSlice.reducer;
// export const {} = questionsSlice.actions