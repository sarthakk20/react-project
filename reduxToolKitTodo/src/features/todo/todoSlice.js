import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id: 1,
        text:"hello",
    }]
}

export const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        // it contains properties and functions
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, //or we can also give a refrence of the function here
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload
            })
        },
        updateTodo:(state, action)=>{
            state.todos.map((todo)=>{action.payload.id === todo.id ? {...text , text:action.payload}:todo})
        }
    }
})

export {addTodo, removeTodo, updateTodo} from tosoSlice.actions

export default todoSlice.reducer