import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Container, Flex, Grid, Title } from "../utils/styles";
import { BookOpen, Settings } from "react-feather";
import { PartialGuilds } from "../utils/types/UserType";
import { Navigate, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const TransparentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05); 
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 20px; 
    backdrop-filter: blur(10px);
    width: auto; 
    overflow: hidden;
    height: auto; 
`;

const SimpleButton = styled.button`
    background: transparent; 
    color: white; 
    border: 2px solid white; 
    padding: 6px 12px; 
    border-radius: 5px; 
    cursor: pointer; 
    transition: background 0.3s, transform 0.2s;
    font-size: 14px; 
    width: 1000px; 
    min-width: 10px; 
    text-align: center; 

    &:hover {
        background: rgba(255, 255, 255, 0.1); 
       
    }

    &:focus {
        outline: none; 
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); 
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 20px; 
`;



export const CategoryPage = () => {
    const navigate = useNavigate();
    const { guild, updateGuild } = useContext(GuildContext);
    
    const handleClick = (guild: PartialGuilds, route: string) => {
        updateGuild(guild);
        navigate("/dashboard/" + route);
    };

    return guild ? (
        <TransparentBox>
            <Container>
                <Flex alignItems="center" justifyContent="space-between" style={{ marginBottom: '20px' }}>
                    <Title>
                        Basic Configurations
                    </Title>
                    <Settings />
                </Flex>
                <ButtonContainer>
                    <SimpleButton onClick={() => handleClick(guild, "prefix")}>Command Prefix</SimpleButton>
                    <SimpleButton onClick={() => handleClick(guild, "message")}>Welcome Message</SimpleButton>
                </ButtonContainer>
               
                
                {/* <Flex alignItems="center" justifyContent="space-between" style={{ marginTop: '20px' }}>
                    <Title>
                        Channel Logs
                    </Title>
                    <BookOpen />
                </Flex> */}
                {/* <ButtonContainer>
                    <SimpleButton>X</SimpleButton>
                    <SimpleButton>X</SimpleButton>
                </ButtonContainer> */}
            </Container>
        </TransparentBox>
    ) : (
        <Navigate to="/menu" />
    );
};
