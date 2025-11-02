import { useContext, useState } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Button, Container, Flex, MessageContainer, PageSet, Select, Spinner, StyledWrapper, TextArea, Title } from "../utils/styles"
import { Navigate } from "react-router-dom";
import { useFetchGuildChannels } from "../utils/hooks/fetchGuildChannels";
import { updateEmbedColour, updateGuildChannel, updateStateForAvatar, updateWelcomeChannelMessage } from "../utils/api";
import { useFetchGuildConfig } from "../utils/hooks/fetchGuildConfig";
import '../styles/checkbox.css';
import InfoButton from "../components/infoButton";
// import FileUpload from "../components/FileUpload";
import axios from 'axios';
import styled from "styled-components";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-left: 20px; 
`;

const ImageItem = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;
export const WelcomeMessagePage = () =>{
    const [check,setCheck]= useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const {guild} = useContext(GuildContext);
    const { ImageUrl,setImageUrl } = useFetchGuildConfig(guild && guild.id|| "");
    const [tempUrl, setTempUrl]= useState<string | null>(null);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('file uploaded');
        setCheck(false);
        if(event.target.files){
                setImage(event.target.files[0]);
                setTempUrl(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleUpload = async () => {
        if (!image) return;
        setCheck(true);
        setUploading(true);
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post(`http://localhost:3001/api/guilds/${guild?.id}/upload-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data.imageUrl);
            setImageUrl(response.data.imageUrl);
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setUploading(false);
        }
    };

    const{config,isChecked,setIsChecked,channels,welcomeChannelId,setWelcomeChannelId,loading,error} = useFetchGuildChannels(guild && guild.id || "");
    const {welcomeMessage,embedColour,setEmbedColour,setWelcomeMessage} = useFetchGuildConfig(guild && guild.id || "");
    
 
    const clickHandler = async(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) =>{
        e.preventDefault();
        try{

                await handleUpload();
                await updateGuildChannel(guild!.id, welcomeChannelId);
                await updateWelcomeChannelMessage(guild!.id, welcomeMessage);
                await updateStateForAvatar(guild!.id, isChecked);
                await updateEmbedColour(guild!.id, embedColour!);
                console.log(config);
            
        }catch{
            console.error("Error saving welcome message");
        }
    }
    if(loading){
           return <Spinner/>
    }
    
    return guild?(
        
<PageSet style={{ overflow: 'hidden', height: 'auto', maxWidth: '100%' }}>

    <Container style={{ padding: '20px', backgroundColor: "#2d2d2d", borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', position: 'relative', overflow: 'hidden', // Change to hidden to prevent overflow
    maxWidth: '100%' }}>
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
                overflow:'auto',
            }}
        />
        
        <Title style={{ display: "flex", justifyContent: 'flex-start' }}>
            Update Welcome Message
        </Title>
        <section style={{ marginTop: '40px' }}>
            <div>
                <label>Current Channel</label>
              
                <div>
                    <Select onSelect={(value)=>console.log(value)} onChange={(input) => { setWelcomeChannelId(input.target.value); console.log(input.target.value)}}>
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
                <MessageContainer>
                <label htmlFor="message">Current Message</label>
                <InfoButton/>
                </MessageContainer>
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
            <div>
                
            <section style={{ marginTop: "8px", display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: '1', marginRight: '20px' }}>
        <StyledWrapper style={{ padding: '40px 0px' }}>
            <label htmlFor="file" className="custum-file-upload">
                <div className="icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="currentColor" />
                        </g>
                    </svg>
                </div>
                <div className="text">
                    <span>Click to upload image</span>
                </div>
                <input id="file" type="file" onChange={handleImageChange} />
            </label>
            {uploading && <p>Uploading...</p>}
        </StyledWrapper>
    </div>
    
    <ImageGrid style={{paddingRight:"500px", maxWidth: '300px'}}>
        {ImageUrl && <img src={ImageUrl} alt="Uploaded" style={{ maxWidth: '100%',maxHeight:"200px", borderRadius: '10px' }} />}
        {/* {!ImageUrl && tempUrl && <p>Image uploaded:</p>}
        {ImageUrl && tempUrl && <p>New image:</p>} */}
        {tempUrl && !check && <img src={tempUrl} alt="Uploaded" style={{ maxWidth: '100%',maxHeight:"200px", borderRadius: '10px' }} />}
    </ImageGrid>
    
</section>


    
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



