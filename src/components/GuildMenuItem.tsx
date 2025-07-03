import {GuildMenuPageStyle} from '../utils/styles';

type Props = {
    guild:{
        id:string;
        name:string;
        icon:string;

    }

};
export const GuildMenuItem = ({guild}:Props)=>{
return(
    <GuildMenuPageStyle>
        <img src={guild.icon} alt={guild.name} width={50} height={50} style={{borderRadius:'10%'}}/>
        <p>{guild.name}</p>
        


    </GuildMenuPageStyle>)
}
export{}

