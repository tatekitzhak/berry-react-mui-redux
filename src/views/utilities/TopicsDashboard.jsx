import * as React from 'react';
import { Routes, Route, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#000',
}));

// https://mui.com/material-ui/react-grid2/
export default function TopicsDashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={5} lg={4}>
                        <Item>
                            <Box
                                id="category-a"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Topic A
                            </Box>
                            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                                <li>Subtopic 1Subtopic 1Subtopic 1Subtopic 1</li>
                                <li>Subtopic 2</li>
                                <li>Subtopic 3</li>
                                <li><NavLink to="topics-1/subtopic-1">Subtopic 4</NavLink></li>
                                <li><NavLink to="topics-1/subtopic-2">Subtopic 5</NavLink></li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid xs={12} md={5} lg={4}>
                        <Item>
                            <Box
                                id="category-a"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Topic B
                            </Box>
                            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                                <li>Subtopic 1Subtopic 1Subtopic 1Subtopic 1</li>
                                <li>Subtopic 2</li>
                                <li>Subtopic 3</li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid xs={12} md={5} lg={4}>
                        <Item>
                            <Box
                                id="category-a"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Topic C
                            </Box>
                            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                                <li>Subtopic 1Subtopic 1Subtopic 1Subtopic 1</li>
                                <li>Subtopic 2</li>
                                <li>Subtopic 3</li>
                            </Box>
                        </Item>
                    </Grid>
                <Grid container xs={12} md={7} lg={8} spacing={1}>
                    <Grid xs={12} md={5} lg={4}>
                        <Item>
                            <Box
                                id="category-a"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Topic 2
                            </Box>
                            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                                <li>Subtopic   Subtopic   Subtopic  Subtopic 1</li>
                                <li><NavLink to="topics-1/tabler-icons/1">Subtopic 2</NavLink></li>
                                <li><NavLink to="topics-1/tabler-icons/1">Subtopic 3</NavLink></li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid xs={6} lg={3}>
                        <Item>
                            <Box
                                id="category-b"
                                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                            >
                                Topic 3
              </Box>
                            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                                <li>Subtopic 3.1</li>
                                <li>Subtopic 3.2</li>
                                <li>Subtopic 3.3</li>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid xs={6} lg={3}>
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
                    <Grid xs={6} lg={3}>
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
                <Grid
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
            </Grid>
        </Box>
    );
}
