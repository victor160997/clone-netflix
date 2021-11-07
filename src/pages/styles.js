import styled from "styled-components";

export const Featured = styled.div`
  background-image: url(${ props => `${props.urlBase}${props.background}` });
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: -42px -8px 0 -8px;
  div {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
    div {
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, #111 30%, transparent 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;
      padding-bottom: 150px;
      h1 {
        background-color: transparent;
        font-size: 60px;
        font-weight: bold;
        margin-bottom: 0;
      }
      section {
        background-color: transparent;
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
        display: flex;
        width: 350px;

        p {
          margin: 0;
          color: #46d369;
          margin-right: 15px;
        }
        span {
          margin: 0 15px 0 0;
        }
      }
      p {
        background-color: transparent;
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40vw;
      }
      nav {
        background-color: transparent;
        margin-top: 0;
        button {
          display: inline-block;
          font-size: 20px;
          font-weight: bold;
          padding: 12px 25px;
          border-radius: 5px;
          text-decoration: none;
          margin-right: 10px;
          border: none;
          transition: all ease 0.2s;
          cursor: pointer;
          margin-bottom: 15px;
        }
        button:hover {
          opacity: 0.7;
        }
      }
      span {
        background-color: transparent;
        strong {
          background-color: transparent;
          font-size: 18px;
          color: #999;
        }
      }
    }
  }
  `;

  export const Assistir = styled.button`
    background-color: #FFF;
    color: #000;
  `;

export const MInhaLista = styled.button`
  background-color: #333;
  color: #FFF;
`;

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
          /* img:hover {
            transform: scale(1);
            box-shadow: 0 5px 15px black;
            display: inherit;
          } */
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

export const HeaderPage = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
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
      text-decoration: none;
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

export const LoginPage = styled.div`
  background-image: url(${ props => `${ props.background }`});
  background-size: cover;
  width: 99.6vw;
  height: 99.1vh;
  margin: -5px -5px -5px -5px;
  img {
    height: 45px;
    margin-left: 3%;
    margin-top: 20px;
    background-color: transparent;
  }
  div {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: rgba(0, 0, 0, 0.7);
      max-width: 470px;
      min-width: 470px;
      height: 620px;
      padding: 40px 68px 40px;
      h1 {
          background-color: transparent;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 28px;
        }
      form {
        background-color: transparent;
        width: 100%;
        input {
          background-color: transparent;
          border-radius: 4px;
          border: solid #e87c03 ${({validity}) => validity ? 0 : `2px`};
          border-top: 0;
          border-left: 0;
          border-right: 0;
          color: #fff;
          height: 50px;
          line-height: 50px;
          padding: 16px;
          width: 100%;
          color: #8c8c8c;
          font-size: 18px;
          background-color: #333;
          margin-bottom: 18px;
        }
        input:focus {
          color: white;
        }
        p {
          display:${({validity}) => validity ? `none` : `inherit`};
          background-color: transparent;
          color: #e87c03;
          margin-top: -15px;
          padding: 6px 3px;
          font-size: 13px;
        }
        button {
          border-radius: 4px;
          font-size: 16px;
          font-weight: 700;
          margin: 24px 0 12px;
          width: 100%;
          max-width: 100%;
          padding: 16px;
          text-decoration: none;
          background: #e50914;
          border:none;
          cursor: pointer;
        }
      }
    }
  }
`;