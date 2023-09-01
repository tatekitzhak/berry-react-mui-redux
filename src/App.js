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
import Footer from '@/views/footer/footer.jsx';
import StickyFooter from '@/views/footer/StickyFooter';
import LayoutPage from '@/LayoutPage';
import { func } from "prop-types";

const UtilsTypography = Loadable(lazy(() => import('@/views/utilities/Typography')));
const NavigationDashboard = Loadable(lazy(() => import('@/views/utilities/NavigationDashboard')));
const UtilsTablerIcons = Loadable(lazy(() => import('@/views/utilities/TablerIcons')));
const UtilsShadow = Loadable(lazy(() => import('@/views/utilities/Shadow')));

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

function SubtopicLayout(props) {
    // const [searchParams] = useSearchParams();
    // let location = useLocation();
    // const params = useParams();
    return (
        <>
            <div>
                <h2>Title name: </h2>
                <ul>
                    <li>
                        <NavLink to="article-1">Article 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="article-2">Article 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="article-3">Article 3</NavLink>
                    </li>
                </ul>
                <Outlet />
            </div>
        </>
    );
}

function Article(params) {
    return (
        <>
            <article>
                In JavaScript, the following is a method for loop through an array for each loop. Each array element in ascending index order is assigned a function for the array method forEach() loop, which loops through any array, returning a value once. The callback function is a component of this function.
    
    In ES6, the concept of iterable objects is introduced, and a new construct for traversing data, for…of statement, is introduced. For-of statements can be used for a wide range of purposes. Generator property (any object with a symbol that contains the *[Symbol.iterator] property). Variables in ECMAScript 2015 can also be block-scoped: variable s varies depending on each iteration, but it can still be declared const inside the loop body if no changes are made. Multiple arrays may not actually hold the same number of items because their length reports vary. According to itslength, an array is said to be sparse if only a few elements are present. The for.forEach implementation allows you to pass a function to be used on each item in the array if it supports it.
    
    For.of, the function only deals with elements that are present in an array; for.forEach, on the other hand, only deals with elements that are present in an array. The final option entails a fully explicit counting loop that is implemented in all versions of JavaScript. Those who are familiar with syntax argue that for…in loops over an object’s properties. As an Array in JavaScript is simply an object with numeric property names, you can theoretically loop over it. Map is one of the functional programming techniques that is already included in other languages, such as Python and Haskell. It is not recommended to loop through an Array with a for-in loop in JavaScript, but it is preferable to use a for loop. It has been improved in addition to optimizing the array’s length.
    
    A set of improved Array methods can be found in Opera, Safari, Firefox, and Chrome. When using do…while loops, the array elements can be accessed directly. The array and elements are also more dynamic and controlled in this manner. Three components must be present in order for a traditional for loop to function properly. The three components are separated from each other by a ; symbol. There is no need to be concerned about loops in any of the browsers, including very old ones. All modern browsers, including Internet Explorer 9 and later, support Array.prototype.forEach() in Array.prototype.forEach() in Array.prototype.forEach() in Array.prototype.for Because this method does not behave as well as a traditional for loop in all cases, it should be used with caution.
    
    Furthermore, utility libraries may have their own variation of the variation. You can loop over an array in JavaScript in a variety of ways. There are three approaches to doing it: for, while, and while. As you may be aware, functional programming has been making waves in the development world of late. This makes it easier to write declarative code that is simpler to understand for you. JavaScript includes several methods for loop through an array. When using the Array prototype, the traditional for() method is the fastest.
    
    Underscore.js has a library for storing array and collection iterates.
            </article>
        </>
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

                    <Route path="/" element={ <LayoutPage params={['Home', 'The AskMediaDev platform provides services, tools, and information generated by AI tools. Our platform is free to use.']}/> } />
                    <Route path={'products'} element={<StickyFooter params={"Products"}/>}></Route>
                    <Route path="services" element={<LayoutPage params={['Services']}/>}></Route>

                    <Route path="explore" element={<MainLayout args={"This is props"} location={location}/>}>
                        <Route index element={<NavigationDashboard location={location} />} />
                        {
                            isAuthenticated && (
                                <Route path=":subcategory/:topic"
                                    element={<SubtopicLayout {...props} customization={customization} location={location} />}
                                />
                            )

                        }
                        <Route path=":subcategory/:topic/:article" element={<Article {...props} customization={customization} location={location} />} />
                        <Route path="util-typography" element={<UtilsTypography location={location} />} />
                        <Route path="util-color" element={<UtilsTablerIcons />} />
                        <Route path="util-shadow" element={<UtilsShadow />} />
                    </Route>
                    <Route path="pricing" element={<LayoutPage params={["Pricing"]}/>}></Route>
                    <Route path="contact" element={<LayoutPage params={["Contact Us", " Have a question, comment or concern? Send a message to: info@askmediadev.com "]}/>}></Route>
                    
                </Routes>
                
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
