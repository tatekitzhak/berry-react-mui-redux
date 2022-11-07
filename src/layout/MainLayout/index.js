import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui

import Grid from '@mui/system/Unstable_Grid';


import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { Avatar, ButtonBase } from '@mui/material'

// project imports
import Breadcrumbs from '@/ui-component/extended/Breadcrumbs';
import HeaderLayout from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import navigation from '@/menu-items/index.js';
import { drawerWidth } from 'store/constant';
import { SET_MENU } from 'store/actions';
import { set_menu } from '@/features/customizationCreateSlice';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// assets
import { IconChevronRight, IconMenu2 } from '@tabler/icons';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${0}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${0}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${0}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        marginTop: "85px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
  }));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = (props) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        //dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
        dispatch(set_menu(!leftDrawerOpened ));
    };

    useEffect(() => {
        // dispatch({ type: SET_MENU, opened: !matchDownMd });
        dispatch(set_menu(!matchDownMd ));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <Box
                position="fixed"
                color="#fff"
                elevation={0}
                sx={{
                    bgcolor: '#e0e0e0',
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
                    borderColor: 'grey.500',
                    marginTop: "68px",
                    width: "260px"
                }}
            >
                {/* <HeaderLayout handleLeftDrawerToggle={handleLeftDrawerToggle} /> */}
                    
                        {/* Sidebar Button icon, drawer open/close */}
                    <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.mediumAvatar,
                                    transition: 'all .2s ease-in-out',
                                    background: theme.palette.secondary.light,
                                    color: theme.palette.secondary.dark,
                                    '&:hover': {
                                        background: theme.palette.secondary.dark,
                                        color: theme.palette.secondary.light
                                    }
                                }}
                                onClick={handleLeftDrawerToggle}
                                color="inherit"
                            >
                                <IconMenu2 stroke={1.5} size="1.3rem" />
                            </Avatar>
                            
                    </ButtonBase>
                    <IconButton variant="rounded" edge="start" color="inherit" aria-label="menu" 
                        sx={{ mr: 2, backgroundColor: '#0081cb', borderRadius: '7px',
                            '&:hover': {
                            background: theme.palette.secondary.dark,
                            color: theme.palette.secondary.light
                        } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: "inline", color: "#000" }}>
                                {'Topics'}
                    </Typography>
            </Box>
            

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <Main theme={theme} open={leftDrawerOpened}>
            <h1>1 -> hello</h1>
                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation()} icon title rightAlign />
                <Outlet />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                        <Grid xs={2} sm={4} key={index}>
                            <Item sx={{padding: "0px"}}>{index + 1}quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal</Item>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
            </Main>
            {/* Customization settings */}
            <Customization />
        </Box>
    );
};

export default MainLayout;
