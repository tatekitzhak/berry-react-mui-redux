import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
// material-ui
import { Grid, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from '@/views/dashboard/Default/EarningCard';
import Copyright from './Copyright';
import Layout from './Layout';

// ==============================|| SAMPLE PAGE ||============================== //

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: '#000',
}));

function Footer(params) {

    return (
        <MainCard title={params.params}>
            
                <Layout/>

            <Grid container direction="column"
                alignItems="center"
                justifyContent="center">

                <Grid item xs={3}>
                    <EarningCard></EarningCard>
                    <Copyright></Copyright>
                </Grid>
            </Grid>
           
        </MainCard>
    )
};

export default Footer;
