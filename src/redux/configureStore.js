import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
