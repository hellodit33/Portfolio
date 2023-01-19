import styled from 'styled-components'

type FlexDivProps = {
    end?: boolean
}

export const Container = styled.div<FlexDivProps>`
    display:flex;
    flex-direction:row;
    justify-content: ${(props) => props.end && 'flex-end'}
`