import React from 'react'
import { Grid, MenuItem, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const foods = [
    {
        value: "Chicken",
        label: "Chicken",
    },
    {
        value: "Steak",
        label: "Steak",
    },
    {
        value: "Vegan",
        label: "Vegan",
    }
]

const RSVP = () => {
    const classes = useStyles();
    const [food, setFood] = React.useState('Chicken')

    const handleChange = (event) => {
      setFood(event.target.value)
    }
  
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h3>RSVP using the form below.</h3>
            <form className={classes.root}>
                <div>
                    <TextField required id="standard-required" label="Your Name"/>
                    <TextField
                        id="standard-multiline-static"
                        label="Guest Name(s)"
                        multiline
                        rows={4}
                    />
                    <TextField required select id="standard-required" onChange={handleChange} value={food} label="Select Dinner">
                        {foods.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField required id="standard-required" label="Some other field"/>
                </div>
            </form>
        </Grid>
    )
}

export default RSVP;