type CoinProps = {
  image: string;
  name: string;
}

export type EditInvestmentWithModalProps = {
  investorName: String;
  investorPictureUrl: String;
  investorSuccessFee: String | Number;
  pendingTransaction: Number | null | any;
  amountInvested: number | string | any;
  coin?: CoinProps;
}