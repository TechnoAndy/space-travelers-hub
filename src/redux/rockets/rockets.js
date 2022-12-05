import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'FETCH_ROCKETS';

const initialState = {
  rockets: [],
  status: null,
};

export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (thunkAPI) => {
    try {
      const rockets = await axios.get(apiUrl);
      return rockets.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const slice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    booksRockets: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            active: !rocket.active,
          };
        }
        return { ...rocket };
      }),
    }),
  },

  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        const IsLoading = state;
        IsLoading.status = 'pending';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const IsWorking = state;
        IsWorking.status = 'success';
        IsWorking.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state) => {
        const IsNotWorking = state;
        IsNotWorking.status = 'rejected';
      });
  },
});

export const { booksRockets } = slice.actions;
export default slice.reducer;
