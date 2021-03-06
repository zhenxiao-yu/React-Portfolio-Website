import { Home } from "../components/AllSvgs";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mediaQueries } from "../components/Themes";

const HomeBtn = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #87D271;
  padding: 0.3rem;
  border-radius: 50%;
  border: 2px solid black;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;

  &:hover {
    background-color: rgb(255,224,27,0.7);
    box-shadow: 0 0 7px 6px rgba(255,224,27, 0.3);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  ${mediaQueries(40)`
   width: 2rem;
   height: 2rem;
      svg{
        width:20px;
        height:20px;
      }

  `};
`;

//home button
const HomeButton = () => {
  return (
    <HomeBtn>
      <NavLink to="/">
        <Home width={30} height={30} fill="currentColor" />
      </NavLink>
    </HomeBtn>
  );
};

export default HomeButton;
