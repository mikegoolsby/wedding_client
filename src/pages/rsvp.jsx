import React from 'react'
import { Button, Grid, MenuItem, TextField } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {FormLabel, FormControlLabel, RadioGroup, FormGroup, Radio} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '375px',
    },
    textField: {
        width: '375px'
    },
    button: {
        margin: theme.spacing(1),
    },
    radio: {
        color: "#7b1fa2" 
    }
}));

const foods = [
    {
        value: "Salmon",
        label: "Grilled Salmon w/ capered cream sauce",
    },
    {
        value: "Filet Mignon",
        label: "Herb Filet Mignon w/ frizzled onions",
    },
    {
        value: "Mushroom",
        label: "Mushroom Ravioli, Chef's white cream sauce w/ herbs",
    }
]

const RSVP = () => {
    const classes = useStyles();
    const [food, setFood] = React.useState('Salmon')
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setFood(event.target.value)
    }

    const handleChangeCheck = (event) => {
      setChecked(event.target.checked)
    }
  
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h1 className="title">Be our guest, be our guest!</h1>
            <form className={classes.root} action={`https://goolsby-wedding-api.herokuapp.com/rsvp`} method="POST">
                <div>
                    <TextField required id="standard-required" size="normal" margin="normal" style={{ margin: 8, width: '365px' }} label="First Name" name="first_name"/>
                    <TextField required id="standard-required" size="normal" margin="normal" style={{ margin: 8, width: '365px' }} label="Last Name" name="last_name"/>
                    <FormLabel component="legend" id="padme">Your Response</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="true" control={<Radio onChange={handleChangeCheck}
                        />}label="Accepts with Pleasure"/>
                        <FormControlLabel value="false" control={<Radio onChange={handleChangeCheck}/>} label="Declines Regretfully" />
                    </RadioGroup>
                    {/* <TextField
                        id="standard-multiline-static"
                        label="Guest Name(s)"
                        multiline
                        margin="normal"
                        style={{ margin: 8, width: '365px' }}
                        size="normal"
                        rows={4}
                    /> */}
                    <TextField required select id="standard-required" size="normal" margin="normal" style={{ margin: 8, width: '365px' }} onChange={handleChange} value={food} label="Select Dinner">
                        {foods.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="standard-required" margin="normal" size="normal" style={{ margin: 8, width: '365px' }} label="Request a song" helperText="Enter an artist followed by a song title"/>
                </div>
            </form>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                // disabled
                endIcon={<CheckCircleIcon>RSVP</CheckCircleIcon>}
                onClick={() => { alert("Oops! Can't RSVP yet!") }}
            >
                RSVP
            </Button>
        </Grid>
    )
}

export default RSVP;