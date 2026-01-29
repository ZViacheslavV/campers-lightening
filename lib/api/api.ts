import axios, { type AxiosInstance } from 'axios';

//================================================================

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const API_ENDPOINTS = {
  CAMPERS: '/campers',
  CAMPERS_ID: '/campers/',
};

export const nextServer: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
