import { useEffect, useState } from "react";
import { GuildConfig } from "../types/guildChannel";
import { getGuildConfig } from "../api";

export function useFetchGuildConfig(guildId: string) {
    const [config, setConfig] = useState<GuildConfig>();
    const [error, setError] = useState<string>();
    const [welcomeMessage, setWelcomeMessage] = useState<string>("");
    const [prefix, setPrefix] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [embedColour, setEmbedColour] = useState<string>();

    useEffect(() => {
        setLoading(true);
        getGuildConfig(guildId)
            .then(({data}) => {
                setConfig(data);
                setPrefix(data.prefix);
                setWelcomeMessage(data.welcomeMessage||"");
                setEmbedColour(data.embedColour || "#4a90e2");
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [guildId]);

    

    return { prefix,embedColour,setEmbedColour,welcomeMessage,setWelcomeMessage, setPrefix, config, error, loading };
}