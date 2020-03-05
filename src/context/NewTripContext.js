import React, { createContext, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const NewTripContext = createContext();

export const NewTripProvider = props => {
  const [tripName, setTripName] = useState("1");
  const [country, setCountry] = useState("2");
  const [city, setCity] = useState("kaki");
  const [dateOfDeparture, setDateOfDeparture] = useState("");
  const [dateOfReturn, setDateOfReturn] = useState("");
  const [travelType, setTravelType] = useState([]);
  const sendToServer = () => {
    axios
      .post("http://localhost:8080/trip/add", {
        name: tripName,
        country: country,
        city: city,
        dateOfDeparture: dateOfDeparture,
        dateOfReturn: dateOfReturn,
        travelTypeList: travelType
      })
      .then(/*(window.location.href = "/in-progress")*/);
  };

  return (
    <NewTripContext.Provider
      value={[
        tripName,
        setTripName,
        country,
        setCountry,
        city,
        setCity,
        dateOfDeparture,
        setDateOfDeparture,
        dateOfReturn,
        setDateOfReturn,
        travelType,
        setTravelType,
        sendToServer
      ]}
    >
      {props.children}
    </NewTripContext.Provider>
  );
};
