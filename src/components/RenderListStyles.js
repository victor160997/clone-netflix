import styled from "styled-components";
import { Category } from "../pages/HomePageStyles";

export const MovieRight = styled.div`
  svg {
    position: absolute;
    width: 45px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    /* margin-left: -55px; */
    right: 0;
    z-index: 99;
    opacity: 0;
    cursor: pointer;
    transition: all ease 0.25s;
  }
  ${Category}:hover svg {
    opacity: 0.8;
  }
`;

export const MovieLeft = styled.div`
  svg {
    position: absolute;
    width: 45px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    /* margin-left: -55px; */
    left: 0;
    z-index: 99;
    opacity: 0;
    cursor: pointer;
    transition: all ease 0.25s;
  }
`;