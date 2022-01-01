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
import mena from '../images/mena.jpg'
import josh from '../images/josh.jpg'
import kyle from '../images/kyle.jpg'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom: 20,
      paddingBottom: 8
    },
    media: {
      height: '200px',
    },
    button: {
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
});

const Groomsmen = () => {
    const classes = useStyles();


    return(
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h2 className="title">The Groomsmen</h2>
            <div>
                <Button className={classes.button} size="medium" color="primary" href="/aboutus">
                    Back to "About Us"
                </Button>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={mena}
                            title="The Mena"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Michael J. Mena, Man of Honor
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Known colloquially as "Mena", there have been few to cross his path that have not been either charmed or given an adult beverage. Mena and the Groom have been friends for nearly 20 years after one nearly ate all the food in the other's house over a long weekend.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={josh}
                            title="The Josh"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Joshua R. LaGrave
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                The kind of guy everyone wants to share a drink with. Josh and the Groom have been friends since high school, where a mutual distaste for social studies and a one, Mena, brought them together. Many broken guitar strings and Krakkens later, they are still friends today.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={kyle}
                            title="The kyle"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Kyle T. O'Leary
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Found behind a movie theater wearing white jeans and a sideways hat, there was no chance this guy wasn't going to be friends with the Groom. Break glass in case fun is needed type of guy, Kyle and the Groom go back over a decade, and have more unreleased tracks than Tupac. 
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
        </Grid>
    )
}

export default Groomsmen;