import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO, GET_TODOS_BY_FREQUENCY } from "../../graphql/queries";
import "./TodoInput.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const TodoInput = ({userId, frequency}) => {

  useEffect(() => {
    calculateDueDate();
  }, [dueDate]);

  const updateCache = (cache, { data }) => {
    const existingTodos = cache.readQuery({
      query: GET_TODOS_BY_FREQUENCY,
      variables: {id: userId, time: frequency}
    });
   
    const newTodo = data.insert_todos_one;
    cache.writeQuery({
      query: GET_TODOS_BY_FREQUENCY,
      variables: {id: userId, time: frequency},
      data: { todos: [...existingTodos.todos, newTodo] },
    });
  };
  
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [addTodo] = useMutation(ADD_TODO, { update: updateCache });
  const calculateDueDate = () => {
    const date = new Date()
    switch (frequency) {
      case 'Daily':
        setDueDate(new Date(date.setDate(date.getDate() + 1)));
        break;
      case 'Weekly':
        setDueDate(new Date(date.setDate(date.getDate() + 7)));
        break;
      case 'Monthly':
        setDueDate(new Date(date.setDate(date.getDate() + 30)));
        break;
      default:
        break;
    }
  }
  const submitTask = () => {
    addTodo({ variables: { task: task, id: userId, time: frequency, dueDate: dueDate } });
    setTask("");
  };

  return (
    <div>
   <Grid container direction="row"
  justifyContent="center"
  alignItems="center" spacing={3}>
    <Grid item>
      <TextField id="standard-basic" label="Add a new task" variant="standard"
        size="small"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") submitTask();
        }} />
  </Grid>
  <Grid item>
      <Button variant="contained" size="small" onClick={submitTask}>
          Add
        </Button>
        </Grid>
        </Grid>
    </div>
  );
};

export default TodoInput;