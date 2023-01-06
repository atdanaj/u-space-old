import React from "react";
import { useQuery } from "@apollo/client";

import { GET_TODOS, GET_TODOS_BY_FREQUENCY } from "../../graphql/queries";
import Task from "./Task";
import "./Tasks.css";

const Tasks = ({userId, frequency}) => {
  const { loading, error, data } = useQuery(GET_TODOS_BY_FREQUENCY, {variables: {id: userId, time: frequency}});

  if (loading) {
    return <div className="tasks">Loading...</div>;
  }
  if (error) {
    return <div className="tasks">Error!</div>;
  }

  return (
    <div className="tasks">
      {data.todos.map((todo) => (
        <Task key={todo.id} todo={todo} userId={userId} frequency={frequency}/>
      ))}
    </div>
  );
};

export default Tasks;