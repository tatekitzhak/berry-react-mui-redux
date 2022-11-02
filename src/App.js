import { Routes, Route, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
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
import { func } from "prop-types";

const UtilsTypography = Loadable(lazy(() => import('@/views/utilities/Typography')));
const TopicsDashboard = Loadable(lazy(() => import('@/views/utilities/TopicsDashboard')));
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
function TopicsDashboardLayout(props) {
    return (
        <>
            <section style={{ padding: "1rem", marginTop: "68px" }}>
                <h1>Topics Dashboard</h1>
                <p>Topics Dashboard{console.log('Topics Dashboard:', props)}</p>
                <nav>
                <ul>
                    <li>
                        <NavLink to="topics-1/tabler-icons/1">Topic 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="topics-1/tabler-icons/2">Topic 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="topics-1/tabler-icons/3">Topic 3</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
            </section>
        </>
    )
}
function ArticalLayout(props) {
    let params = useParams();
    return (
        <h1>
            ArticalLayout {console.log('ArticalLayout:', props, params)}
        </h1>
    )
}
// ==============================|| APP ||============================== //

function App(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    let location = useLocation();
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
                        <Route index element={<TopicsDashboard {...props} topics={'topics'}/>} />
                        {
                            isAuthenticated && (
                                <Route path=":topics/:subtopic" element={<UtilsTypography {...props} customization={customization} location={location} />} />
                            )
                
                        }
                        <Route path=":topics/:subtopic/:artical" element={<UtilsTypography {...props} customization={customization} location={location} />} />        
                        <Route path="util-typography" element={<UtilsTypography location={location}/>} />
                        <Route path="util-color" element={<UtilsTablerIcons />} />
                        <Route path="util-shadow" element={<UtilsShadow />} />
                        <Route path="*" element={<h1>No page found {console.log('No page found 1')}</h1>} />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem", marginTop: "68px" }}>
                                <h1>404 Not Found</h1>
                                <p>There's nothing here!{console.log('No page found 2')}</p>
                            </main>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
