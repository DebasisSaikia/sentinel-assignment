import { styled } from "styled-components";

const TopCardContainer = styled.div`
h1{
    text-transform: capitalize;
    font-size: 30px;
}
.top-card{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 20px;
}
`
const CardWrapper = styled.div`
padding: 18px;
background-color: #0e111b;
border-radius: 12px;
min-height: 120px;
display: flex;
flex-direction: column;
gap: 17px;
.text-value-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3{
        color: #9D9D9F;
    }
    h3,p{
        font-size: 14px;
    }
    .positive{
        color: #2c6f40;
    }
    .negative{
        color: #d63649;
    }
}
`

export { TopCardContainer, CardWrapper}