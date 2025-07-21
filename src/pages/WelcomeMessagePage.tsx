import { Button, Container, Flex, PageSet, Select, TextArea, Title } from "../utils/styles"

export const WelcomeMessagePage = () =>{return(
<PageSet>

    <Container>
        <Title style={{justifyContent:'center'}}>
            Update Welcome Message
        </Title>
        <section style={{marginTop:'40px'}}>
            <div>
            <label>Current Channel</label>
            <div>
                   <Select>
                    <option disabled>Please select a channel</option>
                    <option>124</option>
                    <option>125</option>  
                    <option>1236</option>
                    <option>127</option>
                    <option>128</option>
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
             <Button variant="primary" type='submit'>Save</Button>
        </Flex>
    </Container>
</PageSet>


);
}

