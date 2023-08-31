import * as React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Avatar, IconButton, ListItemText, ListItemIcon, Box, Grid, Menu, MenuItem, Divider, List, Typography, Button, Drawer, useMediaQuery, ListItem, ListItemButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
    const list = (anchor) => (
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
            { // Large screen BreakpointsStatus
                !breakpointsStatus ? menuItems.map((anchor, index) => (
                    <React.Fragment key={anchor}>

                        <NavLink to={`${anchor.toLowerCase()}`} state={`From ${anchor} Page`} >
                            <Button>{anchor}</Button>
                        </NavLink>
                        {/* <Grid item>
                            <Grid container justifyContent="space-between">

                                <Grid item>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.mediumAvatar,
                                            backgroundColor: theme.palette.secondary.dark,
                                            color: theme.palette.secondary[200],
                                            zIndex: 1
                                        }}
                                        aria-controls="menu-earning-card"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreHorizIcon fontSize="inherit" />
                                    </Avatar>
                                    <Menu
                                        id="menu-earning-card"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        variant="selectedMenu"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right'
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            Import Card
                                            </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            Copy Data
                                            </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            Export
                                            </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            Archive File
                                            </MenuItem>
                                    </Menu>
                                </Grid>
                            </Grid>
                        </Grid> */}
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
                            <MenuIcon />
                        </IconButton>
                    </>
            }
        </div>
    );
}
