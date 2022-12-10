import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk<any, any>(
  "/register",
  async (params) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: {
          user: {
            email: params.email,
            password: params.password,
          },
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
