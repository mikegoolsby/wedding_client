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

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

const Hotel = () => {
    const classes = useStyles();
  
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h1>Hotel Information</h1>
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
                            Experience sanctuary and scene at The James New York – NoMad, located on the corner of 29th Street and Madison Avenue, near iconic Madison Square Park and the Flatiron District.
                            </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://www.jameshotels.com/" target="_blank">
                    Visit
                    </Button>
                    <Button size="small" color="primary" href="https://thejameshotelnomad.reztrip.com/classic/en/searches/602ea3227ba2a10225e4bb32/hotels/NYCJND/rooms?action=show&controller=landings#?category=" target="_blank">
                    Book
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Hotel;