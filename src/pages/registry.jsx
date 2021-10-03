import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header';

const useStyles = makeStyles({
    root: {
        fontSize: '95%',
        textAlign: 'center',
        padding: '4px'
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
        className={classes.root}
        >
            <h1 className="title">Registry Information</h1>
            <Typography className={classes.root} variant="body2" component="p">We've consolidated our registries into one convenient place. You can find everything we've added at the button below! Thank you!</Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<ExitToAppIcon/>}
                href="https://registry.theknot.com/devan-fogle-michael-goolsby-september-2022-ny/44190308"
                target="_blank"
            >
                Browse our Registry
            </Button>
        </Grid>
    )
}

export default Registry;