import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk<any, any>(
  "/register",
  async (params) => {
    const url = "http://localhost:3000/users";
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
