import { useAuthStore } from "@/stores/auth";
import type {
  AxiosError,
  AxiosInstance,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";

function handleRequest(config: InternalAxiosRequestConfig) {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

function handleError(error: AxiosError) {
  const authStore = useAuthStore.getState();

  if (error.response?.status === 401) {
    authStore.logout();
    window.location.href = "/auth/login";
  }
  return error;
}

const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosInstance: AxiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(handleRequest);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return handleError(error);
  },
);
