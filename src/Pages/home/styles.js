import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #475569;

    a {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #7c3aed;
      transition: all 0.3s;

      :hover {
        text-decoration: underline;
        color: #9f67ff;
      }
    }
  }
`;

export const DivImg = styled.div`
  margin-bottom: 114px;

  @media (max-width: 770px) {
    margin-bottom: 40px;
  }
`;

export const DivBg = styled.div`
  height: 100vh;
  width: 100vw;
 
  @media (max-width: 1000px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  width: 50%;
`;

export const DivItens = styled.div`
  width: 50%;
  margin-top: 40px;
  padding: 0px 112px;

  @media (max-width: 780px) {
    width: 100%;
    padding: 18px;
  }
`;

export const DivAccess = styled.div`
  width: 350px;
  margin-bottom: 40px;

  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 55px;
    margin-bottom: 16px;
  }

  span {
    color: #475569;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Input = styled.input`
  width: 100%;
  gap: 10px;
  padding: 16px 12px;
  outline: none;

  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;

  color: #7c3aed;
  :focus {
    border: 1px solid #7c3aed;
    border-radius: 4px;
    ::placeholder {
      color: #7c3aed;
    }
  }
`;

export const DivInput = styled.form`
  width: 384px;
  @media (max-width: 770px) {
    width: 100%;
  }

  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }

  .enter {
    width: 384px;
    height: 56px;

    margin: 32px 0px;
    padding: 16px 24px;
    gap: 10px;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    background: #7c3aed;
    border-radius: 4px;
    transition: all 0.3s;
    outline: none;
    border: none;
    :hover {
      background-color: #9f67ff;
    }

    @media (max-width: 770px) {
      width: 100%;
    }
  }
`;

export const DivEmail = styled.div`
  div {
    margin-bottom: 8px;
  }
  p {
    font-weight: 600;
    margin-top: 8px;
    color: red;
  }
`;

export const DivPassWord = styled.div`
  p {
    color: red;
    font-weight: 600;
  }
  div {
    display: flex;
    justify-content: space-between;

    margin-top: 16px;
    margin-bottom: 8px;

    a {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      transition: all 0.3s;

      :hover {
        text-decoration: underline;
        color: #9f67ff;
      }
    }
  }

  .swapper {
    position: relative;
  }

  .btn {
    background: transparent;
    color: rgba(148, 163, 184, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }

  .icon {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 30px;
    bottom: 25%;
  }
`;

export const BackgroundDesktop = styled.img``;
