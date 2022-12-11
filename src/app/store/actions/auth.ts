import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthResponse, UserCreateParams } from "../reducers/types/authTypes";
import baseURL from "../../../config/config";

export const signup = createAsyncThunk<AuthResponse, UserCreateParams>(
  "/register",
  async (params) => {
    const url = `${baseURL}/users`;
    const data = {
      username: params.username,
      email: params.email,
      password: params.password,
    };
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
