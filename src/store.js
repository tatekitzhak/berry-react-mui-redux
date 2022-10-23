import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '@/features/counterSlice';
import customizationSlice from '@/features/customizationCreateSlice';


const store = configureStore({
    reducer: {
      // Add reducers here
      counter: counterSlice,
      customization: customizationSlice
    }
  })
  export default store;