import React from 'react'
import {Link} from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction}from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import WcIcon from '@material-ui/icons/Wc';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HotelIcon from '@material-ui/icons/Hotel';
// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import RedeemIcon from '@material-ui/icons/Redeem';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 60,
        overflow: 'scroll',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#eeeeee',
        fontSize: '5px'
    },
    textStyle: {
        paddingLeft: '.5px',
        paddingRight: '.5px',
        width: '90%',
        fontSize: '5px'
    }
});

const Nav = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }

  return (
      <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleChange(event, newValue)}
      className={classes.root}
      >
          <BottomNavigationAction className={classes.textStyle} label="Wedding" component={Link} to="/"icon={<WcIcon />} />
          <BottomNavigationAction className={classes.textStyle} label="About Us" component={Link} to="/aboutus" icon={<FavoriteIcon />} />
          <BottomNavigationAction className={classes.textStyle} label="RSVP" component={Link} to="/rsvp" icon={<CheckBoxIcon />} />
          <BottomNavigationAction className={classes.textStyle} label="Stay in NYC" component={Link} to="/hotels" icon={<HotelIcon/>} />
          <BottomNavigationAction className={classes.textStyle} label="Registry" component={Link} to="/registry" icon={<RedeemIcon/>} />
      </BottomNavigation>
  )
}

export default Nav;