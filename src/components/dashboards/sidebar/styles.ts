import { styled } from "styled-components";

const SidebarContainer = styled.div`
    background-color: #131722;
    border-radius: 12px;
    padding: 20px;
    height: 100vh;
    .ip-address, .country{
        display: flex;
        gap: 12px;
        font-size: 14px;
        padding-top:8px;
        padding-bottom: 8px;
        padding-left: 8px;
        span{
            color: #9D9D9F;
        }
    }
    .country{
        border-bottom: 1px solid #1a1d2f;
        border-top: 1px solid #1a1d2f;
    }
    .active-border{
        border: 1px solid #1f5d9b;
        transform: scale(1.03);
    }
`;

const CardContainer = styled.div`
display: flex;
align-items: center;
background-color: #10131c;
padding: 16px;
border-radius: 18px;
border: 1px solid #1a1d2f;
margin-top: 20px;
justify-content: space-between;
cursor: pointer;
.image-container{
    background-color: #4172ec;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
h3{
    color: #9D9D9F;
}
&:hover{
    transition: all 0.4s ease-in-out;
    transform: scale(1.03);
    .arrow-img{
        rotate: 10deg;
        transition: all 0.5s ease-in-out;

    }
}
`
const TextWithIcon = styled.div`
display: flex;
align-items: center;
gap: 12px;
`

export { SidebarContainer, CardContainer, TextWithIcon };