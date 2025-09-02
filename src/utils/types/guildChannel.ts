export type GuildConfig ={
    id:number;
    guildId:string;
    imageUrl?:string;
    welcomeMessage?:string;
    welcomeAvatarState:boolean;
    prefix:string;
    embedColour?:string;
    welcomeChannelId:string;
}
export type DiscordChannel ={
    id: string;
    name: string;
    last_message_id?: string;
    position:number;
    parent_id?: string;
    topic?:string;
    type: number;
    guildId: string;
}