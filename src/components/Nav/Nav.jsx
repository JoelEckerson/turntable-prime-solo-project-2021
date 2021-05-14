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
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../styles';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { useDispatch } from 'react-redux';




const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Nav() {

  const user = useSelector((store) => store.user);
  const classes = useStyles();
  const history = useHistory();
  const [showDrawer, setShowDrawer] = useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    console.log('toggleDrawer = ', open);
    setShowDrawer({open});
  }

  const sendToMessaging = () => {
    history.push('/messaging');
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
    text: 'Collection',
    onClick: () => {history.push("/collection"); setShowDrawer(false)}
},
{
    text: 'Wantlist',
    onClick: () => {history.push("/wantlist"); setShowDrawer(false)}
},
{
    text: 'Search',
    onClick: () => {history.push("/search"); setShowDrawer(false)}
},
{
    text: 'Friends',
    onClick: () => {history.push("/friends"); setShowDrawer(false)}
},
{
    text: 'LogOut',
    onClick: () => {dispatch({ type: 'LOGOUT' }); setShowDrawer(false)}
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
            <AppBar position="sticky" className={classes.app}>
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                    <Typography variant="h6">
                        TurnTable
                    </Typography>
                    <Grid container  justify="flex-end" alignItems="flex-end">
                    <IconButton edge="end" className={classes.menuButton} onClick={sendToMessaging} color="inherit" aria-label="menu">
                    <ChatOutlinedIcon />
                  </IconButton>
                  </Grid>
                </Toolbar>
            </AppBar>
            <div onKeyDown={toggleDrawer(false)}>
            {/* this creates the Material UI drawer */}
              <MUIDrawer open={showDrawer} onClose={(()=>toggleDrawer(false))} className = {classes.drawer}>
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
