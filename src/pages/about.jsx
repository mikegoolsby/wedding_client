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
import field1 from '../images/field1.jpg'


const useStyles = makeStyles({
    root: {
        maxWidth: 365,
        marginBottom: 8,
        paddingBottom: 8
    },
    textal: {
        textAlign: 'center',
        padding: '4px'
    },
    media: {
        height: '370px',
        width: '100%',
        display: 'block',
        margin: 'auto'
    },
    button: {
        paddingBottom: '20px'
    },
    first: {
        height: '350px',
        width: '100%',
        display: 'block',
        margin: 'auto'
    }
});

const About = (props) => {
    const {photo} = props
    const classes = useStyles();
  
    return (
        <>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h1 className="title">About Us</h1>
            <div>
            <Button className={classes.button} size="medium" color="primary" href="/bridesmaids">
                Meet the Bridesmaids
            </Button>
            <Button className={classes.button} size="medium" color="primary" href="/groomsmen">
                Meet the Groomsmen
            </Button>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.first}
                        image={field1}
                        title="In a field"
                    />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Here are some fun facts and photos from our lives together over the last few years. And while we can't wait to look forward to our future, we know how important it is to stop and look back and the memories we've had and the friends and family we've shared them with along the way.
                            </Typography>
                        </CardContent>
                </CardActionArea>
            </Card>
            {photo.map((photo) => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={photo.url}
                            title={photo.alt}
                        />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {photo.caption}
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            </div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="iframe"
                    alt="engagement video"
                    height="315"
                    src="https://www.youtube.com/embed/ZsyHEd1bpvo"
                    title="Engagement Video"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Dillon, CO - January 8th, 2021
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        It was the best kept secret... Mike and Devan went on a ski trip to Vail, CO in January 2021 for Devan's 30th birthday, and left engaged to be married!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://youtu.be/ZsyHEd1bpvo" target="_blank">
                    View on YouTube
                    </Button>
                </CardActions>
            </Card>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Grid>
        </>
    )
}

export default About;