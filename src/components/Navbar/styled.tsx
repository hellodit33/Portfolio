import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
      position: fixed;
        z-index:1;
    background-color: black;
width: 100%;
`;

export const Nav = styled.div`margin-right: 40px;
margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;`


type StyledLinkProps = {
  name?: boolean;
};
export const StyledLink = styled(NavLink) <StyledLinkProps>`
  color: ${(props) => (props.name ? "white" : "#79CDBE")};
  font-size: ${(props) => (props.name ? 30 : 20)}px;
  text-decoration: none;
  margin: 0px 20px;
`;
