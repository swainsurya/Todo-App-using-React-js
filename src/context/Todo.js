import { createContext,useContext } from "react";

export const Todo = createContext (
    {
        todos: [
            {
                id: Date.now(),
                name: "",
                isCompleted: false
            }
        ],
        addTodo : (todo) => {} ,
        deleteTodo : (id) => {},
    }
)

export const TodoProvider = Todo.Provider ;

export const useTodo = () => {
    return useContext(Todo) ;
}