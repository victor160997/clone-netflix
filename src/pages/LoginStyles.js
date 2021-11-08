import styled from "styled-components";

export const LoginPage = styled.div`
  @media screen and (min-width: 769px) {

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
  }
  @media screen and (max-width: 760px) {
    background-image: url(${ props => `${ props.background }`});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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
      margin-top: 15vh;
      h1 {
        background-color: transparent;
      }
      section {
        background-color: transparent;
        width: 80vw;
        form {
          background-color: transparent;
          width:100%;
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
          p {
            display:${({validity}) => validity ? `none` : `inherit`};
            background-color: transparent;
            color: #e87c03;
            margin-top: -15px;
            padding: 6px 3px;
            font-size: 10px;
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
  }
`;