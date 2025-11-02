import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { BottomBar, CenterItems, Container, EmptyStateText, PageSet, SocialLink, Spinner } from "../utils/styles";
import { useFetchGuilds } from "../utils/hooks/fetchGuilds";
import { PartialGuilds } from "../utils/types/UserType";

export const MenuPage = () => {
    const navigate = useNavigate();
    const { updateGuild } = useContext(GuildContext);

    const handleClick = (guild: PartialGuilds) => {
        updateGuild(guild);
        navigate("/dashboard/categories");
    };

    const { guilds, error, loadingGuilds } = useFetchGuilds();

    if (loadingGuilds) {
        return <Spinner />;
    }

    return (
        <PageSet>
            <Container>
                <div>
                    <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#ffffff' }}>Select a Guild</h2>
                    {guilds && guilds.length === 0 && (
                        <EmptyStateText>No guilds found</EmptyStateText>
                    )}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
                        {guilds?.map((guild) => (
                            <div key={guild.id} onClick={() => handleClick(guild)}>
                                <GuildMenuItem guild={guild} />
                            </div>
                        ))}
                    </div>
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
