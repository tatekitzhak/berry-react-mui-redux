import * as React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Button, Toolbar, AppBar, useMediaQuery } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import SignIn from './user/SignInButton';
import SignOut from './user/SignOutButton';
import HeaderMenu from '@/layout/MainLayout/Header/HeaderMenuNavigation/Navigation';
import { set_menu } from '@/features/customizationCreateSlice';

// assets
import { IconMenu2 } from '@tabler/icons';

function Header({handleLeftDrawerToggle}) {
    const [isUser, setIsUser] = React.useState(false);
    const theme = useTheme();
    return (
        <>
            {/* logo & toggler button */}
            <Toolbar>
                <Box
                    sx={{
                        width: 228,
                        display: 'flex',
                        [theme.breakpoints.down('md')]: {
                            width: 'auto'
                        }
                    }}
                >
                    <Box component="span" sx={{ display: { xs: 228, md: 'block' }, flexGrow: 1 }}>
                        <LogoSection />
                    </Box>
                </Box>
                <HeaderMenu />
                <Outlet />
                {
                    isUser ? 
                    <>
                        <SearchSection /> {/* header search */}
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ flexGrow: 1 }} />

                        {/* notification & profile */}
                        <NotificationSection />
                        <ProfileSection />
                    </> 
                    : 
                    <>
                        <Box sx={{ flexGrow: 1 }} />
                        {/* <Box sx={{ flexGrow: 1 }} /> */}
                        <SignIn/>
                        <SignOut/>
                    </>
                }
            </Toolbar>
        </>
    )   
}

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const HeaderLayout = () => {
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
        <>
           
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
                    borderBottom: 1,
                    borderColor: 'grey.500'
                }}
                
            >
                 <Header handleLeftDrawerToggle={handleLeftDrawerToggle}/>
            </AppBar>
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default HeaderLayout;
