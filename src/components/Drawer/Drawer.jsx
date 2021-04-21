import React from 'react'
import { 
    Drawer as MUIDrawer, 
    ListItem, 
    List,
    ListItemIcon, 
    ListItemText 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



// changes the width of the Material UI drawer
const useStyles = makeStyles({
    drawer: {
        width: '190px'
    }
})

function Drawer() {
    const classes = useStyles();
    // this variable with hold an array of objects to be mapped through for the drawer
    const itemsList = [{
            text: 'Home',
            
        },
        {
            text: 'Wantlist',
            
        },
        {
            text: 'Collection',
            
        },
        {
            text: 'Search',
            
        },
        {
            text: 'Add Record',
            
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
                const { text, icon } = item;
                return (
                <ListItem button key={text}>
                    {/* {icon && <ListItemIcon>{icon}</ListItemIcon>} */}
                    <ListItemText primary={text} />
                </ListItem>
                )})}
            </List>
            </MUIDrawer>
        </div>
    )
}

export default Drawer
