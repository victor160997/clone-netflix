import styled from "styled-components";

export const HeaderPage = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: ${ ({ searching }) => searching ? 'max-content' : '60px' };
  overflow-y: ${ ({ searching }) => searching ? 'auto' : 'hidden' };;
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  align-items: center;
  background: ${ ({ background }) => background
    ? `background-color: rgb(17, 17, 17, 0.8)`
    : `linear-gradient(to bottom, #111 15%, transparent 85%)` };
  transition: all ease 0.5s;
  nav {
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      background-color: transparent;
      height: 25px;
      margin-right: 40px;
      cursor: pointer;
    }
    p {
      background-color: transparent;
      margin-right: 15px;
      cursor: pointer;
      text-decoration: none;
      transition: all ease 0.25s;
    }
    p:hover {
      color: #999;
    }
    a {
      background-color: transparent;
      text-decoration: none;
    }
    @media screen and (max-width: 760px) {
      a {
        display: none;
      }
    }
  }
  div {
    background-color: transparent;
    img {
      background-color: transparent;
      height: 35px;
      cursor: pointer;
      border-radius: 3px;
    }
    svg {
      background-color: transparent;
      height: 35px;
      margin-right: 25px;
      cursor: pointer;
      path {
        background-color: transparent;
      }
    }
  }
`;