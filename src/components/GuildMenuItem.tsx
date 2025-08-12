import { func } from '../utils/helpers';
import {GuildMenuPageStyle} from '../utils/styles';
import { PartialGuilds } from '../utils/types/UserType';

type Props = {
    guild:PartialGuilds

};
export const GuildMenuItem = ({guild}:Props)=>{
return(
    <GuildMenuPageStyle>
        <img src={func(guild)} alt={guild.name} width={50} height={50} style={{borderRadius:'20%'}}/>
        <p>{guild.name}</p>
        


    </GuildMenuPageStyle>)
}
export{}

