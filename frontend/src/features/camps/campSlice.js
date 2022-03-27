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

// Get camps
export const getCamps = createAsyncThunk(
  'camps/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await campService.getCamps(token);
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

// Get user ticket
export const getCamp = createAsyncThunk(
  'camps/get',
  async (campId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await campService.getCamp(campId, token);
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

// create slice
export const campSlice = createSlice({
  name: 'camp',
  initialState,
  reducers: {
    reset: (state) => initialState,
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
      })
      .addCase(getCamps.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCamps.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.camps = action.payload;
      })
      .addCase(getCamps.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.camps = null;
      })
      .addCase(getCamp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCamp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.camp = action.payload;
      })
      .addCase(getCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.camp = null;
      });
  },
});

export const { reset } = campSlice.actions;
export default campSlice.reducer;
