import axios, { AxiosError } from 'axios';

export type ApiError = AxiosError<{ error: string }>;

const baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
