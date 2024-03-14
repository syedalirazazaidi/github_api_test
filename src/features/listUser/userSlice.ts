import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const gitHubUrl = `https://api.github.com/users`;

export const fetchUserData = createAsyncThunk(
  "extraReducer/fetchUserData",
  async () => {
    try {
      const response = await axios.get(gitHubUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchSingleUser = createAsyncThunk(
  "extraReducer/fetchSingleUser",
  async (login) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const extraReducer = createSlice({
  name: "extraReducer",
  initialState: {
    userData: [],
    status: "idle",
    error: null,
    singleuserData:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchSingleUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleuserData = action.payload;
        state.error = null;
      })
      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default extraReducer.reducer;
