import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Container, PageSet, Title } from "../utils/styles";

export const CategoryPage = () => {
    const {guildId,updateGuildId} = useContext(GuildContext);
    return <PageSet>
        <Container>
            <div>
                <div>
                    <Title>
                        Basic configurations
                    </Title>
                </div>
            </div>
        </Container>
        </PageSet>
};

