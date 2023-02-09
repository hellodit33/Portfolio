import FlexDiv from '../common/FlexDiv'
import * as S from './styled'
type Props = {
    name?: boolean
}

const Navbar = ({ }: Props) => {
    return (
        <>
            <S.Container>
                <S.Nav>

                    <FlexDiv end>
                        <S.StyledLink to="/">About</S.StyledLink>
                        <S.StyledLink to="/portfolio">Portfolio</S.StyledLink>

                        <S.StyledLink to="/cv">CV</S.StyledLink>

                        <S.StyledLink to="/contact">Contact</S.StyledLink>

                    </FlexDiv>
                </S.Nav>
            </S.Container>

        </>

    )
}

export default Navbar