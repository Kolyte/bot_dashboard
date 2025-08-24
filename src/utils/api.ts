import axios, { AxiosRequestConfig } from 'axios';
import { PartialGuilds, User } from './types/UserType';
import { DiscordChannel, GuildConfig } from './types/guildChannel';
const config :AxiosRequestConfig = {withCredentials:true}
export const getAuth = () =>
    axios.get<User>("http://localhost:3001/api/auth/status",config)
export const getGuilds = () =>
    axios.get<PartialGuilds[]>("http://localhost:3001/api/discord/guilds",config)
export const getGuildConfig =(guildId:string)=>{
    return axios.get<GuildConfig>(`http://localhost:3001/api/guilds/config/${guildId}`,config)
}    
export const updateGuildPrefix = (guildId: string, prefix: string) => {
    return axios.post<GuildConfig>(`http://localhost:3001/api/guilds/${guildId}/prefix`, { prefix }, config);

}
export const getGuildChannel = (guildId: string) => {return axios.get<DiscordChannel[]>(`http://localhost:3001/api/discord/${guildId}/channels`, config)}
export const updateGuildChannel = (guildId: string, welcomeChannelId: string) => {
    return axios.post(`http://localhost:3001/api/guilds/${guildId}/welcome-channel`, { welcomeChannelId }, config);
}
export const updateWelcomeChannelMessage = (guildId: string, message: string) => {
   return axios.post(`http://localhost:3001/api/guilds/${guildId}/welcomeMessage`, { message }, config);
 }
 export const updateStateForAvatar = (guildId: string, isChecked: boolean) => {
    return axios.post(`http://localhost:3001/api/guilds/${guildId}/welcomeAvatarState`, { isChecked }, config);
 }
 export const updateEmbedColour = (guildId: string, embedColour: string) => {
    return axios.post(`http://localhost:3001/api/guilds/${guildId}/embedColour`, { embedColour }, config);
 }