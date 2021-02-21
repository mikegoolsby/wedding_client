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


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
});

const About = () => {
    const classes = useStyles();
  
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h1 className="title">About Us</h1>
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
            <h3>bridal party information</h3>
        </Grid>
    )
}

export default About;