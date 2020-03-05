import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { server } from "./ServerSelector";

export const PlannedDaysContext = createContext();

export function PlannedDaysProvider(props) {
  const [plannedDays, setPlannedDays] = useState();
  let tripId = props.tripId;

  useEffect(() => {
    axios
      .get(server + "/trip/" + tripId + "/list-all-days")
      .then(res => setPlannedDays(res.data));
  }, [tripId]);

  console.log(plannedDays + "In context")
  return (
    <PlannedDaysContext.Provider value={[plannedDays]}>
      {props.children}
    </PlannedDaysContext.Provider>
  );
}
