import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

function KeyboardDatePickerTest(props) {
  const [selectedDepartureDate, handleDepartureDateChange] = useState(
    new Date()
  );
  const [selectedReturnDate, handleReturnDateChange] = useState(new Date());

  return (
    <Fragment>
      Date of departure:
      <br />
      <KeyboardDatePicker
        clearable
        value={selectedDepartureDate}
        onChange={date => handleDepartureDateChange(date)}
        minDate={new Date()}
        format="dd/MM/yyyy"
      />
      <br />
      Date of return:
      <br />
      <KeyboardDatePicker
        clearable
        value={selectedReturnDate}
        onChange={date => handleReturnDateChange(date)}
        minDate={selectedDepartureDate}
        minDateMessage="ReturnDate should be after Departure date"
        format="dd/MM/yyyy"
      />
    </Fragment>
  );
}

export default KeyboardDatePickerTest;
