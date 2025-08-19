import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Container, Flex, Grid, PageSet, TextButton, Title } from "../utils/styles";
import { BookOpen, Settings } from "react-feather";
import { PartialGuilds } from "../utils/types/UserType";
import { Navigate, useNavigate } from "react-router-dom";


    

export const CategoryPage = () => {
    const navigate = useNavigate();
    const {guild,updateGuild} = useContext(GuildContext);
    const handleClick = (guild:PartialGuilds,route:string) =>{
        updateGuild(guild)
        navigate("/dashboard/"+route)
    }
    return guild ?(<PageSet>
        <Container>
            <div>
                <Flex alignItems="center" justifyContent="space-between">
                    <Title>
                        Basic configurations
                    </Title>
                   <Settings/>


                
                </Flex>
                <Grid>
                    <TextButton onClick={()=>handleClick(guild,"prefix")} >Command Prefix</TextButton>
                    <TextButton onClick={()=>handleClick(guild,"message")} >Welcome Message</TextButton>
                </Grid>
            </div>
            <div>
                <Flex alignItems="center" justifyContent="space-between">
                    <Title>
                        Channel logs
                    </Title>
                    <BookOpen/>


                
                </Flex>
                <Grid>
                    <TextButton>X</TextButton>
                    <TextButton>X</TextButton>
                </Grid>
            </div>
        </Container>
        </PageSet>):(<Navigate to="/category"/>)
};

