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
    console.log(props.trip.id)
    axios
      .get(
        "http://localhost:8762/trip/copy-trip/" + props.trip.id,
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
