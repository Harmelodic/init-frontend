import { configureStore } from '@reduxjs/toolkit';
import { titleSlice } from './titleSlice';

export function initialiseStore() {
	return configureStore({
		reducer: {
			title: titleSlice.reducer,
		},
	});
};
