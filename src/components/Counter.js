import React, { useState } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Counter = () => {
  const [endTime, setEndTime] = useState(new Date());
  const addMinutesToDate = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };
  const formatDate = (date) => {
    var days = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime =
      year +
      "-" +
      month +
      "-" +
      days +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    return strTime;
  };
  const addTime = (minutes) => {
    const today = new Date();
    const newTime = addMinutesToDate(today, minutes);
    setEndTime(formatDate(newTime));
  };

  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: "4px",
        paddingBottom: "10px",
      }}
    >
      <center>
        {" "}
        <h2>Time Block</h2>
      </center>

      <FlipCountdown
        hideYear
        hideMonth
        hideDay
        hideHour
        endAtZero
        minuteTitle=" "
        secondTitle=" "
        endAt={endTime} // Date/Time
      />
      <br />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        style={{ padding: "5px" }}
      >
        <Grid item>
          <Button variant="outlined" size="small" onClick={() => addTime(15)}>
            15 Minutes
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="small" onClick={() => addTime(15)}>
            30 Minutes
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="small" onClick={() => addTime(15)}>
            60 Minutes
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Counter;
