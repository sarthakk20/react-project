import {  configureStore } from '@reduxjs/toolkit'
import todoReducer from './features.to do.todoSlice'
export const store = configureStore({
    reducer:todoReducer
})


//steps:

//store
//reducer
//useSelector
//useDispatch - dispatch ye reduer ko use krke store me value add krta he