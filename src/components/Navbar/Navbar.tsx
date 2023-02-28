import { useLocation } from "react-router";
import FlexDiv from "../common/FlexDiv";
import * as S from "./styled";

type Props = {
  name?: boolean;
  active?:boolean;
};

const Navbar = ({}: Props) => {
  const location = useLocation();

  const isActiveLink = (pathname: string) => {
    return location.pathname === pathname;
  };

  return (
    <>
      <S.Container>
        <S.Nav>
          <FlexDiv end>
            <S.StyledLink to="/" active={isActiveLink('/')}>About</S.StyledLink>
            <S.StyledLink to="/portfolio" active={isActiveLink('/portfolio')}>Portfolio</S.StyledLink>
            <S.StyledLink to="/cv" active={isActiveLink('/cv')}>CV</S.StyledLink>
            <S.StyledLink to="/contact" active={isActiveLink('/contact')}>Contact</S.StyledLink>
          </FlexDiv>
        </S.Nav>
      </S.Container>
    </>
  );
};

export default Navbar;
