import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import counterSlice from '@/features/counterSlice';
import customizationSlice from '@/features/customizationCreateSlice';
import usersSlice from "@/features/usersSlice";
import fetchDataSlice from '@/features/fetchDataSlice';
import topicsSlice from '@/features/topics/topicsSlice';


const store = configureStore({
    reducer: {
      counter: counterSlice,
      customization: customizationSlice,
      users: usersSlice,
      fetchDataSlice: fetchDataSlice,
      topicsSlice: topicsSlice
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