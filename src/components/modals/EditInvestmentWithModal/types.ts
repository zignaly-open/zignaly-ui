type CoinProps = {
  id: string;
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

export const viewsIds = {
  EDIT_INVESTMENT: 'edit-investment',
  PENDING_TRANSACTIONS: 'pending-transactions'
};