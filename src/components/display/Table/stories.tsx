// Dependencies
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NumberFormat from "react-number-format";

// Component
import Table from "./";
import PriceLabel from "./components/PriceLabel";
import CoinLabel from "./components/CoinLabel";
import PercentageIndicator from "./components/PercentageIndicator";
import ConnectionStateLabel, { ConnectionStateLabelId } from "./components/ConnectionStateLabel";
import Button from "components/inputs/Button";
import DateLabel from "./components/DateLabel";

// Styles
import { Actions, CheckIconStyled } from "./styles";
import { dark } from "../../../theme";

// Assets
import CloseIcon from "assets/icons/close-icon.svg";

// Utils
import {sortByPointDecimal} from "../../../utils/numbers";

export default {
  title: "Display/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
/**
 * All the columns that include PriceLabel need to pass to their column isAlignThRight: true,
 * so that they are well aligned, it was requested that the design be like this
 * IMPORTANT if there are amounts of money use the sortByPointDecimal function to sort.
 * IMPORTANT wrap the sortByPointDecimal function always with useMemo, it must be memorized
 */
export const MyCoins = Template.bind({});
MyCoins.args = {
  columns: [
    {
      Header: "Coin",
      accessor: "coin",
    },
    {
      Header: "Total Balance",
      accessor: "totalBalance",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
    },
    {
      Header: "Available Balance",
      accessor: "availableBalance",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
    },
    {
      Header: "Locked Balance",
      accessor: "lockedBalance",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
    },
    {
      Header: "Value BTC",
      accessor: "valueInBtc",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
    },
    {
      Header: "Value in USD",
      accessor: "valueInUsd",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
    },
  ],
  data: [
    {
      coin: <CoinLabel coin={"ETH"} name={"Ethereum"} />,
      totalBalance: <PriceLabel coin={"ETH"} value={3.200} />,
      availableBalance: <PriceLabel coin={"ETHAS"} value={2.13521254} />,
      lockedBalance: <PriceLabel coin={"ETHA"} value={30.18389589} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={0.78232496} />,
      valueInUsd: <PriceLabel coin={"USD"} value={3.200} fiat />,
      action: (
        <Actions>
          <Button caption={"Deposit"} variant={"secondary"} onClick={() => {}} />
          <Button caption={"Withdraw"} variant={"secondary"} onClick={() => {}} />
        </Actions>
      ),
    },
    {
      coin: <CoinLabel coin={"BTC"} name={"Bitcoin"} />,
      totalBalance: <PriceLabel coin={"BTC"} value={18.20435} />,
      availableBalance: <PriceLabel coin={"BTC"} value={6.7352} />,
      lockedBalance: <PriceLabel coin={"BTC"} value={50.18389} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={7.382324} />,
      valueInUsd: <PriceLabel coin={"USD"} value={54000} fiat />,
      action: (
        <Actions>
          <Button caption={"Deposit"} variant={"secondary"} onClick={() => {}} />
          <Button caption={"Withdraw"} variant={"secondary"} onClick={() => {}} />
        </Actions>
      ),
    },
    {
      coin: <CoinLabel coin={"BNB"} name={"Bianance Coin"} />,
      totalBalance: <PriceLabel coin={"BNB"} value={190} />,
      availableBalance: <PriceLabel coin={"BNB"} value={5.1352} />,
      lockedBalance: <PriceLabel coin={"BNB"} value={1220} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={21.782324} />,
      valueInUsd: <PriceLabel symbol={"€"} coin={"EUR"} value={400.50} fiat />,
      action: (
        <Actions>
          <Button caption={"Deposit"} variant={"secondary"} size={"small"} onClick={() => {}} />
          <Button caption={"Withdraw"} variant={"secondary"} size={"small"} onClick={() => {}} />
        </Actions>
      ),
    },
  ],
};

export const Investors = Template.bind({});
Investors.args = {
  columns: [
    {
      Header: "User ID",
      accessor: "userId",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Investment",
      accessor: "investment",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
    },
    {
      Header: "P & L",
      accessor: "pyd",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
    },
    {
      Header: "P & L Total",
      accessor: "pydTotal",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
    },
    {
      Header: "Total Fees Paid",
      accessor: "totalFeesPaid",
      // @ts-ignore
      isAlignThRight: true,
      sortType: sortByPointDecimal(),
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
      userId: "5f886d29da8e9666b1684c9a",
      email: "tec**@zig**.com",
      investment: <PriceLabel coin={"USDT"} value={"1250"} />,
      pyd: (
        <PriceLabel
          coin={"USDT"}
          value={"37.5"}
          bottomElement={<PercentageIndicator value={3} theme={dark} />}
        />
      ),
      pydTotal: <PriceLabel coin={"USDT"} value={"145"} />,
      totalFeesPaid: <PriceLabel coin={"USDT"} value={"218"} />,
      successFee: "10%",
      feesInZig: <CheckIconStyled width="16" height="12" />  ,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
    },
    {
      userId: "7f886d29da8e9666b1684c9a",
      email: "tec**@zig**.com",
      investment: <PriceLabel coin={"USDT"} value={"98706"} />,
      pyd: (
          <PriceLabel
              coin={"USDT"}
              value={"0.354233785"}
              bottomElement={<PercentageIndicator value={7} theme={dark} />}
          />
      ),
      pydTotal: <PriceLabel coin={"USDT"} value={"23.68586856858"} />,
      totalFeesPaid: <PriceLabel coin={"USDT"} value={"71813"} />,
      successFee: "10%",
      feesInZig: <CheckIconStyled width="16" height="12" />  ,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
    },
    {
      userId: "9f886d29da8e9666b1684c9a",
      email: "tec**@zig**.com",
      investment: <PriceLabel coin={"USDT"} value={"3468"} />,
      pyd: (
          <PriceLabel
              coin={"USDT"}
              value={"637956.523"}
              bottomElement={<PercentageIndicator value={-3} theme={dark} />}
          />
      ),
      pydTotal: <PriceLabel coin={"USDT"} value={"0.347347"} />,
      totalFeesPaid: <PriceLabel coin={"USDT"} value={"09864"} />,
      successFee: "10%",
      feesInZig: <CheckIconStyled width="16" height="12" />  ,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
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
      sortType: sortByPointDecimal(),
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Entry Price",
      accessor: "entryPrice",
      sortType: sortByPointDecimal(),
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
      date: <DateLabel date={new Date(1651567879191)} />,
      orderId: "138495028471",
      pair: "XML/USDT",
      amount: <NumberFormat
          value={35.978087076}
          displayType={"text"}
          thousandSeparator={true}
      />,
      status: "Open",
      entryPrice: <NumberFormat
        value={"110.20"}
        displayType={"text"}
        thousandSeparator={true}
      />,
      side: "Buy",
      type: "Limit",
      action: (
          <Button caption={"Close"} variant={"secondary"} size={"small"} leftElement={<CloseIcon color={"#E1E9F0"} />} onClick={() => {}} />
      ),
    },
    {
      date: <DateLabel date={new Date(1751567879291)} />,
      orderId: "248495028471",
      pair: "XML/USDT",
      amount: <NumberFormat
          value={2352}
          displayType={"text"}
          thousandSeparator={true}
      />,
      status: "Open",
      entryPrice: <NumberFormat
          value={"21077.20"}
          displayType={"text"}
          thousandSeparator={true}
      />,
      side: "Buy",
      type: "Limit",
      action: (
          <Button caption={"Close"} variant={"secondary"} size={"small"} leftElement={<CloseIcon color={"#E1E9F0"} />} onClick={() => {}} />
      ),
    },
    {
      date: <DateLabel date={new Date(1851567879091)} />,
      orderId: "358495028471",
      pair: "XML/USDT",
      amount: <NumberFormat
          value={643745}
          displayType={"text"}
          thousandSeparator={true}
      />,
      status: "Open",
      entryPrice: <NumberFormat
          value={"3109.60"}
          displayType={"text"}
          thousandSeparator={true}
      />,
      side: "Buy",
      type: "Limit",
      action: (
          <Button caption={"Close"} variant={"secondary"} size={"small"} leftElement={<CloseIcon color={"#E1E9F0"} />} onClick={() => {}} />
      ),
    },
  ],
};
