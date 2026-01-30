import axios, { type AxiosInstance } from 'axios';

//================================================================

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const nextServer: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
