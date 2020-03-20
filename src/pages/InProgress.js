import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import RecommendedTrips from "../components/RecommendedTrips";
import { InProgressContext } from "../components/Context/InProgressContext";

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

export default function InProgress() {
    const classes = useStyles();
    const [trips] = useContext(InProgressContext);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2">Trips in progress</Typography>
      </div>
      <RecommendedTrips trips={trips} class={classes.root} />
    </div>
  );
}
