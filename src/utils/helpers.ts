import { PartialGuilds } from "./types/UserType";

export const func = (guild:PartialGuilds):string=>{
    return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
}
