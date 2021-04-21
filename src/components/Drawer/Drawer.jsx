import React from 'react'
import { 
    Drawer as MUIDrawer, 
    ListItem, 
    List,
    ListItemIcon, 
    ListItemText 
} from '@material-ui/core'

function Drawer() {
    return (
        <div>
            <MUIDrawer variant="permanent">
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            </MUIDrawer>
        </div>
    )
}

export default Drawer
