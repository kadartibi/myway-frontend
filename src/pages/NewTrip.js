import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { AddNewTripForm } from "../components/AddNewTripForm";

const useStyles = makeStyles({
  header: {
    color: "#fff",
    textShadow: "3px 3px #000",
    padding: 50
  }
});

export const NewTrip = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.header} variant="h2">Create a new trip</Typography>
      <AddNewTripForm />
    </div>
  );
};
export default NewTrip;
