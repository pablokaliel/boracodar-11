import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  padding: 0px 112px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #475569;

    @media (max-width: 770px) {
      color: white;
    }

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

  @media (max-width: 770px) {
    padding: 18px;
    width: 100%;
  }
`;

export const DivImg = styled.div`
  margin-bottom: 114px;

  @media (max-width: 770px) {
    margin-bottom: 40px;
  }
`;

export const DivAccess = styled.div`
  width: 350px;
  margin-bottom: 40px;

  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 55px;
    @media (max-width: 770px) {
      color: #fff;
    }

    margin-bottom: 16px;
  }

  span {
    color: #475569;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: 770px) {
      color: rgb(204 214 227);
    }
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
    color: #fff;
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
`;

export const DivPassWord = styled.div`
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

export const BackgroundDesktop = styled.img`
  @media (max-width: 770px) {
    display: none;
  }
`;
export const BackgroundMobile = styled.img`
  @media (min-width: 770px) {
    display: none;
  }
`;
