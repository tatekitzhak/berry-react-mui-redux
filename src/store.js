import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

// project imports
import customizationSlice from '@/features/customizationCreateSlice';
// import topicsSlice from '@/features/topics/topicsSlice';
import rootReducer from '@/features/slices';


const store = configureStore({
    reducer: {
      customization: customizationSlice,
      // topicsSlice: topicsSlice,
      rootReducer
    }
  });

  function ReduxStoreWrapper({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxStoreWrapper;