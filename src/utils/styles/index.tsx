import styled, { css } from 'styled-components';

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
background-color:#252525;
border-radius:5px;
border:0.222px solid #ffffff2f;
margin:8px;
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
background-color:#252525;
border-radius:5px;
border:1px solid #393939;
color: white;
font-family:'DM Sans';
width:100%;
:focus{
  outline: 1px solid #fff;
}
`
type ButtonProps={
variant:'primary'|'secondary';
};
export const Button = styled.button<ButtonProps>`
padding:12px 20px;
outline:none;
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
export{};