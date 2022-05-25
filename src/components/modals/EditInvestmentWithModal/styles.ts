// Dependencies
import styled from 'styled-components';
import Typography from "../../display/Typography";

export const Investor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  align-items: center;
`;

export const InvestorData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InvestorName = styled(Typography)``;

export const InvestorSuccessFee = styled(Typography)<any>``;

export const PendingTransaction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  margin: 42px 0;
  
  ${({theme}) => (`
    gap: 22px;
    border: 1px solid ${theme['yellow']};
    background: ${theme['neutral700']};
    border-radius: 5px;
    
    svg {
      width: 14px;
      height: 14px;
      fill: ${theme['yellow']};
    }
  `)}
`;