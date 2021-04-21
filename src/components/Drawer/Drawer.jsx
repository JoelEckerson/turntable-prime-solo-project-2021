import React from 'react'
import { 
    Drawer as MUIDrawer, 
    ListItem, 
    List,
    ListItemIcon, 
    ListItemText 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    drawer: {
        width: '160px'
    }
})

function Drawer() {
    const classes = useStyles();
    const itemsList = [{
            text: 'Home'
        },
        {
            text: 'Wantlist'
        },
        {
            text: 'Collection'
        },
        {
            text: 'Search'
        },
        {
            text: 'Add Record'
        },
        {
            text: 'Recommendations'
        }];
    return (
        <div>
            <MUIDrawer variant="permanent" className = {classes.drawer}>
            <List>
                {itemsList.map((item, index) => {
                const { text } = item;
                return (
                <ListItem button key={text}>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={text} />
                </ListItem>
                )})}
            </List>
            </MUIDrawer>
        </div>
    )
}

export default Drawer
