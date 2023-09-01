import * as React from 'react';
import { NavLink, Link, matchPath, useLocation, Outlet, useParams } from 'react-router-dom';
import { Avatar, IconButton, ListItemText, ListItemIcon, Box, Grid, Menu, MenuItem, Divider, List, Typography, Button, Drawer, useMediaQuery, ListItem, ListItemButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// https://codesandbox.io/s/laughing-cori-3iuw8h?file=/demo.js:306-315
function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}

export default function HeaderMenu() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [menuItems, setMenuItems] = React.useState(['Products', 'Services', 'Explore', 'Pricing', 'Contact']);
    const [breakpointsStatus, SetBreakpointsStatus] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [tabValue, setTabValue] = React.useState('Products');
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    React.useEffect(() => {

        SetBreakpointsStatus(matchesXs)
    }, [matchesXs]);

    // Mobile BreakpointsStatus
    function list(anchor) {

        return (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>

                                <NavLink to={`${text.toLowerCase()}`} state={`From ${text} Page`} >
                                    <ListItemText primary={text} />
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Sign In', 'Sign up'].map((text, index) => (
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
                    <ExpandLessIcon />
                </IconButton>
            </Box>
        );
    }
    const drawer = (anchorType) => (
        <Drawer
            anchor={anchorType}
            open={state[anchorType]}
            onClose={toggleDrawer(anchorType, false)}
        >
            {list(anchorType)}
        </Drawer>
    )
    const routeMatch = useRouteMatch(['Products', 'Services', 'Explore', 'Pricing', 'Contact']);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <>
            { // Large screen BreakpointsStatus //tabValue, setTabValue
                !breakpointsStatus ?
                    <Tabs 
                        value={currentTab}
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        {
                            menuItems.map(function (anchor, index) {

                                return (
                                    <Tab key={anchor} label={anchor} value={anchor} to={`${anchor.toLowerCase()}`} component={Link}>
                                    </Tab>
                                )
                            })
                        }
                    </Tabs> : <>
                        {drawer('top')}
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            onClick={toggleDrawer('top', true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </>
            }
        </>
    );
}
