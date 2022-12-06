import React from 'react'
import TodoList from '../components/todo-list/todoList'

export default () => (
  <div style={{display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-between", padding: '10px'}}>
 <TodoList title='Daily'></TodoList>
  <TodoList title='Weekly'></TodoList>
  <TodoList title='Monthly'></TodoList>
  </div>
 
)