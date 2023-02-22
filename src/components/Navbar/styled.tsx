import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "animate.css";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  background-color: #44703b;
  width: 100%;
`;

export const Nav = styled.div`
  margin-right: 40px;
  margin: 20px 50px;
`;

type StyledLinkProps = {
  name?: boolean;
};
export const StyledLink = styled(NavLink)<StyledLinkProps>`
  color: ${(props) => (props.name ? "white" : "#c9e895")};
  font-size: ${(props) => (props.name ? 30 : 20)}px;
  text-decoration: none;
  margin: 0px 20px;

  &:hover {
    animation: jello;
    color: white;
    animation-duration: 2s;
  }
`;
