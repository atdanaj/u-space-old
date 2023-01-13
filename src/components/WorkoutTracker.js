import React from "react";
import Grid from "@mui/material/Grid";

const WorkoutTracker = () => {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: "4px",
        paddingBottom: "10px",
      }}
    >
      <center>
        <h2>Workout Tracker</h2>
      </center>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      ></Grid>
    </div>
  );
};

export default WorkoutTracker;
