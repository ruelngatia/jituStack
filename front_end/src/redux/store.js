import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import questionsSlice from './questionsSlice' 
import answerSlice from './answerSlice'

export const myStore = configureStore(
    {
        reducer: {
            user: userReducer,
            questions: questionsSlice,
            answers: answerSlice
        }
    }
)