import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(rootReducer);

const persister = 'Free';


function ReduxStoreWrapper({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxStoreWrapper;
