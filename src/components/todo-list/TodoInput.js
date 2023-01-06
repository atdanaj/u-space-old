import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO, GET_TODOS } from "../../graphql/queries";
import "./TodoInput.css";

export default (userId) => {

  const updateCache = (cache, { data }) => {
    const existingTodos = cache.readQuery({
      query: GET_TODOS,
      variables: {id: userId.user}
    });
   
    const newTodo = data.insert_todos_one;
    cache.writeQuery({
      query: GET_TODOS,
      variables: {id: userId.user},
      data: { todos: [...existingTodos.todos, newTodo] },
    });
  };
  
  const [task, setTask] = useState("");
  const [addTodo] = useMutation(ADD_TODO, { update: updateCache });
  const submitTask = () => {
    addTodo({ variables: { task: task, id: userId.user } });
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