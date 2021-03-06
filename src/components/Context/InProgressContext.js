import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";

export const InProgressContext = createContext();

export const InProgressProvider = props => {
  const [trips, setTrips] = useState([]);

  const refreshInProgressContext = () => {
    Axios.get(server + "/trip/in-progress", {
      withCredentials: true
    }).then(res => {
      setTrips(res.data);
    });    
  }

  useEffect(() => {
    Axios.get(server + "/trip/in-progress", {
      withCredentials: true
    }).then(res => {
      setTrips(res.data);
    });
  }, []);

  return (
    <InProgressContext.Provider value={[trips, setTrips, refreshInProgressContext]}>
      {props.children}
    </InProgressContext.Provider>
  );
};
