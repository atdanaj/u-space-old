import React from 'react'
import TodoInput from './TodoInput'
import Tasks from './Tasks'
import { Card } from '@mui/material'

const TodoList = ({title}) => {
  return (
   <Card variant="outlined" style={{flex: 1, padding: '10px', margin: '10px', textAlign: 'center', height: '20rem'}}>
        <h2>{title} To-Do's</h2>
    <TodoInput />
    <Tasks />
  </Card>
  )
}

export default TodoList