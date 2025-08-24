import { useEffect, useState } from "react";
import { getGuildChannel, getGuildConfig } from "../api";
import { DiscordChannel, GuildConfig } from "../types/guildChannel";
import { useFetchGuildConfig } from "./fetchGuildConfig";

export function useFetchGuildChannels(guildId: string) {
    const [config, setConfig] = useState<GuildConfig>();
    const [welcomeChannelId, setWelcomeChannelId] = useState<string>("");
    const [channels, setChannels] = useState<DiscordChannel[]>([]);
    const [error, setError] = useState<string>();
    const [isChecked, setIsChecked] = useState(true);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        setLoading(true);
        getGuildConfig(guildId).then(({data})=>{
            setConfig(data);
            console.log("Guild welcomeChannelId:", data.welcomeChannelId);
            setWelcomeChannelId(data.welcomeChannelId);
            setIsChecked(data.welcomeAvatarState);
            return getGuildChannel(guildId);
        }).then(({data})=>{
            setChannels(data);
        }).catch((err)=>{
            setError(err.message);
        }).finally(()=>{
            setLoading(false);
        })
    },[guildId]);

    
    return {config,setConfig,isChecked,setIsChecked,welcomeChannelId,setWelcomeChannelId, channels, error, loading};
}