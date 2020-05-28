import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";

export const RecommendedTripContext = createContext();

export const RecommendedTripProvider = props => {
  const [recommendedTrips, setRecommendedTrips] = useState([]);

  useEffect(() => {
    Axios.get(server + "/trip/recommended", {
      withCredentials: true
    }).then(res => {
      setRecommendedTrips(res.data);
    });
  }, []);

  return (
    <RecommendedTripContext.Provider
      value={{recommendedTrips, setRecommendedTrips}}
    >
      {props.children}
    </RecommendedTripContext.Provider>
  );
};
