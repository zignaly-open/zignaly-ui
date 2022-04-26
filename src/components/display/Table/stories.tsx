// Dependencies
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Assets
import OptionsDotsIcon from "../../../assets/icons/option-dots-icon.svg";
import CheckIcon from "../../../assets/icons/check-icon.svg";

// Component
import Table from "./";
import Typography from "components/display/Typography";
import PriceLabel from "./components/PriceLabel";
import CoinLabel from "./components/CoinLabel";
import PercentageIndicator from "./components/PercentageIndicator";
import ConnectionStateLabel, { ConnectionStateLabelId } from "./components/ConnectionStateLabel";
import IconButton from "../../inputs/IconButton";
import Button, { ButtonVariants } from "components/inputs/Button";
import DateLabel from "./components/DateLabel";

// Styles
import { Actions } from "./styles";

// Utils
import { shortenHex } from "utils/web3";
import { weightByType } from "../Typography/types";

export default {
  title: "Display/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
/**
 * All the columns that include PriceLabel need to pass to their column isAlignThRight: true,
 * so that they are well aligned, it was requested that the design be like this
 */
export const MyCoins = Template.bind({});
MyCoins.args = {
  columns: [
    {
      Header: <Typography color={"neutral200"} variant={"body2"} weight={weightByType.regular}>{"Coin"}</Typography>,
      accessor: "coin",
    },
    {
      Header: <Typography color={"neutral200"} variant={"body2"} weight={weightByType.regular}>{"Total Balance"}</Typography>,
      accessor: "totalBalance",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: <Typography color={"neutral200"} variant={"body2"} weight={weightByType.regular}>{"Available Balance"}</Typography>,
      accessor: "availableBalance",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: <Typography color={"neutral200"} variant={"body2"} weight={weightByType.regular}>{"Locked Balance"}</Typography>,
      accessor: "lockedBalance",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: <Typography color={"neutral200"} variant={"body2"} weight={weightByType.regular}>{"Value BTC"}</Typography>,
      accessor: "valueInBtc",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: <Typography color={"neutral200"} variant={"body2"} weight={weightByType.regular}>{"Value in USD"}</Typography>,
      accessor: "valueInUsd",
      // @ts-ignore
      isAlignThRight: true,
    },
  ],
  data: [
    {
      coin: <CoinLabel coin={"ETH"} name={"Ethereum"} />,
      totalBalance: <PriceLabel coin={"ETH"} value={"3.200"} />,
      availableBalance: <PriceLabel coin={"ETHAS"} value={"2.13521254"} />,
      lockedBalance: <PriceLabel coin={"ETHA"} value={"30.18389589"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.78232496"} />,
      valueInUsd: <PriceLabel coin={"USD"} value={"3.200"} fiat />,
      action: <Actions><Button caption={"Deposit"} variant={ButtonVariants.SECONDARY} onClick={() => {}} /><Button caption={"Withdraw"} variant={ButtonVariants.SECONDARY} onClick={() => {}} /></Actions>,
    },
    {
      coin: <CoinLabel coin={"BTC"} name={"Bitcoin"} />,
      totalBalance: <PriceLabel coin={"BTC"} value={"32.20435"} />,
      availableBalance: <PriceLabel coin={"BTC"} value={"2.1352"} />,
      lockedBalance: <PriceLabel coin={"BTC"} value={"30.18389"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.782324"} />,
      valueInUsd: <PriceLabel coin={"USD"} value={"34,000"} fiat />,
      action: <Actions><Button caption={"Deposit"} variant={ButtonVariants.SECONDARY} onClick={() => {}} /><Button caption={"Withdraw"} variant={ButtonVariants.SECONDARY} onClick={() => {}} /></Actions>
    },
    {
      coin: <CoinLabel coin={"BNB"} name={"Bianance Coin"} />,
      totalBalance: <PriceLabel coin={"BNB"} value={"350"} />,
      availableBalance: <PriceLabel coin={"BNB"} value={"2.1352"} />,
      lockedBalance: <PriceLabel coin={"BNB"} value={"350"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.782324"} />,
      valueInUsd: <PriceLabel coin={"EUR"} value={"400"} fiat />,
      action: <Actions><Button caption={"Deposit"} variant={ButtonVariants.SECONDARY} onClick={() => {}} /><Button caption={"Withdraw"} variant={ButtonVariants.SECONDARY} onClick={() => {}} /></Actions>
    },
  ],
};

export const Investors = Template.bind({});
Investors.args = {
  columns: [
    {
      Header: "User ID",
      accessor: "userId",
      Cell: ({ cell: { value } }) => <Typography variant={"body2"}>{value}</Typography>,
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Investment",
      accessor: "investment",
    },
    {
      Header: "P & L",
      accessor: "pyd",
    },
    {
      Header: "P & L Total",
      accessor: "pydTotal",
    },
    {
      Header: "Total Fees Paid",
      accessor: "totalFeesPaid",
    },
    {
      Header: "Success Fee",
      accessor: "successFee",
    },
    {
      Header: "Fees in ZIG",
      accessor: "feesInZig",
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ],
  data: [
    {
      userId: shortenHex("5f886d29da8e9666b1684c9a"),
      email: "tec**@zig**.com",
      investment: <PriceLabel coin={"USDT"} value={"1250"} />,
      pyd: (
        <PriceLabel
          coin={"USDT"}
          value={"37.5"}
          bottomElement={<PercentageIndicator value={3} />}
        />
      ),
      pydTotal: <PriceLabel coin={"USDT"} value={"145"} />,
      totalFeesPaid: <PriceLabel coin={"USDT"} value={"218"} />,
      successFee: "10%",
      feesInZig: <img src={CheckIcon} />,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
      action: <IconButton icon={OptionsDotsIcon} />,
    },
  ],
};

export const ExchangeOrders = Template.bind({});
ExchangeOrders.args = {
  columns: [
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Order ID",
      accessor: "orderId",
    },
    {
      Header: "Pair",
      accessor: "pair",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Entry Price",
      accessor: "entryPrice",
    },
    {
      Header: "Side",
      accessor: "side",
    },
    {
      Header: "Type",
      accessor: "type",
    },
  ],
  data: [
    {
      date: <DateLabel date={new Date()} />,
      orderId: "138495028471",
      pair: "XML/USDT",
      amount: 25,
      status: "Open",
      entryPrice: "110.20",
      side: "Buy",
      type: "Limit",
    },
  ],
};

export const Contracts = Template.bind({});
Contracts.args = {
  columns: [
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Order ID",
      accessor: "positionId",
    },
    {
      Header: "Pair",
      accessor: "pair",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Side",
      accessor: "side",
    },
    {
      Header: "Entry Price",
      accessor: "entryPrice",
    },
    {
      Header: "Market Price",
      accessor: "marketPrice",
    },
    {
      Header: "Margin",
      accessor: "margin",
    },
  ],
  data: [
    {
      date: <DateLabel date={new Date()} />,
      positionId: <div style={{ color: "#706F82" }}>mhAtXCp3BoaWgE5G8JJFD</div>,
      pair: "XML/USDT",
      amount: 25,
      side: "Both",
      entryPrice: "110.20",
      marketPrice: "114.20",
      margin: "Cross",
    },
  ],
};
