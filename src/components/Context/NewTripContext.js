import React, { createContext, useState } from "react";
import axios from "axios";
import { server } from "./ServerSelector";

export const NewTripContext = createContext();

export const NewTripProvider = props => {
  const [tripName, setTripName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [dateOfDeparture, setDateOfDeparture] = useState("");
  const [dateOfReturn, setDateOfReturn] = useState("");
  const [travelType, setTravelType] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const sendToServer = () => {
    axios
      .post(server + "/trip/add", {
        name: tripName,
        country: country,
        city: city,
        dateOfDeparture: dateOfDeparture,
        dateOfReturn: dateOfReturn,
        travelTypes: travelType
      })
      .then(response => {
        setErrorMessage(null);
        if (response.status === 200) {
          window.location.href = "/in-progress";
        }
      })
      .catch(function(error) {
        let errorList = [];
        error.response.data.errors.forEach(element => {
          errorList.push(" " + element.defaultMessage);
        });
        setErrorMessage(errorList);
      });
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
        sendToServer,
        errorMessage,
        setErrorMessage
      ]}
    >
      {props.children}
    </NewTripContext.Provider>
  );
};
