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
import devbday from '../images/devbday.jpg'
import babylou from '../images/babylou.jpg'
import redbullfam from '../images/redbullfam.jpg'
import thaisnorkel from '../images/thaisnorkel.JPG'
// import thips from '../images/thips.jpg'
// import proposal from '../images/proposal.jpg'
import ididit from '../images/ididit.JPG'
import bridge from '../images/bridge.JPG'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    textal: {
        textAlign: 'center',
        padding: '4px'
    }
});

const About = () => {
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
            <Typography className={classes.textal} variant="body2" component="p">
                So, why "Hinge 2 Hitched"? It's exactly as it seems. We met on Hinge, and never looked back! Here's a picture of Devan realizing how funny Mike is, all the way back in 2019.
            </Typography>
            <img src={devbday} alt="devan and mike from her 28th birthday" width="300" height="auto"></img>
            <Typography className={classes.textal} variant="body2" component="p">
                If you know us, you know our boy Louie is the center of our world. Here he is on his first day home. He was only this size for about 20 minutes, until his love of food started...
            </Typography>
            <img src={babylou} alt="louie the frenchie as a baby" width="300" height="auto"></img>
            <Typography className={classes.textal} variant="body2" component="p">
                Let this serve as notice hereby that fans of the blue team should leave their scarves at home during the wedding festivities.
            </Typography>
            <img src={redbullfam} alt="family wearing red bull kits" width="300" height="auto"></img>
            <Typography className={classes.textal} variant="body2" component="p">
                Yeah, we're a bit adventurous. We snorkeled half way across the world because Mike was in a Thai food kick. Actually, come to think of it, he still is.
            </Typography>
            <img src={thaisnorkel} alt="couple of kids snorkeling" width="300" height="auto"></img>
            <Typography className={classes.textal} variant="body2" component="p">
                We've even climbed a bridge (more than one, actually!) with the promise of wine served in edible chocolate cups before. I promise, we do sometimes participate in activities that are not food-centric. It is rare but it has been documented. Somewhere. 
            </Typography>
            <img src={bridge} alt="mike and devan at the top of a bridge" width="300" height="auto"></img>
            <Typography className={classes.textal} variant="body2" component="p">
                A few short minutes after the proposal. Does she look happy to you? I think she looks pretty happy. Check out the proposal video at the bottom of the page! We were at the top of a mountain in Colorado, overlooking a frozen lake, in the middle of a pandemic. Also, there was a flying robot.
            </Typography>
            <img src={ididit} alt="mike and dev after the proposal" width="300" height="auto"></img>
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