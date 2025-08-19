import { useContext } from "react";
import { useFetchGuildConfig } from "../utils/hooks/fetchGuildConfig";
import { Button, Container, Flex, InputField, Spinner, Title } from "../utils/styles";
import { GuildContext } from "../utils/contexts/GuildContext";
import { updateGuildPrefix } from "../utils/api";

export const GuildPrefixPage = () =>
{
    const {guild }= useContext(GuildContext)
    const {prefix, setPrefix, config, error, loading} = useFetchGuildConfig(guild && guild.id|| "");
    console.log(error);
    const savePrefix = async(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) =>{
       e.preventDefault();
       console.log(prefix)
       try{
        const res = await updateGuildPrefix(guild!.id, prefix);
        console.log(res);
       }catch(error){
              console.error("Error saving prefix", error);
       }
    }
    return( <div style={{padding:'25px'}}>
    <Container style={{width:"800px"}}>
       {!loading && config ? <>
        <Title>Update Command Prefix</Title>
        <form>
            <div><label htmlFor="prefix">Current prefix</label></div>
            <InputField style={{margin:'10px 0px'}} id="prefix" value={prefix} onChange={(input)=>setPrefix(input.target.value)}/>
            <Flex justifyContent="flex-end">
                <Button variant="secondary" style={{margin:'0 10px'}} type='button'>Reset</Button>
                <Button onClick={savePrefix} variant="primary" type='submit'>Save</Button>
            </Flex>
            
        </form>
       </>:<>
       <Spinner/>
       </>}
    </Container>


</div>    );

};