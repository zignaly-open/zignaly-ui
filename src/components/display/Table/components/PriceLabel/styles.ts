// Dependencies
import styled from "styled-components";

import Typography from "components/display/Typography";
import { styledIf } from "utils/styled";

export const Layout = styled.div``;

export const Value = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #c1c1c8;
`;

export const Coin = styled(Typography)<{ fiat: boolean }>`
  color: #706f82;
  margin: 0 4px;
  text-transform: uppercase;
  width: 45px;
  text-align: left;
  ${(props) => `
     ${styledIf(
       props.fiat,
       `
   
      color: #C1C1C8;
       margin: 0;
    `,
       `
      color: #706f82;
      margin: 0 4px;
    `,
     )}
  `}
`;
