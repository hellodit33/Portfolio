import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin-right: 40px;
margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


type StyledLinkProps = {
    name?: boolean;
};
export const StyledLink = styled(NavLink) <StyledLinkProps>`
  color: ${(props) => (props.name ? "#875CFF" : "#79CDBE")};
  font-size: ${(props) => (props.name ? 30 : 20)}px;
  text-decoration: none;
  margin: 0px 20px;
`;
