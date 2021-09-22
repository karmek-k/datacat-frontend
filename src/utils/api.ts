import axios from 'axios';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? 'http://localhost:8888'
});
