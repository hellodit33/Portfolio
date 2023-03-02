import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "animate.css";
import colors from "../../theme/colors";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${colors.primary};
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  padding: 0 20px;
`;

type StyledLinkProps = {
  name?: boolean;
  active?: boolean;
};
export const StyledLink = styled(NavLink)<StyledLinkProps>`
  color: ${(props) => (props.name ? "white" : colors.green_highlight)};
  font-size: ${(props) => (props.name ? 30 : 20)}px;
  text-decoration: none;
  margin: 0px 20px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0px 10px;
  }
  &:hover {
    animation: jello;
    color: white;
    animation-duration: 2s;
  }
  &.active {
    color: ${colors.pink};
    font-weight: 700;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
  &:hover {
    animation: jello;
    color: white;
    animation-duration: 2s;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  color: white;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const ClosingIcon = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    animation: jello;
    color: white;
    animation-duration: 2s;
  }
`;
