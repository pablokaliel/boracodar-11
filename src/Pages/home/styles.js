import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  padding: 0px 112px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #475569;
    a {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #7c3aed;
    }
  }
`;

export const DivImg = styled.div`
  margin-bottom: 114px;
`;

export const DivAccess = styled.div`
  width: 350px;
  margin-bottom: 40px;
  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 55px;
    margin-bottom:16px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Input = styled.input`
    padding: 16px 12px;
    gap: 10px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    width: 100%;
    outline: none;

    :focus{
      border: 1px solid #7C3AED;
border-radius: 4px;
    }

`;

export const DivInput = styled.div`
  width: 384px;
  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;


  }


 .enter{
  
    margin: 32px 0px;
    padding: 16px 24px;
    gap: 10px;

    width: 384px;
    height: 56px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: #ffffff;

    background: #7c3aed;
    border-radius: 4px;
  
 }
`;

export const DivEmail = styled.div`
div{
margin-bottom:8px;
}
`;

export const DivPassWord = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-top:16px;
    margin-bottom:8px;
    a {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }
  }

  .swapper{
    position: relative;
    
  }
  .btn{
      background: transparent;
      color:rgba(148, 163, 184, 1);
    }

  .icon{
   position:absolute;
  right:18px;
  width: 18px;
  height: 18px;
  
  }
`;

