// Dependencies
import styled from "styled-components";

import Typography from "components/display/Typography";
import CoinIcon from "components/display/CoinIcon";

export const Layout = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WrapCoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Icon = styled(CoinIcon)`
  display: flex;
  margin-right: 12px;
`;

export const Name = styled(Typography)`
  display: flex;
  color: #89899a;
`;

export const Coin = styled(Typography)`
  display: flex;
  color: #c1c1c8;
  text-transform: uppercase;
`;
