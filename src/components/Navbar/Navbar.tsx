import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import * as S from "./styled";



const Navbar = () => {
  const location = useLocation();

  const isActiveLink = (pathname: string) => {
    return location.pathname === pathname;
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <S.Container>
        <S.Nav>
          {isMobile && !showMenu && (
            <S.HamburgerIcon onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </S.HamburgerIcon>
          )}
          {isMobile ? (
            <S.Menu style={{ display: showMenu ? "flex" : "none" }}>
              <S.StyledLink to="/" active={isActiveLink("/")}>
                About
              </S.StyledLink>
              <S.StyledLink to="/portfolio" active={isActiveLink("/portfolio")}>
                Portfolio
              </S.StyledLink>
              <S.StyledLink to="/cv" active={isActiveLink("/cv")}>
                CV
              </S.StyledLink>
              <S.StyledLink to="/contact" active={isActiveLink("/contact")}>
                Contact
              </S.StyledLink>
              <S.ClosingIcon>
                <svg
                  onClick={toggleMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z" />
                </svg>
              </S.ClosingIcon>
            </S.Menu>
          ) : (
            <S.Menu>
              <S.StyledLink to="/" active={isActiveLink("/")}>
                About
              </S.StyledLink>
              <S.StyledLink to="/portfolio" active={isActiveLink("/portfolio")}>
                Portfolio
              </S.StyledLink>
              <S.StyledLink to="/cv" active={isActiveLink("/cv")}>
                CV
              </S.StyledLink>
              <S.StyledLink to="/contact" active={isActiveLink("/contact")}>
                Contact
              </S.StyledLink>
            </S.Menu>
          )}
        </S.Nav>
      </S.Container>
    </>
  );
};

export default Navbar;
