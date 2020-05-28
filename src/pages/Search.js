import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import DisplayTrips from "../components/DisplayTrips";
import { SearchContext } from "../components/Context/SearchContext";
import SearchBar from "../components/SearchBar";

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

export default function Search() {
    const classes = useStyles();
    const {trips} = useContext(SearchContext);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
      <Typography variant="h2">Search trips</Typography>
      </div>
      <SearchBar/>
      <DisplayTrips trips={trips} class={classes.root} />
     
    </div>
  );
}
