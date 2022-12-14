import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'

export const myStore = configureStore(
    {
        reducer: {
            user: userReducer
        }
    }
)