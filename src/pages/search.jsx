import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Grid, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '375px',
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const handleSubmit = (e) => {
  console.log(e)
}

const Search = (props) => {
    const classes = useStyles();
  return (
    <Grid 
    container
    direction="column"
    justify="center"
    alignItems="center">
        <form className={classes.root} noValidate autoComplete="off"         color="primary">
        <Grid item xs={6}>
            <TextField id="standard-basic" label="First Name" name="first_name"/>
        </Grid>
        <Grid item xs={6}>
            <TextField id="standard-basic" label="Last Name" name="last_name"/>
        </Grid>
        </form>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<CheckCircleIcon>RSVP</CheckCircleIcon>}
            onClick={handleSubmit}
            >
            Search
        </Button>
    </Grid>
  )
}

export default Search