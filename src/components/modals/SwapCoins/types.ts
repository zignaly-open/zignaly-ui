export interface AvaliableCoin {
  id: string;
  balance: string;
  avaliableSwapPairs: AvaliableCoin[];
}

export interface Swap {
  token: AvaliableCoin;
  value: number;
}

export interface InputModalProps {
  avaliableCoins: AvaliableCoin[];
  continueButtonOnClick: any;
  onClickClose: any;
}
