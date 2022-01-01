import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// eslint-disable-next-line
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// eslint-disable-next-line
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import brit from '../images/brit.jpg'
import syd from '../images/syd.jpg'
import elena from '../images/elena.jpg'
import sloane from '../images/sloane.jpg'

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

const Bridesmaids = () => {
    const classes = useStyles();


    return(
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h2 className="title">The Bridesmaids</h2>
            <div>
            <Button className={classes.button} size="medium" color="primary" href="/aboutus">
                Back to "About Us"
            </Button>
            <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={sloane}
                            title="Sloane"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Sloane Jennings, Matron of Honor
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Sloane is the Bride's cousin and first best friend, and they share several lifelong memories together, like playing in Grandma's cabinets, dressing up in matching clothing, and graduating at the same time (twice). I verified that dress-up, cabinet play, and  the graduations happened several years apart.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={brit}
                            title="Britny"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Britny Lewis
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Born and raised in New York City, Britny is one of the Bride's closest friends and fellow attorney. The Lewis household will always have a warm meal and a cold beverage for you, and if you're lucky, they stopped by Arthur Ave earlier in the day and have a charcuterie board waiting. 
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={syd}
                            title="The Josh"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Sydney Smith
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                One of Canada's proudest exports, you will always find 
                                Syd having a laugh somewhere near a recently-parked CitiBike. She shares a special bond with the Bride's dog, Louie, having shared tortilla chips on the couch together one night. He hasn't forgotten. 
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={elena}
                            title="The kyle"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Elena Levit
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Elena, a fellow Terrapin-turned-New Yorker, is always willing to break the ice and will never leave an appetizer unfinished. That, I respect. 
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

export default Bridesmaids;