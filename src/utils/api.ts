import axios, { AxiosRequestConfig } from 'axios';
import { User } from './types/UserType';
const config :AxiosRequestConfig = {withCredentials:true}
export const getAuth = () =>
    axios.get<User>("http://localhost:3001/api/auth/status",config)
