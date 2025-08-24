import { useContext, useState } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Button, Container, Flex, PageSet, Select, Spinner, TextArea, Title } from "../utils/styles"
import { Navigate } from "react-router-dom";
import { useFetchGuildChannels } from "../utils/hooks/fetchGuildChannels";
import { updateEmbedColour, updateGuildChannel, updateStateForAvatar, updateWelcomeChannelMessage } from "../utils/api";
import { useFetchGuildConfig } from "../utils/hooks/fetchGuildConfig";
import '../styles/checkbox.css';
export const WelcomeMessagePage = () =>{
    const {guild} = useContext(GuildContext);
    const{config,isChecked,setIsChecked,channels,welcomeChannelId,setWelcomeChannelId,loading,error} = useFetchGuildChannels(guild && guild.id || "");
    const {welcomeMessage,embedColour,setEmbedColour,setWelcomeMessage} = useFetchGuildConfig(guild && guild.id || "");

 
    const clickHandler = async(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) =>{
        e.preventDefault();
        try{
            
                updateGuildChannel(guild!.id, welcomeChannelId);
                updateWelcomeChannelMessage(guild!.id, welcomeMessage);
                updateStateForAvatar(guild!.id, isChecked);
                updateEmbedColour(guild!.id, embedColour!);
                console.log(config);
            
        }catch{
            console.error("Error saving welcome message");
        }
    }
    if(loading){
           return <Spinner/>
    }
    
    return guild?(
        
<PageSet>
    <Container style={{ padding: '20px', backgroundColor: "#2d2d2d", borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', position: 'relative' }}>
        <div
            style={{
                width: '4px',
                height: '100%', 
                backgroundColor: embedColour, 
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px', 
                position: 'absolute',
                left: '0', 
                top: '0', 
            }}
        />
        
        <Title style={{ display: "flex", justifyContent: 'flex-start' }}>
            Update Welcome Message
        </Title>
        <section style={{ marginTop: '40px' }}>
            <div>
                <label>Current Channel</label>
                <div>
                    <Select onChange={(input) => { setWelcomeChannelId(input.target.value); }}>
                        {channels?.map((channel) => (
                            <option key={channel.id} selected={channel?.id === config?.welcomeChannelId} value={channel.id}>
                                # {channel.name}
                            </option>
                        ))}
                    </Select>
                </div>
            </div>
        </section>
        <section style={{ marginTop: "8px" }}>
            <div>
                <label htmlFor="message">Current Message</label>
                <div>
                    <TextArea onChange={(input) => setWelcomeMessage(input.target.value)} value={welcomeMessage} id='message' />
                </div>
                <div style={{ padding: "10px 0px", display: "flex", alignItems: "center" }}>
                    <label style={{ marginRight: "10px", fontSize: "15px" }}>
                        Would you like the message to include member's avatar?
                    </label>
                    <label className="container">
                        <input
                            checked={isChecked}
                            onChange={() => { setIsChecked(!isChecked); }}
                            type="checkbox"
                        />
                        <div className="checkmark"></div>
                    </label>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <input
                    type="color"
                    id="background"
                    name="background"
                    defaultValue={embedColour}
                    style={{
                        width: '30px',
                        height: '30px',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                    }}
                    onChange={(event) => setEmbedColour(event.target.value)}
                />
            </div>
        </section>
        <Flex justifyContent="flex-end">
            <Button variant="secondary" style={{ margin: '0 10px' }} type='button'>Reset</Button>
            <Button variant="primary" onClick={clickHandler} type='submit'>Save</Button>
        </Flex>
    </Container>
</PageSet>




):(<Navigate to="/menu"/>)
}

