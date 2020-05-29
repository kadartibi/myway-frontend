import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import DisplayTrips from "../components/DisplayTrips";
import { CompletedTripContext } from "../components/Context/CompletedTripContext";

const useStyles = makeStyles({
  header: {
    color: "#fff",
    textShadow: "3px 3px #000",
    padding: 50
  },
  root: {
    margin: "auto",
    align: "center",
    maxWidth: 1000
  },
  recommended: {
    color: "#fff",
    paddingTop: 200,
    paddingBottom: 40,
    textShadow: "3px 3px #000"
  }
});

export default function Completed() {
    const classes = useStyles();
    const [completedTrips] = useContext(CompletedTripContext);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2">Completed Trips</Typography>
      </div>
      <DisplayTrips trips={completedTrips} class={classes.root} />
    </div>
  );
}