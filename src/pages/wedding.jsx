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
          <h1 className="title">Welcome, Friends & Family</h1>
          <h5>If you've arrived here before getting a save the date or an invitation, this site is still under construction!</h5>
      </Grid>


  )
}

export default Wedding;