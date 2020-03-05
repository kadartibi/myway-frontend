import React, { useContext } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { NewTripContext } from "./Context/NewTripContext";
import Grid from "@material-ui/core/Grid";

export default function CheckboxLabels() {
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

  const [state, setState] = React.useState({
    Plane: false,
    OwnMotorizedVehicle: false,
    RentalCar: false,
    Bicycle: false,
    Walk: false,
    PublicTransport: false,
    ByHorseOrCamel: false
  });
  const handleListOfTravelTypes = type => {
    if (travelType.includes(type)) {
      let travelTypeArray = travelType;
      const index = travelTypeArray.indexOf(type);
      if (index > -1) {
        travelTypeArray.splice(index, 1);
      }
      setTravelType(travelTypeArray);
    } else {
      setTravelType([...travelType, type]);
    }
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    handleListOfTravelTypes(event.target.value);
  };

  return (
    <FormGroup>
      <Grid container spacing={3} alignItems="flex-start" justify="flex-start">
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Plane}
                onChange={handleChange("Plane")}
                value="Plane"
                color="primary"
              />
            }
            label="Plane"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.OwnMotorizedVehicle}
                onChange={handleChange("OwnMotorizedVehicle")}
                value="Own Motorized Vehicle"
                color="primary"
              />
            }
            label="Own Motorized Vehicle"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.RentalCar}
                onChange={handleChange("RentalCar")}
                value="Rental Car"
                color="primary"
              />
            }
            label="Rental Car"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Bicycle}
                onChange={handleChange("Bicycle")}
                value="Bicycle"
                color="primary"
              />
            }
            label="Bicycle"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Walk}
                onChange={handleChange("Walk")}
                value="Walk"
                color="primary"
              />
            }
            label="Walk"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.PublicTransport}
                onChange={handleChange("PublicTransport")}
                value="Public Transport"
                color="primary"
              />
            }
            label="Public Transport"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.ByHorseOrCamel}
                onChange={handleChange("ByHorseOrCamel")}
                value="By Horse Or Camel"
                color="primary"
              />
            }
            label="By Horse Or Camel"
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
}
