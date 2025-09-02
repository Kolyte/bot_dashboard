import {PartialGuilds, User } from "./types/UserType";

export const func = (guild:PartialGuilds):string=>{
    return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
}
export const userFunc = (user:User):string=>{
    return `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
}
