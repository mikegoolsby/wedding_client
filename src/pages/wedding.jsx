import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        fontSize: '95%',
        textAlign: 'center',
        // fontFamily: [
        //     'Ballet',
        //     'cursive'
        // ].join(',')
    }
})

const Wedding = () => {
  const classes = useStyles();

  return (
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
      >
          <h1>Welcome, Friends & Family</h1>
      </Grid>


  )
}

export default Wedding;