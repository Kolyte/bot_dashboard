import { useNavigate } from "react-router-dom";
import { mockGuilds } from "../utils/_mocks_/guild";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { Container, EmptyStateText, PageSet, Spinner } from "../utils/styles";
import { useFetchGuilds } from "../utils/hooks/fetchGuilds";

export const MenuPage = ()=>{
    const navigate = useNavigate();
    const {updateGuildId} = useContext(GuildContext)
    const handleClick = (guildId:string) =>{
        updateGuildId(guildId)
        navigate("/dashboard/categories")
    }
    const {guilds, error,loadingGuilds} = useFetchGuilds();
    if(loadingGuilds){
        return <Spinner/>
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
        {/* {loadingGuilds ? (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%'
            }}>
                <Spinner />
            </div>
        ) : ( */}
            
            <div>
                {/* {mockGuilds.map((guild)=>
                <div onClick={()=> handleClick(guild.id)}>
                    <GuildMenuItem guild={guild}/>
                </div>
        )} */}


        {guilds && guilds.length === 0 && (
            <EmptyStateText>No guilds found</EmptyStateText>
        )}
        {
            guilds?.map((guild)=>
            <div key={guild.id} onClick={()=> handleClick(guild.id)}>
                <GuildMenuItem guild={guild}/>
            </div>
            )
        }

    </div>
   


        </Container>

    </PageSet>
);
};




