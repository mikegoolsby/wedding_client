import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Grid, Button, Typography, Card, CardActionArea, CardMedia} from '@material-ui/core'
import wtc from '../images/1wtc.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '375px',
      maxWidth: 345,
      marginBottom: 11,
      paddingBottom: 0,
      textAlign: 'center',
    },
    button: {
        margin: theme.spacing(1),
    },
    media: {
      height: 420,
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


    const classes = useStyles();
  return (
    <Grid 
    container
    direction="column"
    justify="center"
    alignItems="center">
      <h1 className="title">Confirm Your Reservation Below</h1>
      <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={wtc}
                        title="in a field"
                    />
                </CardActionArea>
            </Card>
        <form className={classes.root}
          noValidate
          autoComplete="off"
          color="primary"
          action='https://www.theknot.com/goolsby'
          method="get"
          target="_blank"
        >
        <Grid item xs={6}>
            {/* <TextField
              id="standard-basic"
              label="First Name"
              name="first_name"
              value={searchValue}
              onChange={handleSearchInputChanges}
            /> */}
        </Grid>
        
        <Typography className={classes.textal} variant="body2" component="p">Please click below to begin the RSVP process. Note, this will take you to another site. We can't wait to see you all!</Typography>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<CheckCircleIcon>RSVP</CheckCircleIcon>}
            // eslint-disable-next-line no-restricted-globals
            value="RSVP"
            >
              RSVP
          </Button>
        </Grid>
        </form>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
    </Grid>
  )
}

export default Search