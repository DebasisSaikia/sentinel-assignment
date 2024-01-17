import { styled } from "styled-components";

const NavbarContainer = styled.div`
width: 100%;
height: 70px;
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
    /* animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite; */
}
/* @keyframes example {
  from {color: red;}
  to {color: yellow;}
} */

`
const RightContainer = styled.div``

const CenterContainer = styled.div`
display: flex;
h1{
    font-size: 30px;
    text-transform: capitalize;
}
p{
    color: #666667;
}
`
const NavCTA= styled.button`
    padding: 12px;
    width: 180px;
    border-radius: 12px;
    text-align: center;
    background-color: #2c6f40;
`

export { NavbarContainer, LeftContainer, RightContainer, CenterContainer, NavCTA }