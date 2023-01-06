import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO, GET_TODOS_BY_FREQUENCY } from "../../graphql/queries";
import "./TodoInput.css";

const TodoInput = ({userId, frequency}) => {
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
  const [addTodo] = useMutation(ADD_TODO, { update: updateCache });
  const submitTask = () => {
    addTodo({ variables: { task: task, id: userId, time: frequency } });
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        className="taskInput"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") submitTask();
        }}
      />
      <button onClick={submitTask}>Add</button>
    </div>
  );
};

export default TodoInput;