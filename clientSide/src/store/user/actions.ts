import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/Api";
import { AxiosRequestConfig } from "axios";

interface PropsTime {
  start: Date;
  end: Date;
}

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async ({ start, end }: PropsTime) => {
    const config: AxiosRequestConfig = {
      method: "get",
      url: "/",
      params: {
        start,
        end,
      },
    };

    const response = await api(config);
    return response.data;
  }
);
