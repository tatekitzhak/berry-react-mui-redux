import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '@/features/counterSlice'



// export const store = configureStore({
//   reducer: counterSlice
// })

const store = configureStore({
    reducer: {
      // Add reducers here
      counter: counterSlice
    }
  })
  export default store;