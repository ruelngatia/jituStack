import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const initialState = {
        questions:[],
        loading: true,
        error: ''
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
            thunkAPI.dispatch(setLoading())
            return result
        } catch (error) {
            thunkAPI.dispatch(setError())
            console.log('touched');
            thunkAPI.dispatch(setLoading())
            const navigator = useNavigate()
            if(error.request.status == 401){  
                navigator("/auth/login")
            }
            console.log(error);
        }   
    }
)

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: initialState,
    reducers: {
        setQuestions: (state,action)=>{
            state.questions = action.payload
        },
        setError: (state)=>{
            state.error = '404'
        },
        setLoading: (state)=>{
            state.loading = !state.loading 
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllQuestions.fulfilled, (state,action)=>{
            state.loading = false
            state.questions = action.payload
        })
    }
    
})


export default questionsSlice.reducer;
export const {setError,setLoading,setQuestions} = questionsSlice.actions