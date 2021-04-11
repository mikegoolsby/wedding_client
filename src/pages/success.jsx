import React from 'react'
import { Grid, makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ring from '../images/ringco.jpg'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
    },
});

const Success = () => {

    const classes = useStyles();
  
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h1 className="title">Thank you for your response!</h1>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={ring}
                    title="ring"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Where to now?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        If you've responded in the affirmative, please consider booking a hotel in the area. Mike & Devan have provided hotel information below. <b>If you have additional guests to add, please ensure you go back and fill out RSVP cards for them as well!</b> We cannot wait to see you all, and we'll miss those of you who can't be with us!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="/hotels">
                    Hotel Information
                    </Button>
                    <Button size="small" color="primary" href="/">
                    Wedding Information
                    </Button>
                </CardActions>
            </Card>   
        </Grid>
    )
}

export default Success;