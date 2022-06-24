import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import recommendationsReducer from '../features/recommendations/recommendationsSlice';
import counterReducer from '../features/counter/counterSlice';
import animeDetailReducer from '../features/animeDetail/animeDetailSlice';

export const store = configureStore({
  reducer: {
    recommendations: recommendationsReducer,
    counter: counterReducer,
    animeDetail: animeDetailReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
