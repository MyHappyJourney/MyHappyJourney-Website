import { configureStore } from '@reduxjs/toolkit';
import leadFormReducer from './leadFormSlice';

export const store = configureStore({
  reducer: {
    leadForm: leadFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
