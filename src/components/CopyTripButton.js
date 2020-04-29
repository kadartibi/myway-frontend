import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  button: {
    marginBottom: 20
  },
});

export default function CopyTripButton(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const sendToServer = (props) => {
    let plannedDays = [];
    plannedDays.push(props.trip.plannedDays[0]);
    for (let each of props.trip.plannedDays[0].trip.plannedDays) {
      if (typeof each === "number") {
        continue;
      }
      plannedDays.push(each);
    }
    plannedDays[0].trip = plannedDays[1].trip;

    axios
      .post(
        "http://localhost:8762/trip/copy-trip",
        {
          name: props.trip.name,
          country: props.trip.country,
          city: props.trip.city,
          dateOfDeparture: props.trip.dateOfDeparture,
          dateOfReturn: props.trip.dateOfReturn,
          travelTypes: props.trip.travelType,
          plannedDays: plannedDays,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        console.log("something wrong");
      });
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="outlined"
        size="small"
        onClick={() => {
          sendToServer(props);
          handleClick();
        }}
      >
        Copy trip
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Trip copied"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}/>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
