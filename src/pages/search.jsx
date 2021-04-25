import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Grid, Button} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import midtownloft from '../images/midtownloft.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '375px',
      maxWidth: 345,
      marginBottom: 11,
      paddingBottom: 16
    },
    button: {
        margin: theme.spacing(1),
    },
    media: {
      height: '200px',
    },
}));

const ifAttending = (response) => {
  if (response === true) {
    return "Attending"
  } else {
    return "Not Attending"
  }
}

const handleSubmit = (e) => {
  console.log(e)
}

const Search = (props) => {
  const {listHead} = props
    const classes = useStyles();
  return (
    <Grid 
    container
    direction="column"
    justify="center"
    alignItems="center">
      <h1 className="title">Confirm Your Reservation Below</h1>
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
        <div>
          {listHead.map((head) => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={midtownloft}
                            title="guest"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {head.first_name_root} {head.last_name_root}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  {ifAttending(head.attending)}
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="www.hinge2hitched.com" target="_blank" disabled>
                        Edit RSVP
                        </Button>
                        {/* <Button size="small" color="primary" href="https://thejameshotelnomad.reztrip.com/classic/en/searches/602ea3227ba2a10225e4bb32/hotels/NYCJND/rooms?action=show&controller=landings#?category=" target="_blank">
                        Book
                        </Button> */}
                    </CardActions>
                </Card>
          ))}
            </div>
    </Grid>
  )
}

export default Search