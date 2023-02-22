import styled from 'styled-components'

export const Container = styled.div`
    color: black;
    font-size: 14px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin:80px 100px;
    gap:20px;
`

export const ColumnContainer=styled.div`
display:flex;
flex-direction:column;`

export const CVTitle=styled.div`font-size:25px;
display:flex;
align-items:center;
`
export const MissionTitle=styled.h4`margin:0px;`

export const DateMission =styled.div`display:grid;
grid-template-columns:1fr 1fr;`

export const Work=styled.p`font-weight:200;`

export const Date =styled.p`font-weight:bold;`