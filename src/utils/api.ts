import axios, { AxiosRequestConfig } from 'axios';
import { PartialGuilds, User } from './types/UserType';
const config :AxiosRequestConfig = {withCredentials:true}
export const getAuth = () =>
    axios.get<User>("http://localhost:3001/api/auth/status",config)
export const getGuilds = () =>
    axios.get<PartialGuilds[]>("http://localhost:3001/api/discord/guilds",config)
