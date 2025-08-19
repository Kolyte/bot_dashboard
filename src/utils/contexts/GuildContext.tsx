import { createContext } from "react";
import { PartialGuilds } from "../types/UserType";

type GuildContextType= {
    guild?:PartialGuilds;
    updateGuild:(guild:PartialGuilds)=>void;
};
export const GuildContext = createContext<GuildContextType>({
    updateGuild:()=>{},
})