import React, { useState } from 'react'
import { useTodo } from '../context/Todo'

const TodoForm = () => {
    let {addTodo} = useTodo() ;
    const [todoName,setTodoName] = useState("") ;
    const add = (e) => {
        e.preventDefault() ;
        if(!todoName) return ;
        addTodo({id:Date.now(),name:todoName.toUpperCase(), isCompleted: false})
        setTodoName("") ;
    }
  return (
    <form onSubmit={add} className='w-[100%] flex items-center justify-center my-3 '>
      <input type="text" name="todoForm" id="" 
      className='w-[85%] bg-transparent bg-gray-500 outline-none border-4 border-yellow-300 p-2 font-bold rounded-l-xl text-white'
      autoCapitalize='on'
      value={todoName}
      onChange={e => setTodoName(e.target.value)}
      />
      <input type="submit" value="Add" 
      className='bg-blue-700 px-4 py-3 font-bold text-white rounded-r-xl cursor-pointer hover:bg-blue-800'/>
    </form>
  )
}
export default TodoForm
