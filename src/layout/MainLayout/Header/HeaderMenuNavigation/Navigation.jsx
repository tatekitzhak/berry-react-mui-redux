import * as React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { IconButton, ListItemText, ListItemIcon, Box, Divider, List, Typography, Button, Drawer, useMediaQuery, ListItem, ListItemButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function HeaderMenu() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [breakpointsStatus, SetBreakpointsStatus] = React.useState(false);
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    React.useEffect(() => {

        SetBreakpointsStatus(matchesXs)
    }, [matchesXs]);

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
           
          <IconButton >
            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
            <ExpandLessIcon/>
          </IconButton>
        </Box>
    );
    const drawer = (anchorType) => (
        <Drawer
            anchor={anchorType}
            open={state[anchorType]}
            onClose={toggleDrawer(anchorType, false)}
        >
            {list(anchorType)}
        </Drawer>
    )
    return (
        <div>
            {
                !breakpointsStatus ? ['Home', 'About', 'Explore', 'Contact'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        
                        <NavLink  to={`${anchor.toLowerCase()}`} state={`From ${anchor} Page`} >
                            <Button>{anchor}</Button>
                        </NavLink>
                        {drawer('top')}
                    </React.Fragment>
                )) : <>
                        {drawer('top')}
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            onClick={toggleDrawer('top', true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </>
            }
        </div>
    );
}
