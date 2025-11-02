import {PartialGuilds, User } from "./types/UserType";


export const func = (guild: PartialGuilds) => {
    const imageUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
    const nameInitials = guild.name.slice(0, 2).toUpperCase();

    return {
        imageUrl,
        nameInitials,
    };
};


export const userFunc = (user:User):string=>{
    return `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
}
