import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/index';

// Define your initial state if needed
const initialState = {};

// Create your Redux store using configureStore
const store = configureStore({
  reducer: reducer, // Combined reducers
 // Add middleware here if needed
  preloadedState: initialState // Initial state
});

export default store;
