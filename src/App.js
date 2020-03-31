import React from "react";
import "./App.css";
import Home from "./pages/Home";
import InProgress from "./pages/InProgress";
import NewTrip from "./pages/NewTrip";
import Completed from "./pages/Completed";
import SignUp from "./pages/SignUp";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { PlannedDaysProvider } from "./components/Context/PlannedDaysContext";
import { NewTripProvider } from "./components/Context/NewTripContext";
import { InProgressProvider } from "./components/Context/InProgressContext";
import { RecommendedTripProvider } from "./components/Context/RecommendedTripContext";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BeenHereIcon from "@material-ui/icons/Beenhere";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import AutoRenewIcon from "@material-ui/icons/Autorenew";
import ExploreIcon from "@material-ui/icons/Explore";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//datepicker
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  appbar: {
    background: "transparent",
    boxShadow: "none"
  }
});

export default function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/new-trip">
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary="New trip" />
        </ListItem>
        <ListItem button component={Link} to="/sign-up">
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary="Sign up" />
        </ListItem>
        <ListItem button component={Link} to="/in-progress">
          <ListItemIcon>
            <AutoRenewIcon />
          </ListItemIcon>
          <ListItemText primary="In progress" />
        </ListItem>
        <ListItem button component={Link} to="/completed">
          <ListItemIcon>
            <BeenHereIcon />
          </ListItemIcon>
          <ListItemText primary="Completed trips" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="App">
      <NewTripProvider>
        <PlannedDaysProvider tripId={"0"}>
          <InProgressProvider>
            <RecommendedTripProvider>
              <Router>
                <AppBar position="fixed" className={classes.appbar}>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      onClick={toggleDrawer("left", true)}
                      color="inherit"
                      aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
                  {sideList("left")}
                </Drawer>
                <Route exact path="/" component={Home} />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Route path="/new-trip" component={NewTrip} />
                </MuiPickersUtilsProvider>
                <Route path="/sign-up" component={SignUp} />
                <Route path="/in-progress" component={InProgress} />
                <Route path="/completed" component={Completed} />
              </Router>
            </RecommendedTripProvider>
          </InProgressProvider>
        </PlannedDaysProvider>
      </NewTripProvider>
    </div>
  );
}
