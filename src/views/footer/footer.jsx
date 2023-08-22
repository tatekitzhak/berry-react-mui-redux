import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
// material-ui
import { Grid, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from '@/views/dashboard/Default/EarningCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#000',
}));

function Footer(params) {

    return (
        <MainCard title={params.params}>
            
            <Grid container item xs={12} md={7} lg={8} spacing={1}>
                    <Grid item xs={12} md={5} lg={4}>
                        <Item>
                            <Box
                                id="category-a"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                <Typography>Ask Media Dev:</Typography>
                            </Box>
                            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                                <li>Subtopic   Subtopic   Subtopic  Subtopic 1</li>
                                <li><NavLink to="topics-1/tabler-icons/1">About </NavLink></li>
                                <li><NavLink to="topics-1/tabler-icons/1">Contact</NavLink></li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <Item>
                            <Box
                                id="category-b"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                <Typography>Legal:</Typography>
                    
                            </Box>
                            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                                <li> Terms of Use </li>
                                <li> Privacy Policy </li>
                                <li> Copyright Policyt </li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <Item>
                            <Box
                                id="category-c"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Topic 4
                            </Box>
                            <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                                <li>Subtopic 3.1</li>
                                <li>Subtopic 3.2</li>
                                <li>Subtopic 3.3</li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <Item>
                            <Box
                                id="category-d"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Topic 5
                            </Box>
                            <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                                <li>Subtopic 4.1</li>
                                <li>Subtopic 4.2</li>
                                <li>Subtopic 4.3</li>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>

            <Grid container direction="column"
                alignItems="center"
                justifyContent="center">

                <Grid item xs={3}>
                    <EarningCard></EarningCard>
                </Grid>
            </Grid>
            <Typography>© 2023 askmediadev.com </Typography>
            <Typography> The project is currently in public beta</Typography>
            <Grid
                    item
                    xs={12}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    sx={{ fontSize: '12px' }}
                >
                    <Grid sx={{ order: { xs: 2, sm: 1 } }}>
                        <Item>© Copyright</Item>
                    </Grid>
                    <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                        <Grid>
                            <Item>Link A</Item>
                        </Grid>
                        <Grid>
                            <Item>Link B</Item>
                        </Grid>
                        <Grid>
                            <Item>Link C</Item>
                        </Grid>
                    </Grid>
                </Grid>
        </MainCard>
    )
};

export default Footer;
