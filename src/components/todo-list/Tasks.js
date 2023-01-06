import React from "react";
import { useQuery } from "@apollo/client";

import { GET_TODOS } from "../../graphql/queries";
import Task from "./Task";
import "./Tasks.css";

const Tasks = (userId, frequency) => {
  const { loading, error, data } = useQuery(GET_TODOS, {variables: {id: userId.user}});

  if (loading) {
    return <div className="tasks">Loading...</div>;
  }
  if (error) {
    return <div className="tasks">Error!</div>;
  }

  return (
    <div className="tasks">
      {data.todos.map((todo) => (
        <Task key={todo.id} todo={todo} userId={userId} />
      ))}
    </div>
  );
};

export default Tasks;