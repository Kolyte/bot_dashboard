import { useNavigate } from "react-router-dom";
import { mockGuilds } from "../utils/_mocks_/guild";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { BottomBar, CenterItems, Container, EmptyStateText, PageSet, SocialLink, Spinner } from "../utils/styles";
import { useFetchGuilds } from "../utils/hooks/fetchGuilds";
import { PartialGuilds } from "../utils/types/UserType";

export const MenuPage = ()=>{
    const navigate = useNavigate();
    const {updateGuild} = useContext(GuildContext)
    const handleClick = (guild:PartialGuilds) =>{
        updateGuild(guild)
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

        <h2 style={{textAlign:'center',fontSize:20}}>Select a Guild</h2>
        {guilds && guilds.length === 0 && (
            <EmptyStateText>No guilds found</EmptyStateText>
        )}
        {
            
            guilds?.map((guild)=>
            <div key={guild.id} onClick={()=> handleClick(guild)}>
                <GuildMenuItem guild={guild}/>
            </div>
            )
        }

    </div>
   


        </Container>
       
        <BottomBar>

        <CenterItems>
        <SocialLink href="http://kolyte.net">LinkedIn</SocialLink>
        <SocialLink href="http://kolyte.net">Instagram</SocialLink>
        <SocialLink href="http://kolyte.net">Discord</SocialLink>
       
         
        </CenterItems>
        </BottomBar>
    </PageSet>

);
};




