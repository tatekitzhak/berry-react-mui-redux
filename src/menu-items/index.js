import dashboard from './dashboard';
import pages from './pages';
import Utilities from './utilities';
import other from './other';
// ==============================|| MENU ITEMS ||============================== //
function menuItems(){

console.log('utilities:',Utilities())
    const menu = {
        items: [dashboard, pages, Utilities(), other]
    };
    return menu;
}


export default menuItems;
