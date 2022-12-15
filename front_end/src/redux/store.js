import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import questionsSlice from './questionsSlice' 

export const myStore = configureStore(
    {
        reducer: {
            user: userReducer,
            questions: questionsSlice
        }
    }
)