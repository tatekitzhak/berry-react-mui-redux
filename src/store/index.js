import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import rootReducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(rootReducer);

const storeToolkit = configureStore({
    reducer: rootReducer,
});

const persister = 'Free';


function ReduxStoreWrapper({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxStoreWrapper;
