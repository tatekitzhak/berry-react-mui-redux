// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItems from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const navItems = menuItems().items.map((item, i) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id+i} item={item} />;
            default:
                return (
                    <Typography key={item.id+i} variant="h6" color="error" align="center">
                        Menu Items Error (Do: A Loader spinning circle)
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
