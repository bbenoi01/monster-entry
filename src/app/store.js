import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import monsterReducer from './slices/monsterSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		monster: monsterReducer,
	},
});
