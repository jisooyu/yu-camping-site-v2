import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import campService from './campService';

const initialState = {
  camps: [],
  camp: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new camp
export const createCamp = createAsyncThunk(
  'camp/create',
  async (campData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await campService.createCamp(campData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const campSlice = createSlice({
  name: 'camp',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCamp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCamp.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = campSlice.actions;
export default campSlice.reducer;
