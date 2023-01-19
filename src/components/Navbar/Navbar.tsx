import React from 'react'
import FlexDiv from '../common/FlexDiv'
import * as S from './styled'
import { NavLink } from 'react-router-dom';
import { Space } from '../common/styled';

type Props = {
    name?: boolean
}

const Navbar = ({ }: Props) => {
    return (
        <S.Container>

            <S.StyledLink name to="/">Elodie Pradet</S.StyledLink>
            <FlexDiv end>
                <S.StyledLink to="/">About</S.StyledLink>
                <S.StyledLink to="/portfolio">Portfolio</S.StyledLink>

                <S.StyledLink to="/cv">CV</S.StyledLink>

                <S.StyledLink to="/contact">Contact</S.StyledLink>

            </FlexDiv>

        </S.Container>

    )
}

export default Navbar