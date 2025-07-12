import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Container, Flex, TextButton, Title } from "../utils/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons'; 
import { Grid } from "../utils/styles";
import { Paperclip, Settings } from "react-feather";
export const CategoryPage = () => {
    const {guildId,updateGuildId} = useContext(GuildContext);
    return <div style={{padding:'50px 0'}}>
        <Container>
            <div>
                <Flex alignItems="center" justifyContent="space-between">
                    <Title>
                        Basic configurations
                    </Title>
                   <Settings/>


                
                </Flex>
                <Grid>
                    <TextButton>Command Prefix</TextButton>
                    <TextButton>Welcome Message</TextButton>
                </Grid>
            </div>
            <div>
                <Flex alignItems="center" justifyContent="space-between">
                    <Title>
                        Channel logs
                    </Title>
                    <Paperclip/>


                
                </Flex>
                <Grid>
                    <TextButton>Command Prefix</TextButton>
                    <TextButton>Welcome Message</TextButton>
                </Grid>
            </div>
        </Container>
        </div>
};

