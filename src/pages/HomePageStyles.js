import styled from "styled-components";

export const Home = styled.div`
  background-color: #111;
`;

export const Category = styled.section`
  margin-top: -150px;
  background-color: transparent;
  div {
    background-color: transparent;
    :hover svg {
      opacity: 1;
    }
    h2 {
      margin: 5px 0 0 30px;
      background-color: transparent;
    }
    div {
      background-color: transparent;
      overflow-x: hidden;
      padding-left: 30px;
      div {
        background-color: transparent;
        max-width: max-content;
        display: flex;
        padding-left: 0px;
        transition: all ease 0.5s;
        padding-bottom: 0;
        section {
          background-color: transparent;
          width: 150px;
          transition: all ease 0.2s;
          height: max-content;
          img {
            width: 150px;
            transform: scale(0.9);
            cursor: pointer;
            transition: all ease 0.2s;
          }
          svg {
            visibility: hidden;
            transition: all ease 0.2s;
            margin: 5px;
            cursor: pointer;
          }
        }
        section:hover {
          box-shadow: 0 5px 15px black;
          svg {
            visibility: visible;
          }
          svg:hover {
            fill: #46d369;
          }
          svg:active {
            fill: white;
          }
          img {
            transform: scale(1);
            display: inherit;
          }
        }
      }
    }
  }
`;