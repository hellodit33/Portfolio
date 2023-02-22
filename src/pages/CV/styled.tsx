import styled from 'styled-components'

export const Container = styled.div`
    color: black;
    font-size: 14px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin:10px 100px;
    column-gap:60px;
`

export const ColumnContainer=styled.div`
display:flex;
flex-direction:column;
margin-top:10px;`

export const CVTitle=styled.div`font-size:25px;
display:flex;
align-items:center;
margin-top:80px;
margin-left:100px;
justify-self:center;
line-height:20px;
`
export const MissionTitle=styled.h3`margin:0px;
font-weight:900;
width:30em;`

export const DateMission =styled.div`display:grid;
grid-template-columns:0.5fr 1fr;
gap:10px;`

export const Work=styled.p`font-weight:300;`

export const Date =styled.p`font-weight:bold;`