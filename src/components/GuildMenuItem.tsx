import { func } from '../utils/helpers';
import { GuildMenuPageStyle } from '../utils/styles';
import { PartialGuilds } from '../utils/types/UserType';

type Props = {
    guild: PartialGuilds;
};

export const GuildMenuItem = ({ guild }: Props) => {
    const { imageUrl, nameInitials } = func(guild);

    return (
        <GuildMenuPageStyle>
            <img
                src={guild.icon ? imageUrl : undefined}
                alt={guild.name}
                width={50}
                height={50}
                style={{
                    borderRadius: '20%',
                    display: guild.icon ? 'block' : 'none',
                }}
            />
            {!guild.icon && (
                <div
                    style={{
                        width: '50px',
                        height: '50px',
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
            <p style={{ fontFamily: "'Roboto', sans-serif" }}>{guild.name}</p>
        </GuildMenuPageStyle>
    );
};
