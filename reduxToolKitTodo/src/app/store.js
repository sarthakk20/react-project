import {  configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer:todoReducer
})


//steps:

//store
//reducer
//useSelector
//useDispatch - dispatch ye reducer ko use krke store me value add krta he