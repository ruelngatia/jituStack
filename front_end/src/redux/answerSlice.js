import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState ={
    question: {
        title: '',
        question_body: '',
    },
    answersList: [
        {
            answer: '',
            accepter: false,
            Comments: [
                {
                    comment: '',
                    date: '',
                    user: ''
                }
            ]
        }
    ]
}

const answerSlice = createSlice({
    name: 'answers',
    initialState: initialState,
    extraReducers: (builder)=>{
        
    }

})