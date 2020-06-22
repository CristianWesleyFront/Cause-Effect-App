import styled from "styled-components";

export const Repositories = styled.div`
  margin-top: 16px;
  max-width: 400px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 16px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  div {
    margin: 0 16px;
    flex: 1;
    strong {
      font-size: 20px;
      color: #8592f2;
    }
    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-left: 0px;
        margin-right: 5px;
      }
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
