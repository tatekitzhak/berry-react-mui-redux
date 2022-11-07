import dashboard from './dashboard';
import pages from './pages';
import Utilities from './utilities';
import other from './other';
// ==============================|| MENU ITEMS ||============================== //
function menuItems(){

    const menuItemTypes = {
        items: [dashboard, pages, Utilities(), other]
    };

    return menuItemTypes;
}


export default menuItems;