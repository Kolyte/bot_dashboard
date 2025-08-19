import styled, { css, keyframes } from 'styled-components';

export const MainButton = styled.div`
  display: flex;
  width: 400px;
  background-color: #2121214a;
  align-items: center;
  padding: 10px 25px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #58585863;
  margin:15px 0px;
  box-shadow: 0px 1px 5px 0px #00000040;
`;
export const HomePageStyle = styled.div`
  height: 100%;
  padding: 50px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const GuildMenuPageStyle = styled.div`
display:flex;
justify-content:space-between;
padding:8px;
background-color:#242222;
border-radius:10px;
border:0.222px solid #ffffff2f;
margin:8px;
cursor: pointer;
transition: background-color 0.3s;

  &:hover {
    background-color: #1f1f1f; 
  }
`;
export const Container = styled.div`
 width: 1200px;
 margin: 0 auto;
 `
export const GuildIcon = styled.img`
border-radius:50%;
`;
export const AppBarStyle = styled.header`
display: flex;
justify-content:space-between;
align-items:center;
padding:15px 35px;
box-sizing:border-box;
border-bottom:1px solid #c9c9c921;
`;
export const Title = styled.p`
font-size:20px;

`;

export const InputField = styled.input`
padding:14px 16px;
font-size:16px;
box-sizing:border-box;
background-color:#252525;
border-radius:5px;
border:1px solid #393939;
color: white;
font-family:'DM Sans';
width:100%;
&:focus{
  outline: 1px solid #ffffff5a;
}
`
type ButtonProps={
variant:'primary'|'secondary';
};
export const Button = styled.button<ButtonProps>`
padding:12px 20px;
outline:none;
cursor:pointer;
border:none;
font-size:14px;
color:#fff;
font-family:'DM Sans';
border-radius:5px;
${({variant})=>
variant==='primary'&&
css`
background-color:#0047AB

`}
${({variant})=>
variant==='secondary'&&
css`
background-color:#3d3d3d

`}
`
type FlexProps = Partial<{
  alignItems: string;
  justifyContent: string;
  flexDirection: string;
}>;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const TextButton = styled(MainButton)`
padding:20px 30px;
cursor:pointer;
background-color:#272727;
width:100%;
margin:4px;
`;
export const PageSet= styled.div`
padding:50px;

`
export const EmptyStateText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    font-size: 24px;
    color: #666;
    font-weight: 500;
`;
export const Select = styled.select`
padding:10px;
-webkit-appearance: none;
-moz-appearance: none;      
appearance: none;        
margin:10px 0;
width:100%;
background-color:inherit;
font-size:16px;
color:white;
border-radius:5px;
border-color:#3f3f3f;
&:focus{
outline:1px solid #ffffff5a;
}
&>option{
background-color:#292929;
}
`
export const SocialLink = styled.a`
  text-decoration: none; 
  color: #ffffff; 
  background-color: #272727; 
  padding: 10px 14px; 
  border-radius: 5px; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #3f3f3f; 
  }
`;
export const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #272727;
  width: 100%;
  height: 60px;
  bottom: 0;
  position: absolute; 
  left: 0; 
  right: 0; 
  border: none;
`;
export const CenterItems = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 300px; 
`;

export const TextArea = styled.textarea`
padding:14px 16px;
box-sizing:border-box;
font-size:16px;
margin:10px 0;
width:100%;
border:1px solid #3f3f3f;
background-color:#272727;
color:white;
border-radius:5px;
outline:none;
resize:none;
&:focus{
outline:1px solid #ffffff5a;
}
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

&::after {
  content: '';
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1160e9ff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
}
`;



export const Grid = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
column-gap:20px;
`;
export{};