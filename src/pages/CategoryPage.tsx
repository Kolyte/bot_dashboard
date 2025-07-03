import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";

export const CategoryPage = () => {
    const {guildId,updateGuildId} = useContext(GuildContext);
    return <div>{guildId}</div>
};

