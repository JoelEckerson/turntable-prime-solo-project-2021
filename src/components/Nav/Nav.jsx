import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import { 
  Drawer as MUIDrawer,
  Typography, 
  AppBar, 
  Button,
  Card, CardActions, CardContent, CardMedia, 
  CssBaseline, 
  Grid, 
  Toolbar, 
  Container,
  ListItem, 
  List,
  ListItemIcon, 
  ListItemText
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../styles';
import { useState } from 'react';
import {withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


function Nav(props) {

  const user = useSelector((store) => store.user);
  const classes = useStyles();
  const {history} = props;
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
      setShowDrawer({open})
  }

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  const itemsList = [{
    text: 'Home',
    onClick: () => {history.push("/"), setShowDrawer(false)}
},
{
    text: 'Wantlist',
    onClick: () => {history.push("/wantlist"); setShowDrawer(false)}
},
{
    text: 'Collection',
    onClick: () => {history.push("/collection"); setShowDrawer(false)}
},
{
    text: 'Search',
    onClick: () => {history.push("/search"); setShowDrawer(false)}
},
{
    text: 'Recommendations',
    
},
{
    text: 'LogOut',
}];

  return (
    // <div className="nav">
    //   <Link to="/home">
    //     <h2 className="nav-title">Prime Solo Project</h2>
    //   </Link>
    //   <div>
    //     <Link className="navLink" to={loginLinkData.path}>
    //       {loginLinkData.text}
    //     </Link>

    //     {user.id && (
    //       <>
    //         <Link className="navLink" to="/info">
    //           Info Page
    //         </Link>
    //         <LogOutButton className="navLink" />
    //       </>
    //     )}

    //     <Link className="navLink" to="/about">
    //       About
    //     </Link>
    //   </div>
    // </div>
    <>
        <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                    <Typography variant="h6">
                        TurnTable
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
            {/* this creates the Material UI drawer */}
            <MUIDrawer open={showDrawer} className = {classes.drawer}>
            <List>
                {itemsList.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                <ListItem button key={text} onClick={onClick}>
                    {/* {icon && <ListItemIcon>{icon}</ListItemIcon>} */}
                    <ListItemText primary={text} />
                </ListItem>
                )})}
            </List>
            </MUIDrawer>
        </div>
    </>
  );
}

export default withRouter(Nav);
