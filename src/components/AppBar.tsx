import { AppBarStyle } from "../utils/styles";
import discordicon from '../assets/discordicon.png';
import {useContext} from 'react';
export const AppBar = () =>{
    // const {guildId} = useContext()
    return (<AppBarStyle>
        
        <img src={discordicon} height={45} width={45} style={{borderRadius:'50%'}} alt="logo"></img>
    </AppBarStyle>
    );
};