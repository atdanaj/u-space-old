import React, { Fragment, useEffect } from "react";
import { useMutation } from "@apollo/client";
import moment from 'moment';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { GET_TODOS_BY_FREQUENCY, REMOVE_TODO, TOGGLE_COMPLETED } from "../../graphql/queries";
import "./Task.css";

const Task = ({ todo, userId, frequency }) => {
  const [removeTodoMutation] = useMutation(REMOVE_TODO);
  const [toggleCompletedMutation] = useMutation(TOGGLE_COMPLETED)

  const toggleCompleted = ({ id, completed }) => {
    toggleCompletedMutation({
      variables: { id, completed: !completed },
      optimisticResponse: true,
      update: (cache) => {
        const existingTodos = cache.readQuery({ query: GET_TODOS_BY_FREQUENCY,  variables: {id: userId, time: frequency} });
        const updatedTodo = existingTodos.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !completed };
          } else {
            return todo;
          }
        });
        cache.writeQuery({
          query: GET_TODOS_BY_FREQUENCY,
          variables: {id: userId, time: frequency},
          data: { todos: updatedTodo },
        });
      },
    });
  };

  const removeTodo = (id) => {
    removeTodoMutation({
      variables: { id },
      optimisticResponse: true,
      update: (cache) => {
        const existingTodos = cache.readQuery({ query: GET_TODOS_BY_FREQUENCY, variables: {id: userId, time: frequency} });
        const todos = existingTodos.todos.filter((t) => t.id !== id);
        cache.writeQuery({
          query: GET_TODOS_BY_FREQUENCY,
          variables: {id: userId, time: frequency},
          data: { todos },
        });
      },
    });
  };

  const isOverdue = (dueDate) => {
    const now = moment();
    if ((dueDate != null || dueDate != ' ') && now.isAfter(dueDate) ) {
      return true;
  }
}


  return (
    <Fragment>
      
       <ListItem sx={{ flexGrow: 1 }}
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} sx={{ flexGrow: 1 }} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': `checkbox-list-label-${todo.id}` }}
                />
              </ListItemIcon>
              <ListItemText sx={[todo.completed && { textDecoration: 'line-through'}, isOverdue(todo.due_at) && { color: 'firebrick'}]} id={todo.is} primary={todo.task} />
            </ListItemButton>
         
         </ListItem>
         <Divider component="li" />
     
     </Fragment>
  );
};

export default Task;