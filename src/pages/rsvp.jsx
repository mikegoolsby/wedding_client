import React from 'react'
import { Button, Grid, MenuItem, TextField } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {FormLabel, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';

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

const initialFValues = {
    id: 0,
    first_name: '',
    last_name: '',
    attending: null,
    food: '',
    song: ''
}

// const url = "https://goolsby-wedding-api.herokuapp.com"

function RSVP() {


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
  
const classes = useStyles();
const [food, setFood] = React.useState('Salmon')
const [checked, setChecked] = React.useState(true);
const [values, setValues] = React.useState(initialFValues);
    
const handleChange = (event) => {
    setFood(event.target.value)
}

// const handleInputChange = (e) => {
//   const {first_name, value} = e.target
//   setValues({
//       ...values,
//       [first_name]: value
//   })
// }

const handleChangeCheck = (event) => {
    setChecked(event.target.checked)
}

    return(
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h1 className="title">Be our guest, be our guest!</h1>
            <form className={classes.root}>
            <Grid item xs={6}>
                <TextField required id="standard-required" size="normal" margin="normal" style={{ margin: 8}} label="First Name" name="first_name" />
            </Grid>
            <Grid item xs={6}>
                <TextField required id="standard-required" size="normal" margin="normal" style={{ margin: 8}} label="Last Name" name="last_name"/>
            </Grid>
            <Grid container xs={12} direction="row" justify="center">
                <FormLabel component="legend" id="padme">Your Response</FormLabel>
            </Grid>
            <Grid container xs={12} direction="row" justify="center">
                <RadioGroup>
                    <FormControlLabel value="true" control={<Radio onChange={handleChangeCheck}
                    />}label="Accepts with Pleasure"/>
                    <FormControlLabel value="false" control={<Radio onChange={handleChangeCheck}/>} label="Declines Regretfully" />
                </RadioGroup>
            </Grid>
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
            </form>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                // disabled
                type="submit"
                endIcon={<CheckCircleIcon>RSVP</CheckCircleIcon>}
                // onClick={handleCreate}
            >
                RSVP
            </Button>
        </Grid>
    )
}


export default RSVP;