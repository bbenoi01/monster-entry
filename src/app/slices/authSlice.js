import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import monsterApi from '../../api/monsterApi';

export const login = createAsyncThunk(
	'auth/login',
	async (data, { rejectWithValue }) => {
		const email = 'admin@admin.com';
		const password = 'admin123';

		try {
			const res = await monsterApi.post('/login', { email, password });
			const { token, ...others } = res.data;
			await localStorage.setItem('token', token);
			return others;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loading: false,
		authenticated: false,
		user: null,
		errors: null,
	},
	reducers: {
		logout: (state) => {
			localStorage.removeItem('token');
			state.authenticated = false;
			state.user = null;
		},
	},
	extraReducers: {
		[login.pending]: (state) => {
			state.loading = true;
			state.errors = null;
		},
		[login.fulfilled]: (state, action) => {
			state.loading = false;
			state.authenticated = true;
			state.user = action.payload;
		},
		[login.rejected]: (state, action) => {
			state.loading = false;
			state.errors = action.payload;
		},
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
