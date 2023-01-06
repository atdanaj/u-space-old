import React from "react";
import { useMutation } from "@apollo/client";

import { GET_TODOS, REMOVE_TODO, TOGGLE_COMPLETED } from "../../graphql/queries";
import "./Task.css";

const Task = ({ todo, userId }) => {
  const [removeTodoMutation] = useMutation(REMOVE_TODO);
  const [toggleCompletedMutation] = useMutation(TOGGLE_COMPLETED)

  const toggleCompleted = ({ id, completed }) => {
    toggleCompletedMutation({
      variables: { id, completed: !completed },
      optimisticResponse: true,
      update: (cache) => {
        const existingTodos = cache.readQuery({ query: GET_TODOS,  variables: {id: userId.user} });
        const updatedTodo = existingTodos.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !completed };
          } else {
            return todo;
          }
        });
        cache.writeQuery({
          query: GET_TODOS,
          variables: {id: userId.user},
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
        const existingTodos = cache.readQuery({ query: GET_TODOS, variables: {id: userId.user} });
        const todos = existingTodos.todos.filter((t) => t.id !== id);
        cache.writeQuery({
          query: GET_TODOS,
          variables: {id: userId.user},
          data: { todos },
        });
      },
    });
  };

  return (
    <div key={todo.id} className="task">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.task}</span>
      <button type="submit" onClick={() => removeTodo(todo.id)}>
        remove
      </button>
    </div>
  );
};

export default Task;