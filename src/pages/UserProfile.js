import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { UserContext } from "../components/Context/UserContext";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles({
  root: {
    marginTop: "50px",
    margin: "auto",
    maxWidth: "50%",
    minWidth: "300",
    textAlign: "center"
  },
  content: {
    display: "inline-block"
  }
});
export const UserProfile = () => {
  const classes = useStyles();
  const { userName, firstName, lastName, email } = useContext(UserContext);
  return userName !== undefined ? (
    <div>
      <React.Fragment>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h2>{userName}'s profile</h2>
              </Grid>
              <Grid item xs={6}>
                First Name: {firstName}
              </Grid>
              <Grid item xs={6}>
                Last Name: {lastName}
              </Grid>
              <Grid item xs={12}>
                Email: {email}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    </div>
  ) : (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default UserProfile;
