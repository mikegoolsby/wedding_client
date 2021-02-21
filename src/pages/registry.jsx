import React from 'react'
import { Button, Grid } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Registry = () => {
  
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        // className={classes.root}
        >
            <h1 className="title">Registry Information</h1>
            <Button
                variant="contained"
                color="primary"
                startIcon={<ExitToAppIcon/>}
                href="https://www.amazon.com/wedding/devan-fogle-michael-goolsby--september-2022/registry/3F5C8CZ66OFL5"
                target="_blank"
            >
                Amazon Registry
            </Button>
        </Grid>
    )
}

export default Registry;