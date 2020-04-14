import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";

export const AdminContext = createContext();

export const AdminProvider = (props) => {
  const [allUserNames, setAllUserNames] = useState([
    {
      userName: "ViliBa",
      firstName: "Vilmos",
      lastName: "Kertész",
      email: "magdi4ever@freemail.hu",
    },
  ]);

  const [allTrips, setAllTrips] = useState([
    {
      tripName: "Rózsa cafe gemboree",
      country: "Hungary",
      city: "Budapest",
      dateOfDeparture: "2020-02-03",
      dateOfReturn: "2020-02-04",
      travelTypes: "Bicycle",
      userId: "ViliBa",
    },
  ]);

  const [plannedDays]
  return (
    <AdminContext.Provider
      value={{ allUserNames, setAllUserNames, allTrips, setAllTrips }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
