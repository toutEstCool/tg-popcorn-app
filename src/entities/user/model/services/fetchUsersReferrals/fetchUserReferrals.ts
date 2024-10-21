import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../../../shared/api/api";

export const fetchUserReferrals = createAsyncThunk(
  "user/fetchUserReferrals",
  async (
    {
      userId,
      skip = 0,
      take = 10,
    }: { userId: string; skip?: number; take?: number },
    { rejectWithValue },
  ) => {
    try {
      const response = await $api.post("api/Users/getUserReferrals", {
        userId,
        skip,
        take,
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
