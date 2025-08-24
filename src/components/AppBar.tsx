import { AppBarStyle } from "../utils/styles";
import discordicon from '../assets/discordicon.png';
import {useContext} from 'react';
import { GuildContext } from "../utils/contexts/GuildContext";
import { Navigate } from "react-router-dom";
import { func } from "../utils/helpers";
export const AppBar = () =>{
    // const {guildId} = useContext()
    const {guild,updateGuild} = useContext(GuildContext);
    console.log(guild);
    return guild ? (<AppBarStyle>
        <img src={func(guild)} alt={guild.name} width={45} height={45} style={{borderRadius:'20%'}}/>
        <h1 style ={{fontSize:'20px'}}>{guild.name}</h1>
    </AppBarStyle>
    ):(<Navigate to="/menu"/>);
};