import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Grid, Button} from '@material-ui/core'
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
  } else if (response === false) {
    return "Not yet indicated"
  }
}

const nullHandle = (setNode) => {
  if (setNode.length === 0) {
      return "no search made"
  }
}


const DisplayRsvp = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    const {setNode} = props
    return(
    <Grid 
    container
    direction="column"
    justify="center"
    alignItems="center">
        <div>
        {setNode.map((head) => (
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
                    <Button size="small" color="primary" href="https://thejameshotelnomad.reztrip.com/classic/en/searches/602ea3227ba2a10225e4bb32/hotels/NYCJND/rooms?action=show&controller=landings#?category=" target="_blank">
                    Book
                    </Button>
                </CardActions>
            </Card>
        ))}
        </div>
    </Grid>
    )
}

export default DisplayRsvp;