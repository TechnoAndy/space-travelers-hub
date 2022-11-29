import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Apiurl = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'FETCH_ROCKETS';

const initialState = {
  rockets: [],
  status: null,
};

export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (thunkAPI) => {
    try {
      const rockets = await axios.get(Apiurl);
      return rockets.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const slice = createSlice({
  name: 'rockets',
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const IsSucessful = state;
        IsSucessful.status = 'success';
        IsSucessful.rockets = action.payload;
      })

      .addCase(fetchRockets.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export const { bookRockets } = slice.actions;
export default slice.reducer;
