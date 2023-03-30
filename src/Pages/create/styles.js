import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export const DivImg = styled(motion.div)`
  margin-bottom: 60px;

  @media (max-width: 780px) {
    margin-bottom: 40px;
  }
`;

export const DivBg = styled(motion.div)`
  height: 100vh;
  width: 100vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  width: 50%;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const DivItens = styled(motion.div)`
  width: 50%;

  margin-top: 40px;
  padding: 0px 112px;

  @media (max-width: 780px) {
    width: 100%;
    padding: 18px;
  }

  @media (max-width: 820px) {
    padding: 18px;
  }
`;

export const DivAccess = styled(motion.div)`
  max-width: 360px;
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

export const DivInput = styled(motion.form)`
  max-width: 384px;

  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }

  .enter {
    width: 100%;
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
  }
`;

export const DivEmail = styled(motion.div)`
  div {
    margin-bottom: 8px;
  }
  p {
    font-weight: 600;
    margin-top: 8px;
    color: red;
  }
`;

export const LinkCreate = styled(Link)``;

export const DivPassWord = styled(motion.div)`
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
    top: -73px;
  }
`;

export const BackgroundDesktop = styled.img``;
