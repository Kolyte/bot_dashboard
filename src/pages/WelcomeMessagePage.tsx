import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Button, Container, Flex, PageSet, Select, Spinner, TextArea, Title } from "../utils/styles"
import { Navigate } from "react-router-dom";
import { useFetchGuildChannels } from "../utils/hooks/fetchGuildChannels";
import { updateGuildChannel } from "../utils/api";

export const WelcomeMessagePage = () =>{
    const {guild} = useContext(GuildContext);
    const{config, channels,welcomeChannelId,setWelcomeChannelId,loading,error} = useFetchGuildChannels(guild && guild.id || "");
    console.log(config)
    console.log(channels)
    const clickHandler = async(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) =>{
        e.preventDefault();
        try{
           await updateGuildChannel(guild!.id,welcomeChannelId )
        }catch{
            console.error("Error saving welcome message");
        }
    }
    if(loading){
           return <Spinner/>
    }
    
    return guild?(
        
<PageSet>

    <Container>
        <Title style={{ display:"flex",justifyContent:'flex-start'}}>
            Update Welcome Message
        </Title>
        <section style={{marginTop:'40px'}}>
            <div>
            <label>Current Channel</label>
            <div>
                   <Select  onChange={(input)=>{setWelcomeChannelId(input.target.value);
                console.log(input.target.value)
                }}>
                   {channels?.map((channel) => <option selected={channel?.id===config?.welcomeChannelId}value={channel.id}># {channel.name}</option>)}
                   </Select>
            </div>
        </div>
        </section>
        <section style={{marginTop:"8px"}}>
            <div>
                <label htmlFor="message">Current Message</label>
                <div>
                    <TextArea id='message'>

                    </TextArea>
                </div>
            </div>

        </section>
        <Flex justifyContent="flex-end">
             <Button variant="secondary" style={{margin:'0 10px'}} type='button'>Reset</Button>
             <Button variant="primary" onClick={clickHandler} type='submit'>Save</Button>
        </Flex>
    </Container>
</PageSet>


):(<Navigate to="/menu"/>)
}

