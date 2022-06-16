import Button from "components/inputs/Button";
import InputAmount from "components/inputs/InputAmount";
import ModalContainer from "components/modals/ModalContainer";
import React, { useState } from "react";
import { AvaliableCoin, InputModalProps, Swap } from "../types";
import { ButtonContainer, IconContainer } from "./styles";
import SwapIcon from "assets/icons/swap-icon.svg";
import { dark } from "theme";
import { Gap } from "utils/gap";

const InputModal = ({
  avaliableCoins,
  continueButtonOnClick = () => {},
  onClickClose = () => {},
}: InputModalProps) => {
  const [swapFrom, setSwapFrom] = useState<Swap>();
  const [swapTo, setSwapTo] = useState<AvaliableCoin[]>();

  return (
    <ModalContainer title="Swap Coins" onClickClose={onClickClose}>
      <Gap gap={9} />
      <InputAmount
        label={"Swap from"}
        value={""}
        onChange={({ value, token }: any) => {
          console.log(value);
          console.log(token);
        }}
        tokens={avaliableCoins}
      />
      <IconContainer>
        <SwapIcon width={40} height={40} color={dark["neutral300"]} />
      </IconContainer>
      <InputAmount
        label={"Swap to"}
        value={"1"}
        onChange={({ value, token }: Swap) => {}}
        tokens={swapTo}
      />
      <ButtonContainer>
        <Button
          size="xlarge"
          caption={"Continue to Confirmation"}
          onClick={() => continueButtonOnClick({ swapFrom, swapTo })}
        />
      </ButtonContainer>
    </ModalContainer>
  );
};

export default InputModal;
