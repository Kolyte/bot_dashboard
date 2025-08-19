import { useState, useEffect } from "react";
import { PartialGuilds, User } from "../types/UserType";
import { getGuilds } from "../api";
export function useFetchGuilds(){
    const[guilds, setGuilds] = useState<PartialGuilds[]>();
    const [error, setError] = useState<string | null>(null);
    const[loadingGuilds, setLoading] = useState<boolean>(false);
    useEffect(()=>{
        setLoading(true)
        getGuilds().
        then((response) => {
            setGuilds(response.data);
        }).catch(err => {
            setError(err.message);
        }).finally(() => {
            setLoading(false);
        });
}, []);
return {guilds, error, loadingGuilds};
}