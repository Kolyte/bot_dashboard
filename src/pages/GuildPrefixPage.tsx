import { Button, Container, Flex, InputField, Title } from "../utils/styles";

export const GuildPrefixPage = () =>
 <div style={{padding:'25px'}}>
    <Container style={{width:"800px"}}>
        <Title>Update Command Prefix</Title>
        <form>
            <div><label htmlFor="prefix">Current prefix</label></div>
            <InputField style={{margin:'10px 0px'}}/>
            <Flex justifyContent="flex-end">
                <Button variant="secondary" style={{margin:'0 10px'}} type='button'>Reset</Button>
                <Button variant="primary" type='submit'>Save</Button>
            </Flex>
            
        </form>
    </Container>


</div>;
