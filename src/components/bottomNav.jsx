import React from 'react'
import { BottomNavigation, BottomNavigationAction }from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import WcIcon from '@material-ui/icons/Wc';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HotelIcon from '@material-ui/icons/Hotel';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflow: 'hidden',
        position: 'fixed',
        color: "#46385e",
        bottom: 0,
    },
    textStyle: {
        color: "#46385e",
        padding: '2px',
        width: '100%',
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
          <BottomNavigationAction className={classes.textStyle} label="The Wedding" icon={<WcIcon />} />
          <BottomNavigationAction className={classes.textStyle} label="About Us" icon={<FavoriteIcon />} />
          <BottomNavigationAction className={classes.textStyle} label="Bridal Party" icon={<EmojiPeopleIcon/>} />
          <BottomNavigationAction className={classes.textStyle} label="RSVP" icon={<CheckBoxIcon />} />
          <BottomNavigationAction className={classes.textStyle} label="Stay in NYC" icon={<HotelIcon/>} />
      </BottomNavigation>
  )
}

export default Nav;