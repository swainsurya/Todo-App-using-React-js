import React, { useRef, useState } from 'react'
import { useTodo } from '../context/Todo'

const TodoItems = ({todo}) => {
    const {todos,addTodo,deleteTodo,} = useTodo() ;
    let handleDelete = (e) => {
        deleteTodo(todo.id) ;
    }
  return (
    <div className='w-[100%] flex items-center justify-center my-3 mx-6 p-2'>
      <div className="box1 w-[75%] bg-black p-4 font-bold rounded-l-xl text-white flex items-center gap-4">
        <input type="checkbox"/>
        <input type="text" value= {todo.name} className='cursor-pointer bg-transparent outline-none' readOnly/>
      </div>
      <div className="box2 font-bold text-white rounded-r-xl cursor-pointer flex justify-between">
        <button className='bg-blue-500 py-4 px-4 rounded-r-xl hover:bg-blue-800' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItems
