// Dependencies
import styled from "styled-components";

export const Layout = styled.div``;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const InputContainer = styled.div`
  border: 1px solid #413ba0;
  padding: 16px 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: #0c0d21;
`;

export const TokenImage = styled.img`
  max-width: 33px;
  margin-right: 20px;
`;

export const InputValue = styled.input`
  padding-right: 22px;
  background: transparent;
  border: none;
  color: #f3f4f6;
  outline: none;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.66px;
  width: 100%;
`;

export const BalanceContainer = styled.div`
  padding: 16px 0;
`;

export const BalanceLabel = styled.span`
  padding-right: 4px;
  color: #9ca3af;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

export const BalanceValue = styled.span`
  color: #f3f4f6;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
