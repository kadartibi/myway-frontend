import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BeenHereIcon from "@material-ui/icons/Beenhere";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import AutoRenewIcon from "@material-ui/icons/Autorenew";
import ExploreIcon from "@material-ui/icons/Explore";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import axios from "axios"
import { UserContext } from "./components/Context/UserContext";


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

export default function MenuDrawer() {
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

  const logout = () => {
    axios
      .post("http://localhost:8080/auth/logout", {
        withCredentials: true
      })
      .then(res => {
        console.log(res.data);
        /*if (res.status === 200) {
            window.location.href = "/";
          }*/
      })
      .catch(() => {
        console.log("something wrong");
      });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button component={Link} to="/sign-in">
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Sign in" />
        </ListItem>
        <ListItem button onClick={logout}>
          <ListItemIcon>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        <Divider />
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
      </List>
    </div>
  );

  return (
    <div>
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
    </div>
  );
}
