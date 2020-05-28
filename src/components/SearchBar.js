import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { SearchContext } from './Context/SearchContext';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
  inputControl:{
    minWidth: "80%",
  },
  formControl: {
    minWidth: 150,
  },
  cardRoot: {
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%",
    textAlign: "center",
  },
  cardContent: {
    display: "inline-block"
  }
}));

export default function SearchBar() {
  const classes = useStyles();
  const {setSearchString, searchType, setSearchType} = useContext(SearchContext);
  
  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchString(event.target.value)
  };

  return (
    <Card className={classes.cardRoot}>
        <CardContent className={classes.content}>
            <form className={classes.root} noValidate autoComplete="off">
                
            <TextField className={classes.inputControl} id="outlined-basic" label="Search" variant="outlined" onChange={handleSearch} />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Search by</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={searchType}
                onChange={handleChange}
                label="searchType"
                >
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"country"}>Country</MenuItem>
                <MenuItem value={"city"}>City</MenuItem>
                </Select>
            </FormControl>
            </form>
        </CardContent>
    </Card>
  );
}
