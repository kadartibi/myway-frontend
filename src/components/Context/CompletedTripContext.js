import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";

export const CompletedTripContext = createContext();

export const CompletedTripProvider = (props) => {
  const [completedTrips, setCompletedTrips] = useState([]);

  const refreshCompletedContext = () => {
    Axios.get(server + "/trip/completed", {
      withCredentials: true,
    }).then((res) => {
      setCompletedTrips(res.data);
    });
  };

  useEffect(() => {
    Axios.get(server + "/trip/completed", {
      withCredentials: true,
    }).then((res) => {
      setCompletedTrips(res.data);
    });
  }, []);

  return (
    <CompletedTripContext.Provider
      value={[completedTrips, setCompletedTrips, refreshCompletedContext]}
    >
      {props.children}
    </CompletedTripContext.Provider>
  );
};
