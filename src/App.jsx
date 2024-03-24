import React, { useState } from 'react'
import { TodoProvider } from './context/Todo'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems';

const App = () => {

  const [todos,setTodos] = useState([]) ;
  let addTodo = (todo) => {
    setTodos(prev => [{id:Date.now(),...todo},...prev]) ;
  }

  let deleteTodo = (id) => {
    let newTodos = [] ;
    for (const iterator of todos) {
      if(iterator.id !== id) {
        newTodos.push(iterator) ;
      }
    }
    setTodos(newTodos) ;
  }


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo}}>
      <main className='w-1/2  bg-green-900 m-auto mt-6 flex flex-col items-center rounded-lg shadow-sm shadow-white' >
        <TodoForm/>
        {todos.map((item) => (
          <TodoItems todo={item} key={item.id}/>
        ))}
      </main>
    </TodoProvider>
  )
}

export default App
