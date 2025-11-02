import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import { MainButton, HomePageStyle } from '../utils/styles';
import { CenterItems, SocialLink } from '../utils/styles';
import styled from 'styled-components';

const FaDiscordWithProperType = FaDiscord as React.ElementType;
const FaQuestionCircleWithProperType = FaQuestionCircle as React.ElementType;

// Styled components for a new look
const GradientMainButton = styled(MainButton)`
    background: linear-gradient(135deg, #8e44ad, #9b59b6); // Gradient background for buttons
    color: white; // White text color
    border: none; // Remove default border
    padding: 15px 30px; // Add padding to buttons
    border-radius: 8px; // Round button corners
    display: flex; // Flex display for icon and text alignment
    align-items: center; // Center items vertically
    margin: 10px 0; // Margin between buttons

    &:hover {
        background: linear-gradient(135deg, #732d91, #8e44ad); // Darker gradient on hover
    }
`;

export const HomePage: React.FC = () => {
    const redirect = () => {
        window.location.href = 'http://localhost:3001/api/auth/login';
    };

    return (
        <HomePageStyle>
            <div>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Welcome to Our Service</h1>
            </div>
            <div>
                <GradientMainButton onClick={redirect}>
                    <div style={{ marginRight: '10px' }}>
                        <FaDiscordWithProperType size={50} color="white" />
                    </div>
                    <div style={{ fontSize: '18px' }}>Login with Discord</div>
                </GradientMainButton>
                
                <GradientMainButton>
                    <div style={{ marginRight: '10px' }}>
                        <FaQuestionCircleWithProperType size={50} color="white" />
                    </div>
                    <div style={{ fontSize: '18px' }}>Support Server</div>
                </GradientMainButton>
            </div>
            <CenterItems>
                <SocialLink href="http://kolyte.net">LinkedIn</SocialLink>
                <SocialLink href="http://kolyte.net">Instagram</SocialLink>
                <SocialLink href="http://kolyte.net">Discord</SocialLink>
            </CenterItems>
        </HomePageStyle>
    );
};
