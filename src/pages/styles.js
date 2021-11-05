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
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
        display: flex;
        width: 300px;

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
    h2 {
      margin: 0 0 0 30px;
      background-color: transparent;
    }
    div {
      overflow-x: hidden;
      padding-left: 30px;
      div {
        display: flex;
        max-width: 100vw;
        padding-left: 0px;
        img {
          transition: all ease 0.2s;
          width: 150px;
          transform: scale(0.9);
          cursor: pointer;
        }
        img:hover {
          transform: scale(1);
        }
      }
    }
  }
`;