import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../../../shared/api/api";
import { User } from "../../types/userProfileSchema";

interface FetchUsersParams {
  fullNameTerm?: string;
  userNameTerm?: string;
  skip: number;
  take: number;
}

export const fetchUsersList = createAsyncThunk(
  "users/fetchUsersList",
  async (params: FetchUsersParams) => {
    const response = await $api.post<{ items: User[]; totalCount: number }>(
      "api/Users/getUsersList",
      params,
    );
    return response.data;
  },
);
