import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {Typography, Button} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import useStyles from '../styles';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
    <Typography>
      <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>With TurnTable you'll not only be able to keep and accurate list of all your vinyl; 
        you'll also be able to connect with friends and trade records! 
        Update your Wantlist so you always know what to keep an eye out for when out browsing!</p>
      <p>Your ID is: {user.id}</p>
      </div>
      </Typography>
      <Button className={classes.logoutButton} onClick={() => dispatch({ type: 'LOGOUT' })} variant="outlined" size="small" color="primary">Log Out</Button>
      {/* <LogOutButton className="btn" /> */}
    </>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;
