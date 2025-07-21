import { useNavigate } from "react-router-dom";
import { mockGuilds } from "../utils/_mocks_/guild";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { Container, PageSet } from "../utils/styles";

export const MenuPage = ()=>{
    const navigate = useNavigate();
    const {updateGuildId} = useContext(GuildContext)
    const handleClick = (guildId:string) =>{
        updateGuildId(guildId)
        navigate("/dashboard/categories")
    }
return(
  <PageSet>
       
    {/* <ul>
         {mockGuilds.map((guild)=>(<li onClick={()=>{
            updateGuildId(guild.id)
            navigate("/categories")
        }
            }>{guild.name}</li>))}
    </ul> */}
    
    <Container>
    <div>
        {mockGuilds.map((guild)=>
        <div onClick={()=> handleClick(guild.id)}>
            <GuildMenuItem guild={guild}/>
        </div>
        )}
    </div>
    </Container>

</PageSet>
);
};
