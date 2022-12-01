import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS = 'FETCH_MISSIONS';

const initialState = {
  missions: [],
  status: null,
};

export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (thunkAPI) => {
    try {
      const missions = await axios.get(url);
      return missions.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const slicer = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            active: !mission.active,
          };
        }
        return { ...mission };
      }),
    }),
  },

  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const IsSucessful = state;
        IsSucessful.status = 'success';
        IsSucessful.missions = action.payload;
      })

      .addCase(fetchMissions.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export const { bookMission } = slicer.actions;
export default slicer.reducer;
