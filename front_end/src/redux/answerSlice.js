import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
    headers:{
      Authorization: "Bearer ".concat(localStorage.getItem('token'))
    }
  }

export const getAnswers = createAsyncThunk(
    'get/answres',
    async(questionId,thunkAPI)=>{
        try {
            let result = await (await axios.get(`http://localhost:4040/answers/${questionId}`,config)).data
            return result
        } catch (error) {
            console.log(error);
        }
    }

)

const initialState ={
    question: {
        title: '',
        question_body: '',
    },
    loading: false,
    answersList: [
       
    ],
    error: ''
}

const answerSlice = createSlice({
    name: 'answers',
    initialState: initialState,
    reducers: {
        setError: (state)=>{
            state.error = '404'
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAnswers.fulfilled,(state,action)=>{
            state.question = action.payload.question || state.question
            state.answersList = action.payload.answers
        })
    }

})

export default answerSlice.reducer