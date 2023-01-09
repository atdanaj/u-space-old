import React from 'react'
import TodoList from '../components/todo-list/todoList'
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Manifest = () => {
  const { user } = useAuth0();
  return (
    <div>
    { user ?   <div style={{display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-between", padding: '10px'}}>
    <TodoList title='Daily'></TodoList>
     <TodoList title='Weekly'></TodoList>
     <TodoList title='Monthly'></TodoList>
     </div> : <Box sx={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", pt: '25rem', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
    }
     </div>
  
  )
}

export default Manifest