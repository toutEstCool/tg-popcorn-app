import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../api/getCurrentUser/getCurrentUser";

export const fetchCurrentUser = createAsyncThunk(
  "api/user/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      return await getCurrentUser();
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
