import { AppBarStyle } from "../utils/styles";
import discordicon from '../assets/discordicon.png';
import { useContext } from 'react';
import { GuildContext } from "../utils/contexts/GuildContext";
import { Navigate } from "react-router-dom";
import { func } from "../utils/helpers";

export const AppBar = () => {
    const { guild } = useContext(GuildContext);

    if (!guild) {
        return <Navigate to="/menu" />;
    }

    const { imageUrl, nameInitials } = func(guild);

    return (
        <AppBarStyle>
            {guild.icon ? (
                <img src={imageUrl} alt={guild.name} width={45} height={45} style={{ borderRadius: '20%' }} />
            ) : (
                <div
                    style={{
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#2D2D30',
                        borderRadius: '20%',
                    }}
                >
                    <span style={{ color: '#fff', fontWeight: 'normal', fontSize: '18px' }}>
                        {nameInitials}
                    </span>
                </div>
            )}
            <h1 style={{ fontSize: '20px' }}>{guild.name}</h1>
        </AppBarStyle>
    );
};
