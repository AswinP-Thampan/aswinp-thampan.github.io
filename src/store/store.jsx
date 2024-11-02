import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './slice/tabslice';

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
  },
})