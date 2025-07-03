import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Container, Title } from "../utils/styles";

export const CategoryPage = () => {
    const {guildId,updateGuildId} = useContext(GuildContext);
    return <div style={{padding:'50px 0'}}>
        <Container>
            <div>
                <div>
                    <Title>
                        Basic configurations
                    </Title>
                </div>
            </div>
        </Container>
        </div>
};

