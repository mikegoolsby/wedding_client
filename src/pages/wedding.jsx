import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
// eslint-disable-next-line 
import Box from '@mui/material/Box';
// eslint-disable-next-line 
import Paper from '@mui/material/Paper';
// import Header from '../components/header';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mlt from '../images/mlt.jpeg'
import shed from '../images/shed.jpg'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom: 8,
      paddingBottom: 8
    },
    media: {
      height: '420px',
    },
    textal: {
        textAlign: 'center',
        marginBottom: '8px',
        padding: '4px',
        color: '#6d6d6d'
    }
});

const Wedding = () => {
  const classes = useStyles();

  return (
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      >
          <h1 className="bigger">Devan & Mike</h1>
          <h2 className="under-score">September 17th, 2022</h2>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={shed}
                        title="in a field"
                    />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            We can't wait to celebrate our love with the people that mean the most to us! We created this website to include all of the information you'll need about our big day.
                            </Typography>
                        </CardContent>
                </CardActionArea>
            </Card>
          <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={mlt}
                        title="Midtown Loft and Terrace"
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h5">
                                Midtown Loft and Terrace
                            </Typography>
                            <Typography variant="h6" component="p">
                                Saturday September 17th, 2022 <br/>Ceremony at 5:15 PM
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Ceremony, cocktail hour, and reception.. It'll all happen here in the shadow of NYC's most iconic skycraper, the Empire State Building. The venue is located on the corner of East 29th Street and 5th Avenue in Midtown Manhattan.
                            </Typography>
                            <br/>
                            <br/>
                            <br/>
                            <Typography variant="h6" component="p">
                                The wedding requires formal attire.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            For women: A floor-length gown, a fancy cocktail dress, or a dressy pantsuit.
                            <br/>
                            For men: A formal dark suit and tie.
                            </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://www.google.com/maps/place/Midtown+Loft+%26+Terrace/@40.7453024,-73.9886028,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a62f533d6f:0xbd9584d3596ff5bf!8m2!3d40.745367!4d-73.9865816" target="_blank">
                    Directions
                    </Button>
                    <Button size="small" color="primary" href="https://www.google.com/maps/search/parking/@40.7451947,-73.9886242,17z" target="_blank">
                    Parking Near MLT
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" component="p">
                            Per Mayoral Executive Order issued on August 25th, 2021, people 12 and older are required to show identification and proof they have received at least one dose of a COVID-19 vaccine to enter indoor dining and indoor entertainment spaces. As such, proof of vaccination will be required to attend our wedding.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://www1.nyc.gov/site/doh/covid/covid-19-vaccines-keytonyc.page" target="_blank">
                        More Information
                    </Button>
                </CardActions>
            </Card>
            <br/>
            <br/>
            <br/>
      </Grid>


  )
}

export default Wedding;