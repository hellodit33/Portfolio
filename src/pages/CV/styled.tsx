import styled from "styled-components";

export const Container = styled.div`
  color: black;
  font-size: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 100px;
  column-gap: 60px;
  margin-bottom: 30px;
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
 
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const CVTitle = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-left: 100px;
  justify-self: center;
  line-height: 20px;
  @media only screen and (max-width: 1100px) {
    font-size: 20px;
    justify-self: flex-start;
  }
`;
export const MissionTitle = styled.h3`
  margin: 0px;
  font-weight: 900;
  width: 30em;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const DateMission = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 10px;
`;

export const Work = styled.p`
  font-weight: 400;
`;

export const Date = styled.p`
  font-weight: bold;
`;

export const CvSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

export const CvLink = styled.a`
  color: black;
  font-weight: 700;
  &:hover {
    text-decoration: none;
    color: black;
  }
  &:visited {
    text-decoration: none;
    color: black;
  }
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export const TechList = styled.ul``;

export const TechListItem = styled.li`
  font-weight: 400;
  font-size: 15px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  margin: 0px;
  @media only screen and (max-width: 1100px) {
    scroll-snap-type: none;
    height: auto;
    overflow: visible;
  }
`;

export const FullSection = styled.section`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  flex: 0 0 100%;
  scroll-snap-align: start;
  position: relative; /* add this to make child element position absolute within this section */
  background: rgb(204, 213, 174);
  background: linear-gradient(
    90deg,
    rgba(204, 213, 174, 1) 0%,
    rgba(233, 237, 201, 1) 34%,
    rgba(250, 237, 205, 1) 100%
  );
`;
