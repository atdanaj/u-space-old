import React from 'react'
import TodoInput from './TodoInput'
import Tasks from './Tasks'
import { Card } from '@mui/material'
import { useAuth0 } from "@auth0/auth0-react";

const TodoList = ({title}) => {
  const { user } = useAuth0();
  console.log(user)
  return (
   <Card variant="outlined" style={{flex: 1, padding: '10px', margin: '10px', textAlign: 'center', height: '20rem'}}>
        <h2>{title} To-Do's</h2>
    <TodoInput user={user?.sub}/>
    <Tasks user={user?.sub} frequency={title}/>
  </Card>
  )
}

export default TodoList