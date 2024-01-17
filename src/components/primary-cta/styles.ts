import { styled } from "styled-components";

const PrimaryCTAcontainer = styled.button`
    flex: 1 1 auto;
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 5px #eee;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
        transition: all 0.4s ease-in-out;
        background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167))
    }
`

export { PrimaryCTAcontainer }