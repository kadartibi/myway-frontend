import React, { useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import { UserContext } from "../components/Context/UserContext";
import { RecommendedTripContext } from "../components/Context/RecommendedTripContext";

const useStyles = makeStyles({
  button: {
  },
});


export default function RecommendButton(props) {
  const { setRecommendedTrips } = useContext(RecommendedTripContext);
  const classes = useStyles();
  const { userName } = useContext(UserContext);
  const sendToServer = (props) => {
    axios
      .post(
        "http://localhost:8762/trip/recommendTrip/" +
          +props.trip.id +
          "/" +
          userName,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(props.trip);
        console.log(response);
        setRecommendedTrips(response.data);
      })
      .catch(() => {
        console.log("Something wrong at recommending!");
      });
  };
  return (
    <Button
      className={classes.button}
      variant="outlined" size="small" onClick=
      {() => {
        sendToServer(props);
      }}
      > Recommend Trip
    </Button>
  );
}
