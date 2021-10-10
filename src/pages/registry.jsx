import React from 'react'
import { Button, Grid, Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import lift from '../images/lift.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: 8,
        paddingBottom: 8
    },
    media: {
        height: 500,
    },
    textal: {
        textAlign: 'center'
    },
    button: {
        marginBottom: 80,
    }
})

const Registry = () => {

    const classes = useStyles();
  
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <h1 className="title">Registry Information</h1>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={lift}
                        title="in a field in front of wtc"
                    />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            We've consolidated our registries into one convenient place. You can find everything we've added at the button below! Thank you!
                            </Typography>
                        </CardContent>
                </CardActionArea>
            </Card>
            <Button
                variant="contained"
                color="primary"
                startIcon={<ExitToAppIcon/>}
                href="https://registry.theknot.com/devan-fogle-michael-goolsby-september-2022-ny/44190308"
                target="_blank"
                className={classes.button}
            >
                Browse our Registry
            </Button>
        </Grid>
    )
}

export default Registry;