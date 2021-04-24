import React from 'react'
import { 
    Drawer as MUIDrawer, 
    ListItem, 
    List,
    ListItemIcon, 
    ListItemText 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';



// changes the width of the Material UI drawer
const useStyles = makeStyles({
    drawer: {
        width: '190px'
    }
});



function Drawer(props) {
    const {history} = props;
    const classes = useStyles();
    // this variable with hold an array of objects to be mapped through for the drawer
    const itemsList = [{
            text: 'Home',
            onClick: () => history.push("/")
        },
        {
            text: 'Wantlist',
            onClick: () => history.push("/wantlist")
        },
        {
            text: 'Collection',
            onClick: () => history.push("/collection")
        },
        {
            text: 'Search',
            onClick: () => history.push("/search")
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
            <MUIDrawer variant="permanent" className = {classes.drawer}>
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
