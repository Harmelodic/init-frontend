import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
	name: 'title',
	initialState: 'Initial title',
	reducers: {
		setTitle(state, action) {
			return action.payload;
		},
	},
});

export function titleSelector(state) {
	return state.title;
}
