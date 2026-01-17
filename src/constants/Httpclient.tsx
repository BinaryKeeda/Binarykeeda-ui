/* eslint-disable require-await */
import { getSessionToken } from '@descope/nextjs-sdk/client';
import axios, { type AxiosResponse, type AxiosInstance } from 'axios';

export const ENV = process.env.NEXT_PUBLIC_ENV as string;
export const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL as string;
export const URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;
const E_URL = process.env.NEXT_PUBLIC_DIRECT_EXECUTION_URL as string;
const PRICING_URL = process.env.NEXT_PUBLIC_PRICING_CALCULATOR as string;

const orgnzId = () => {
  return localStorage.getItem('orgId');
};

// Create axios instances
const apiClient: AxiosInstance = axios.create({
  baseURL: URL,
});

const executionClient: AxiosInstance = axios.create({
  baseURL: E_URL,
});

const pricingClient: AxiosInstance = axios.create({
  baseURL: PRICING_URL,
});

// Common request interceptor for all clients
const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use(
    (config) => {
      // Add Content-Type header
      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
      }

      // Add Organization ID header
      const orgId = orgnzId();
      if (orgId) {
        config.headers['X-Organization-ID'] = orgId;
      }

      // Add Authorization token if available
      const token = getSessionToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Optional: Response interceptor for error handling
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle errors globally (e.g., 401 redirects to login)
      if (error.response?.status === 401) {
        // Handle unauthorized - e.g., redirect to login
        console.error('Unauthorized access');
      }
      return Promise.reject(error);
    }
  );
};

// Setup interceptors for all clients
setupInterceptors(apiClient);
setupInterceptors(executionClient);
setupInterceptors(pricingClient);

// API methods using interceptors
export const get = async (
  path: string,
  token?: string,
  orgId?: string | null
): Promise<AxiosResponse> => {
  const config: any = {};
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  if (orgId) {
    config.headers = { ...config.headers, 'X-Organization-ID': orgId };
  }
  return apiClient.get(path, config);
};

export const post = async (
  path: string,
  data: unknown,
  token?: string,
  orgId?: string | null
): Promise<AxiosResponse> => {
  const config: any = {};
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  if (orgId) {
    config.headers = { ...config.headers, 'X-Organization-ID': orgId };
  }
  return apiClient.post(path, data, config);
};

export const postPricing = async (
  path: string,
  data: unknown,
  token?: string,
  orgId?: string | null
): Promise<AxiosResponse> => {
  const config: any = {};
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  if (orgId) {
    config.headers = { ...config.headers, 'X-Organization-ID': orgId };
  }
  return pricingClient.post(path, data, config);
};

export const put = async (
  path: string,
  data: unknown,
  token?: string
): Promise<AxiosResponse> => {
  const config: any = {};
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return apiClient.put(path, data, config);
};

export const del = async (
  path: string,
  token?: string,
  orgId?: string | null
): Promise<AxiosResponse> => {
  const config: any = {};
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  if (orgId) {
    config.headers = { ...config.headers, 'X-Organization-ID': orgId };
  }
  return apiClient.delete(path, config);
};

export const postExecute = async (
  path: string,
  data: unknown,
  token?: string
): Promise<AxiosResponse> => {
  const config: any = {};
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return executionClient.post(path, data, config);
};

export const postform = async (
  path: string,
  data: unknown,
  token?: string
): Promise<AxiosResponse> => {
  const config: any = {
    headers: { 'Content-Type': 'multipart/form-data' },
  };
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return apiClient.post(path, data, config);
};

export const putform = async (
  path: string,
  data: unknown,
  token?: string
): Promise<AxiosResponse> => {
  const config: any = {
    headers: { 'Content-Type': 'multipart/form-data' },
  };
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return apiClient.put(path, data, config);
};

export const delWb = async (
  path: string,
  token?: string,
  body?: unknown
): Promise<AxiosResponse> => {
  const config: any = { data: body };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return apiClient.delete(path, config);
};

export function withToken(cb: (token: string) => Promise<any>) {
  const token = getSessionToken();
  if (!token) {
    throw new Error('No session token found');
  }
  return cb(token);
}