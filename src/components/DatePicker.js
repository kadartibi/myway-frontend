import React, { Fragment, useState, useContext } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { NewTripContext } from "../context/NewTripContext";

function KeyboardDatePickerTest(props) {
  const [selectedDepartureDate, handleDepartureDateChange] = useState(
    new Date()
  );
  const [selectedReturnDate, handleReturnDateChange] = useState(new Date());
  const [
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
    setTravelType
  ] = useContext(NewTripContext);

  return (
    <Fragment>
      <h3>Date of departure:</h3>
      <br />
      <KeyboardDatePicker
        clearable
        value={selectedDepartureDate}
        onChange={date => {
          handleDepartureDateChange(date);
          setDateOfDeparture(date);
        }}
        minDate={new Date()}
        format="dd/MM/yyyy"
      />
      <br />
      <h3>Date of return:</h3>
      <br />
      <KeyboardDatePicker
        clearable
        value={selectedReturnDate}
        onChange={date => {
          handleReturnDateChange(date);
          setDateOfReturn(date);
        }}
        minDate={selectedDepartureDate}
        minDateMessage="ReturnDate should be after Departure date"
        format="dd/MM/yyyy"
      />
    </Fragment>
  );
}

export default KeyboardDatePickerTest;
