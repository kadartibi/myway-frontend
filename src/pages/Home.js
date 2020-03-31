import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { RecommendedTripContext } from "../components/Context/RecommendedTripContext";
import DisplayTrips from "../components/DisplayTrips";

const useStyles = makeStyles({
  header: {
    color: "#fff",
    textShadow: "3px 3px #000"
  },
  root: {
    margin: "auto",
    align: "center",
    maxWidth: 1000
  },

  intro: {
    paddingTop: 200,
    color: "#fff",
    textShadow: "3px 3px #000"
  },
  recommended: {
    color: "#fff",
    paddingTop: 200,
    paddingBottom: 40,
    textShadow: "3px 3px #000"
  }
});

export default function Home() {
  const classes = useStyles();
  const [trips] = useContext(RecommendedTripContext);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1">Welcome Travellers!</Typography>
        <Typography className={classes.intro} variant="h3">
          You can find here the best trips from around the world! Browse them,
          rate if you like, amend them for yourself, to fit your needs or plan
          your dream trip from scratch!
        </Typography>
        <Typography className={classes.recommended} variant="h3">
          Here are the best ones so far!
        </Typography>
      </div>
      <DisplayTrips trips={trips} class={classes.root} />
    </div>
  );
}
