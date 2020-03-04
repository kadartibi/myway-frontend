import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    Plane: false,
    OwnMotorizedVehicle: false,
    RentalCar: false,
    Bicycle: false,
    Walk: false,
    PublicTransport: false,
    ByHorseOrCamel: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
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
    </FormGroup>
  );
}
