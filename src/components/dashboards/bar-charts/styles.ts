import { styled } from "styled-components";

const BarChartContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    background-color: #0e111b;
    border-radius: 12px;
    border: 1px solid #1a1d2f;
    padding: 18px;
`;

const ChartHeading = styled.div`
display: flex;
justify-content: space-between;
.right-container{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}
.heading-box{
    height: 20px;
    width: 20px;
    background-color: #211e28;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    &:nth-child(2){
        background-color: #1F55EB;
    }
    p{
        font-size: 10px;
    }
}
`

export { BarChartContainer, ChartHeading }