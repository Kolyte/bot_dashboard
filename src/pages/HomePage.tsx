import {FaDiscord,FaQuestionCircle} from 'react-icons/fa';
import { MainButton,HomePageStyle} from '../utils/styles';
const FaDiscordWithProperType = FaDiscord as React.ElementType;
const FaQuestionCircleWithProperType = FaQuestionCircle as React.ElementType;
export const HomePage:React.FC = () => {
return(<HomePageStyle>
<div></div>
<div>
<MainButton>
      <div style={{ marginRight: '10px' }}>
        <FaDiscordWithProperType size={50} color="5865F2" />
      </div>
      <div style ={{fontSize:'18px'}}>Login with Discord</div>
  </MainButton>     
   <MainButton>

      <div style={{ marginRight: '10px' }}>
        <FaQuestionCircleWithProperType size={50} />
      </div>
      <div  style ={{fontSize:'18px'}}>Support Server</div>
    </MainButton>

</div>
<div style={{
    display:'flex',
    width:'450px',
    justifyContent:'space-between',
}}>
    <span>Privacy Policy</span>
    <span>Terms of Service</span>
    <span>Contact us</span>
</div>
</HomePageStyle>);
};
