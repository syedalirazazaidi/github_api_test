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
    console.log("%csrc\featureslistUser.ts:20 login", "color: #007acc;", login);
    try {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const searchSingleUser = createAsyncThunk(
  "extraReducer/searchSingleUser",
  async (searchTerm) => {
    console.log("searchSingleuser", searchTerm);
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
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
    singleuserData: [],
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
      })
      .addCase(searchSingleUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchSingleUser.fulfilled, (state, action) => {
        console.log("%cget search ", "color: #007acc;", action.payload);
        state.status = "succeeded";
        state.userData = action.payload.items;
        state.error = null;
      })
      .addCase(searchSingleUser.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default extraReducer.reducer;
