import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  button: {
    marginBottom: 20,
  },
});

export default function CopyTripButton(props) {
  const [open, setOpen] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
    console.log(props.trip.id);
    axios
      .get("http://localhost:8762/trip/copy-trip/" + props.trip.id, {
        withCredentials: true,
      })
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
          handleClickOpenDialog();
        }}
      >
        Copy trip
      </Button>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Change date
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Disagree
          </Button>
          <Button
            onClick={() => {
              sendToServer(props);
              handleCloseDialog();
              handleClick();
            }}
            color="primary"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseDialog}
        message="Trip copied"
        action={
          <React.Fragment>
            <Button
              color="secondary"
              size="small"
              onClick={handleCloseDialog}
            />
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseDialog}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
