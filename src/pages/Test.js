import React, { useContext } from "react";
import PlannedDay from "../components/PlannedDay";
import { PlannedDaysContext } from "../components/Context/PlannedDaysContext";

import { makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1000,
    display: "inline-block"
  }
}));

export default function Test() {
  const [plannedDays] = useContext(PlannedDaysContext);
  const classes = useStyles();

  return plannedDays ? (
    <div className={classes.root}>
      {plannedDays.map(day => (
        <PlannedDay day={day} />
      ))}
    </div>
  ) : (
    <CircularProgress />
  );
}
