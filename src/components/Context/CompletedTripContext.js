import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";

export const CompletedTripContext = createContext();

export const CompletedTripProvider = props => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    Axios.get(server + "/trip/completed", {
      withCredentials: true
    }).then(res => {
      setTrips(res.data);
    });
  }, []);

  return (
    <CompletedTripContext.Provider value={[trips, setTrips]}>
      {props.children}
    </CompletedTripContext.Provider>
  );
};
