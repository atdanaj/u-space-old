import React from "react";
import { useQuery } from "@apollo/client";

import { GET_TODOS_BY_FREQUENCY } from "../../graphql/queries";
import Task from "./Task";
import List from "@mui/material/List";
import "./Tasks.css";

const Tasks = ({ userId, frequency }) => {
  const { loading, error, data } = useQuery(GET_TODOS_BY_FREQUENCY, {
    variables: { id: userId, time: frequency },
  });

  if (loading) {
    return <div className="tasks">Loading...</div>;
  }
  if (error) {
    return <div className="tasks">Error!</div>;
  }

  return (
    <div className="tasks">
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            userId={userId}
            frequency={frequency}
          />
        ))}
      </List>
    </div>
  );
};

export default Tasks;
