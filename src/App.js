import React from "react";
import "./App.css";
import Home from "./pages/Home";
import InProgress from "./pages/InProgress";
import NewTrip from "./pages/NewTrip";
import Completed from "./pages/Completed";
import Test from "./pages/Test";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { PlannedDaysProvider } from "./components/Context/PlannedDaysContext";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BeenHereIcon from "@material-ui/icons/Beenhere";
import CommuteIcon from "@material-ui/icons/Commute";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import AutoRenewIcon from "@material-ui/icons/Autorenew";
import ExploreIcon from "@material-ui/icons/Explore";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//datepicker
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { NewTripProvider } from "./context/NewTripContext";

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
        <ListItem button component={Link} to="/test">
          <ListItemIcon>
            <CommuteIcon />
          </ListItemIcon>
          <ListItemText primary="Test" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="App">
      <NewTripProvider>
        <PlannedDaysProvider tripId={"0"}>
          <Router>
            <AppBar position="static" className={classes.appbar}>
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
            <Route path="/in-progress" component={InProgress} />
            <Route path="/completed" component={Completed} />
            <Route path="/test" component={Test} />
          </Router>
        </PlannedDaysProvider>
      </NewTripProvider>
    </div>
  );
}
