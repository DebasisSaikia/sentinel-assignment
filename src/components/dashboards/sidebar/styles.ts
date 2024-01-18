import { styled } from "styled-components";

const SidebarContainer = styled.div`
    background-color: #131722;
    border-radius: 12px;
    padding: 20px;
    .ip-address, .country{
        display: flex;
        gap: 12px;
        font-size: 14px;
        padding-top:8px;
        padding-bottom: 8px;
        span{
            color: #9D9D9F;
        }
    }
    .country{
        border-bottom: 1px solid rgb(60,60,62);
        border-top: 1px solid rgb(60,60,62);
    }
`;

export { SidebarContainer };