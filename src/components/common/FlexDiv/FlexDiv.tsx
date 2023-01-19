import React from 'react'
import * as S from './styled'

type Props = {
    children?: any
    end?: boolean
}

const FlexDiv = ({ children, end }: Props) => {
    return (
        <S.Container end={end}>
            {children}
        </S.Container>

    )
}

export default FlexDiv