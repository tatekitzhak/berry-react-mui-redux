import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

// project imports
import Loadable from '@/ui-component/Loadable';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
// utilities routing
const UtilsTypography = Loadable(lazy(() => import('@/views/utilities/Typography')));


// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes]);
}
