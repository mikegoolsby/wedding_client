import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: [
            'Dancing Script',
            'cursive'
        ].join(',')
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
          <h1>September the 17th, 2022</h1>
      </Grid>


  )
}

export default Wedding;