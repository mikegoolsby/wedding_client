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
          <h5>We're so happy to celebrate our wedding with you all!</h5>
          {/* <img className="splash" 
          src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/136d0e9c-3497-402a-ad61-09e7b5c268a4/298ccaaf-a143-4775-b211-b2d4e4d1e363_rw_1920.jpg?h=2329d5c4d072941dc40b9f7b2572d89c"
          alt="image of bride and groom and their dog"></img> */}

      </Grid>


  )
}

export default Wedding;