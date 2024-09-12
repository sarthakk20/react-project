import {createContext , useContext} from 'react'

export const TodoContext = createContext({

    Todos : [
        {
            id:1,
            todo: "Todo msg",
            completed : false
        }
    ],

    addTodo : (Todo)=>{},
    updateTodo : (id , todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}
})

export const UseTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;