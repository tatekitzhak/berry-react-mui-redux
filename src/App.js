import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, lazy } from 'react';

// project imports
import Loadable from '@/ui-component/Loadable';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider, Box } from '@mui/material';

// routing
import ThemeRoutes from '@/routes/index.js';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from '@/layout/NavigationScroll';
import Header from '@/layout/MainLayout/Header/index.js';
import HeaderLayout from '@/layout/MainLayout/Header/index.js';
import MainLayout from '@/layout/MainLayout/index';
const UtilsTypography = Loadable(lazy(() => import('@/views/utilities/Typography')));
const UtilsTablerIcons = Loadable(lazy(() => import('@/views/utilities/TablerIcons')));
const UtilsShadow = Loadable(lazy(() => import('@/views/utilities/Shadow')));

function Home(params) {
    return (
        <>
            <h1>Home {console.log('Home:')}</h1>
        </>
    )

}
function About(params) {
    return (
        <h1>
            About {console.log('About:')}
        </h1>
    )

}
function Topics1(params) {
    return (
        <h1>
            Topics1 {console.log('Topics1:')}
        </h1>
    )

}
// ==============================|| APP ||============================== //

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const customization = useSelector((state) => state.customization);
    const theme = createTheme(customization);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavigationScroll>
                    {/* <ThemeRoutes /> */}
                </NavigationScroll>
                <Box >
                    <HeaderLayout />
                    <Outlet />
                </Box>

                <Routes>
                    <Route path={'home'} element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="topics" element={<MainLayout />}>
                        {
                            isAuthenticated && (
                                <Route path=":topics-1/:tabler-icons" element={<UtilsTypography />}>

                                </Route>
                            )
                        }
                        <Route path="util-typography" element={<UtilsTypography />} />
                        <Route path="util-color" element={<UtilsTablerIcons />} />
                        <Route path="util-shadow" element={<UtilsShadow />} />
                        <Route path="*" element={<h1>No page found {console.log('No page found')}</h1>} />
                    </Route>
                    <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <h1>There's nothing here!{console.log('***')}</h1>
                                </main>
                            }
                            />
                </Routes>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
