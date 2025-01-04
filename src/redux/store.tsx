// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';  // Import the default export (the reducer)

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Define RootState based on the store's state
export type RootState = ReturnType<typeof store.getState>;

export default store;
