import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TodoLists from "../components/TodoLists";
import Grid from "@mui/material/Grid";
import { textAlign } from "@mui/system";
import GoogleCal from "../components/Calendar";
import Counter from "../components/Counter";
import WaterTracker from "../components/WaterTracker";
import WorkoutTracker from "../components/WorkoutTracker";

const Manifest = () => {
  const { user } = useAuth0();
  const today = new Date();

  return (
    <div>
      {user ? (
        <Fragment>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <hr style={{ marginTop: "10%" }} />
            </Grid>
            <Grid item xs={4}>
              <h1 style={{ textAlign: "center" }}>
                {today.toLocaleString("default", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h1>
            </Grid>
            <Grid item xs={4}>
              <hr style={{ marginTop: "10%" }} />
            </Grid>
            <Grid item xs={3} style={{ height: "100vh" }}>
              <Counter />
              <br />
              <WaterTracker />
              <br />
              <WorkoutTracker />
            </Grid>
            <Grid item xs={9}>
              <TodoLists />
              <br />
              <GoogleCal />
            </Grid>
          </Grid>
        </Fragment>
      ) : (
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            pt: "25rem",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Manifest;
