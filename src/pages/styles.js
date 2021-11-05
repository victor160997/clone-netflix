import styled from "styled-components";

export const Category = styled.section`
  div {
    div {
      display: flex;
      max-width: 100vw;
      img {
        margin-right: 15px;
        margin-left: 15px;
        transition: transform 0.25s;
      }
      img:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;