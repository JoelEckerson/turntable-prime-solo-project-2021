import React from 'react'
import { 
    Drawer as MUIDrawer, 
    Button,
    ListItem, 
    List,
    ListItemIcon, 
    ListItemText 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import { useState } from 'react';



// changes the width of the Material UI drawer
const useStyles = makeStyles({
    drawer: {
        width: '190px'
    }
});



function Drawer(props) {



    const {history} = props;
    const classes = useStyles();
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setShowDrawer({open})
    }

    // this variable with hold an array of objects to be mapped through for the drawer
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
        <div>
            {/* this creates the Material UI drawer */}
            <Button onClick={toggleDrawer(true)}>...</Button>
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
    )
}

export default withRouter(Drawer);
