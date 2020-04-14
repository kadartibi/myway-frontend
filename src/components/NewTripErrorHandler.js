import React, { useContext } from "react";
import { NewTripContext } from "./Context/NewTripContext";
// import Button from "@material-ui/core/Button";
// import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "25%",
    marginTop: "10px",
    width: "50%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export const NewTripErrorHandler = () => {
  const {errorMessage} = useContext(NewTripContext);

  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return errorMessage != null ? (
    <div className={classes.root}>
      <Alert severity="error" autoHideDuration={3000}>
        {"The following mandatory fields are not filled in: " +
          errorMessage.map(message => message)}
      </Alert>
    </div>
  ) : (
    <div></div>
  );
};
export default NewTripErrorHandler;
