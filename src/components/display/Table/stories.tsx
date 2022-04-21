// Dependencies
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Assets
import OptionsDotsIcon from "../../../assets/icons/option-dots-icon.svg";
import CheckIcon from "../../../assets/icons/check-icon.svg";

// Component
import Table from "./";
import Typography from "components/display/Typography";
import PriceLabel from "./components/PriceLabel";
import PercentageIndicator from "./components/PercentageIndicator";
import ConnectionStateLabel, { ConnectionStateLabelId } from "./components/ConnectionStateLabel";
import IconButton from "../../inputs/IconButton";
import DateLabel from "./components/DateLabel";

// Utils
import { shortenHex } from "utils/web3";

export default {
  title: "Display/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const MyCoins = Template.bind({});
//TODO: I have been seeing that I am modifying the cells of the body not the cells of the header
MyCoins.args = {
  columns: [
    {
      Header: "Coin",
      accessor: "coin",
      Cell: ({ cell: { value } }) => <Typography variant={"body2"}>{value}</Typography>,
    },
    {
      Header: "Total Balance",
      accessor: "totalBalance",
      Cell: ({ cell: { value } }) => <Typography variant={"body2"}>{value}</Typography>,
    },
    {
      Header: "Available Balance",
      accessor: "availableBalance",
      Cell: ({ cell: { value } }) => <Typography variant={"body2"}>{value}</Typography>,
    },
    {
      Header: "Locked Balance",
      accessor: "lockedBalance",
      Cell: ({ cell: { value } }) => <Typography variant={"body2"}>{value}</Typography>,
    },
    {
      Header: "Value in BTC",
      accessor: "valueInBtc",
      Cell: ({ cell: { value } }) => <Typography variant={"body2"}>{value}</Typography>,
    },
    {
      Header: "Value in USD",
      accessor: "valueInUsd",
      Cell: ({ cell: { value } }) => <Typography variant={"body2"}>{value}</Typography>,
    },
    {
      Header: "Success Fee",
      accessor: "successFee",
    },
  ],
  data: [
    {
      coin: shortenHex("5f886d29da8e9666b1684c9a"),
      totalBalance: <PriceLabel coin={"ETH"} value={"32.20435"} />,
      availableBalance: <PriceLabel coin={"ETH"} value={"2.1352"} />,
      lockedBalance: <PriceLabel coin={"ETH"} value={"30.18389"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.782324"} />,
      valueInUsd: <PriceLabel coin={"$"} value={"22,000"} fiat />,
      successFee: "10%",
      feesInZig: <img src={CheckIcon} />,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
      action: <IconButton icon={OptionsDotsIcon} />,
    },
    {
      coin: shortenHex("5f886d29da8e9666b1684c9a"),
      totalBalance: <PriceLabel coin={"ETH"} value={"32.20435"} />,
      availableBalance: <PriceLabel coin={"ETH"} value={"2.1352"} />,
      lockedBalance: <PriceLabel coin={"ETH"} value={"30.18389"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.782324"} />,
      valueInUsd: <PriceLabel coin={"$"} value={"22,000"} fiat />,
      successFee: "10%",
      feesInZig: <img src={CheckIcon} />,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
      action: <IconButton icon={OptionsDotsIcon} />,
    },
    {
      coin: shortenHex("5f886d29da8e9666b1684c9a"),
      totalBalance: <PriceLabel coin={"ETH"} value={"32.20435"} />,
      availableBalance: <PriceLabel coin={"ETH"} value={"2.1352"} />,
      lockedBalance: <PriceLabel coin={"ETH"} value={"30.18389"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.782324"} />,
      valueInUsd: <PriceLabel coin={"$"} value={"22,000"} fiat />,
      successFee: "10%",
      feesInZig: <img src={CheckIcon} />,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
      action: <IconButton icon={OptionsDotsIcon} />,
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
