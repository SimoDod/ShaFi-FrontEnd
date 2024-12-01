import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import {
  clearAuthSession,
  getAuthToken,
} from "../utils/authentication/authentication";

const baseURL = import.meta.env.VITE_AZURE_API_BASE_URL;

export const authApi = axios.create({ baseURL });
export const api = axios.create({ baseURL });

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = getAuthToken();

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
      "ngrok-skip-browser-warning": "skip-browser-warning",
    },
  } as unknown as InternalAxiosRequestConfig;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 403) {
      clearAuthSession();
    }
    return Promise.reject(error);
  }
);
