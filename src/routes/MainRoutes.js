import { lazy } from 'react';

// project imports
import MainLayout from '@/layout/MainLayout/index';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('@/views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('@/views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('@/views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('@/views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('@/views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('@/views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/',
            children: [
                {
                    path: 'dashboard',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
