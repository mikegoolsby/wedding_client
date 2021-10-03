import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        fontSize: '95%',
        textAlign: 'center',
    }
})

const Header = () => {
    const classes = useStyles()

    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
        >
            <h1 className="title-header">Devan & Mike<br/>September 17th, 2022<br/>New York, NY</h1>
        </Grid>
    )
}

export default Header;