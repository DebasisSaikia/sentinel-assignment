import { styled } from "styled-components";

const TableContainer = styled.div` 
    margin-top: 20px;
    width: 100%;
    background-color: #0e111b;
    border-radius: 12px;
    border: 1px solid #1a1d2f;
    padding-top: 18px;     
    padding-bottom: 18px;
    h1{
        margin-left: 18px !important;
        font-size: 30px;
        margin-bottom: 18px;
    }
`

const TableWrapper = styled.div`
    width: 100%;
    margin-top: 18px;
`

const TableHeader = styled.div` 
    background-color: #161a25;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    padding: 18px;
    gap: 10px;
    p {
        font-size: 14px;
        color: #9d9d9f;
    }
`

const TableBody = styled.div` 
    padding-left: 18px;
    padding-right: 18px;
`

const TableRow = styled.div<{ color: string }>`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #161a25;
    font-size: 12px;
    color: #9d9d9f;
    .node_used {
        width: 80px;
        background-color: ${(props) => props.color};
        color: #fff;
        padding: 4px 8px 4px 8px;
        text-align: center;
    }
`;

export { TableContainer, TableWrapper, TableHeader, TableBody, TableRow };
