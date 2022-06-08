export interface ConfirmWithdrawalModalProps {
  networkCaption: string;
  withdrawAddress: string;
  onGoBack?: Function;
  onClickWithdraw?: Function;
  withdrawalAmount: number;
  netWorkFee: number;
}
