import { useEffect, useState } from "react";
import { GuildConfig } from "../types/guildChannel";
import { getGuildConfig } from "../api";

export function useFetchGuildConfig(guildId: string) {
    const [config, setConfig] = useState<GuildConfig>();
    const [error, setError] = useState<string>();
    const [prefix, setPrefix] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getGuildConfig(guildId)
            .then(({data}) => {
                setConfig(data);
                setPrefix(data.prefix);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [guildId]);

    

    return { prefix, setPrefix, config, error, loading };
}