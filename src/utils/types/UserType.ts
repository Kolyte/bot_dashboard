export type User={
    id:string;
    discordId:string;
    username?:string;
    avatar?:string;

}
export type PartialGuilds={
    id:string;
    name:string;
    icon:string;
    owner:boolean;
    permissions:string;
    features:string[];
}