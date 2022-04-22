// Dependencies
import React from "react";

// Styled Components
import { Layout, WrapCoin, Coin, Name, Icon } from "./styles";

// Types
import { CoinLabelProps } from "./types";

const CoinLabel = ({ name = "TEATHER", coin = "USDT" }: CoinLabelProps) => (
  <Layout>
    <Icon coin={coin} name={name} />
    <WrapCoin>
      <Coin variant={"h3"}>{coin}</Coin>
      <Name variant={"h3"}>{name}</Name>
    </WrapCoin>
  </Layout>
);

export default CoinLabel;
