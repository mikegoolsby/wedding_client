import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Grid, Button, Typography} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '375px',
      maxWidth: 345,
      marginBottom: 11,
      paddingBottom: 16,
      textAlign: 'center',
    },
    button: {
        margin: theme.spacing(1),
    },
    media: {
      height: '200px',
    },
    textal: {
      padding: '4px',
      textAlign: 'center'
    }
}));


// eslint-disable-next-line
const handleSubmit = (e) => {
  console.log(e)
}

const Search = (props) => {
  const {setNode} = props

  const [searchValue, setSearchValue] = useState("")

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("");
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    setNode(searchValue);
    resetInputField();
  }

    const classes = useStyles();
  return (
    <Grid 
    container
    direction="column"
    justify="center"
    alignItems="center">
      <h1 className="title">Confirm Your Reservation Below</h1>
        <form className={classes.root}
          noValidate
          autoComplete="off"
          color="primary"
        >
        <Grid item xs={6}>
            <TextField
              id="standard-basic"
              label="First Name"
              name="first_name"
              value={searchValue}
              onChange={handleSearchInputChanges}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField id="standard-basic" label="Last Name" name="last_name"/>
        </Grid>
        <Typography className={classes.textal} variant="body2" component="p">We've disabled this part of our website for now. You'll be able to verify your attendance after invitations are sent out!</Typography>
        </form>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<CheckCircleIcon>RSVP</CheckCircleIcon>}
          onClick={callSearchFunction}
          value="SEARCH"
          disabled
        >
            Search
        </Button>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
    </Grid>
  )
}

export default Search