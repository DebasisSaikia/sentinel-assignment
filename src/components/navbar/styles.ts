import { styled } from "styled-components";

const NavbarContainer = styled.div`
width: 100%;
height: 90px;
border-bottom: 1px solid rgb(60,60,62);
display: flex;
justify-content: space-between;
align-items: center;
`
const LeftContainer = styled.div`
display: flex;
align-items: center;
gap: 20px;
h1{
    font-size: 30px;
    text-transform: capitalize;
    
}
`
const RightContainer = styled.div`
h1{
    font-size: 30px;
    font-weight: bold;
    animation-name: text;
    animation-duration: 4s;
    transition: all 0.4s ease-in-out;
    animation-iteration-count: infinite; 
}
@keyframes text {
  from {color: blue;}
  to {color: 081450;}
  }
`

const CenterContainer = styled.div`
display: flex;
align-items: center;
gap: 12px;
.button-container{
    border-left: 1px solid rgb(60,60,62);
}
h1{
    font-size: 30px;
    text-transform: capitalize;
}
p{
    color: #666667;
}
`
const NavCTA = styled.button`
    padding: 12px;
    width: 180px;
    border-radius: 12px;
    text-align: center;
    background-color: #2c6f40;
    margin-left: 12px;
`

export { NavbarContainer, LeftContainer, RightContainer, CenterContainer, NavCTA }