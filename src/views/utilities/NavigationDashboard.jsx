import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectMemoizedSubtopics } from '@/features/slices/subtopics/subtopicSlice';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import menuItems from '@/menu-items';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#000',
}));

// https://mui.com/material-ui/react-grid2/
export default function NavigationDashboard(props) {
    const [categoriesLinks, setCategoriesLinks] = useState({});
    const dispatch = useDispatch()
    const subcategories = useSelector(selectMemoizedSubtopics) // selectSubtopics
    
    useEffect(() => {
        // dispatch( fetchTopics() );
        // dispatch( fetchSubtopics() );
        console.log('NavigationDashboard categories: ', subcategories);
        console.log('NavigationDashboard:', props);
        // console.log('NavigationDashboard Utilities:',navItems)

    }, [categoriesLinks]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography> Categories</Typography>
            <Grid container spacing={2}>
                {
                     menuItems().items.map((item, i) => {
                        switch (item.id) {
                            case 'categories':
                                console.log('categories:', item.children, i)
                                item.children.map((categories, index) => {
                                    console.log('categories:', categories.title)

                                    if(categories.children !== undefined)
                                    { 
                                        // console.log('categories, index:', categories.children, index)
                                        categories.children.map((subcategory, x) => {
                                            console.log('topic, x:', subcategory.title, x)
                                        })
                                    }

                                  })
                                
                                // return item;
                            default:
                                console.log('error:', item, i)
                                // return 'error'
                        }
                    })
                    
                }
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

            </Grid>
        </Box>
    );
}
