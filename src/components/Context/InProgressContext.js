import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";

export const InProgressContext = createContext();

export const InProgressProvider = props => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    Axios.get(server + "/trip/in-progress").then(res => {
      setTrips(res.data);
    });
  }, []);

  return (
    <InProgressContext.Provider value={[trips, setTrips]}>
      {props.children}
    </InProgressContext.Provider>
  );
};
