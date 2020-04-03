import React from "react";
import "./App.css";
import Home from "./pages/Home";
import InProgress from "./pages/InProgress";
import NewTrip from "./pages/NewTrip";
import Completed from "./pages/Completed";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { PlannedDaysProvider } from "./components/Context/PlannedDaysContext";
import { NewTripProvider } from "./components/Context/NewTripContext";
import { InProgressProvider } from "./components/Context/InProgressContext";
import { RecommendedTripProvider } from "./components/Context/RecommendedTripContext";
import { UserProvider } from "./components/Context/UserContext";
import MenuDrawer from "./components/MenuDrawer";

//datepicker
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { CompletedTripProvider } from "./components/Context/CompletedTripContext";

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <CompletedTripProvider>
          <NewTripProvider>
            <PlannedDaysProvider tripId={"0"}>
              <InProgressProvider>
                <RecommendedTripProvider>
                  <Router>
                    <MenuDrawer />
                    <Route exact path="/" component={Home} />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Route path="/new-trip" component={NewTrip} />
                    </MuiPickersUtilsProvider>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/in-progress" component={InProgress} />
                    <Route path="/completed" component={Completed} />
                    <Route path="/user" component={UserProfile} />
                  </Router>
                </RecommendedTripProvider>
              </InProgressProvider>
            </PlannedDaysProvider>
          </NewTripProvider>
        </CompletedTripProvider>
      </UserProvider>
    </div>
  );
}
