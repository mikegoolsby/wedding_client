import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import james from '../images/thejames.jpg'
import cambria from '../images/cambria.jpg'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom: 8,
      paddingBottom: 8
    },
    media: {
      height: '200px',
    },
});

const advancedTickets = (value) => {
  if (value === 'views') {
      return "Advanced purchase of tickets required"
  }
}

// const headerType = (funType) => {
//   if (funType === 'views') {
//       return 'Panoramic City Views'
//   } else if (funType === 'parks') {
//       return 'City Parks'
//   } else if (funType === 'sights') {
//       return 'Outdoor Sights'
//   } else {
//       return 'Shopping'
//   }
// }

const Hotel = (props) => {
    const {toDo} = props
    const classes = useStyles();
  
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h1 className="title">Hotel Information</h1>
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={james}
                            title="The James"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The James New York
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                The bride and groom will be staying here. Experience sanctuary and scene at The James New York – NoMad, located on the corner of 29th Street and Madison Avenue, near iconic Madison Square Park and the Flatiron District.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://www.jameshotels.com/" target="_blank">
                        Visit
                        </Button>
                        <Button size="small" color="primary" href="https://thejameshotelnomad.reztrip.com/classic/en/special_offer?action=show&controller=landings&locale=en&rate_code%5B%5D=FOGLEW&rate_code%5B%5D=FOGLEW&starting_page=special_offer" target="_blank">
                        Book
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={cambria}
                            title="Cambria Hotel Chelsea"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Cambria Hotel Chelsea
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Experience the best of Chelsea at the Cambria Hotel. A gracious hub of hospitality in Manhattan, our modern hotel features all the essentials for business and leisure travelers.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://www.cambrianycchelsea.com/" target="_blank">
                        Visit
                        </Button>
                        <Button size="small" color="primary" href="https://www.choicehotels.com/reservations/groups/FJ36D5" target="_blank">
                        Book
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <h1 className="title">Welcome to New York, New York!</h1>
            <div>
            {toDo.map((toDo) => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={toDo.image}
                            title={toDo.name}
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {toDo.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {toDo.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>{advancedTickets(toDo.fun_type)}</b>
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href={toDo.url} target="_blank">
                        Visit
                        </Button>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {toDo.address}
                            </Typography>
                    </CardActions>
                </Card>
            ))}
            </div>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
        </Grid>
    )
}

export default Hotel;