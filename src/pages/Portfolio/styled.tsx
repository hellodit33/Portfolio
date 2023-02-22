import styled from 'styled-components'

export const Container = styled.div`
    color: black;
    font-size: 14px;
`

export const WrapperContainer=styled.div`
display:grid;
grid-template-columns: 1fr 0.5fr;
margin:100px;
justify-content:center;
align-items:center;
`

export const FirstWrapper=styled.div`display:grid;
grid-template-rows: 1fr 0.5fr;`

export const WrapperLinks = styled.div`display:flex;
flex-direction:column;`
export const Image = styled.img`
width: 800px;
height:400px;
`


export const Link = styled.a`
    color: black;
    font-size: 20px;
`

export const Section=styled.div`
display: grid;
grid-template-columns: 1fr;
color: black;
.fp-overflow {
  overflow-y: visible;
}

.fp-watermark {
  display: none;
}

`