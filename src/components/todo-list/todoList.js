import React from 'react'
import TodoInput from './TodoInput'
import Tasks from './Tasks'
import { Card } from '@mui/material'
import { useAuth0 } from "@auth0/auth0-react";

const TodoList = ({title}) => {
  const { user } = useAuth0();
  return (
   <Card variant="outlined" style={{flex: 1, padding: '10px', margin: '10px', textAlign: 'center', height: '20rem'}}>
        <h2>{title} To-Do's</h2>
    <TodoInput userId={user?.sub} frequency={title}/>
    <Tasks userId={user?.sub} frequency={title}/>
  </Card>
  )
}

export default TodoList