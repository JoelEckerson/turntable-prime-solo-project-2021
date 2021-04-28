import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {Typography, Button} from '@material-ui/core'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <Typography>
      <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      </div>
      </Typography>
      <Button  size="small" color="primary">Log Out</Button>
      <LogOutButton className="btn" />
    </>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;
