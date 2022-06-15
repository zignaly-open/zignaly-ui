import Button from "components/inputs/Button";
import InputAmount from "components/inputs/InputAmount";
import ModalContainer from "components/modals/ModalContainer";
import React, { useState } from "react";
import { InputModalProps, Swap } from "../types";
import { ButtonContainer, IconContainer } from "./styles";
import SwapIcon from "assets/icons/swap-icon.svg";
import { dark } from "theme";

const InputModal = ({
  avaliableCoins,
  continueButtonOnClick = () => {},
  onClickClose = () => {},
}: InputModalProps) => {
  const [swapFrom, setSwapFrom] = useState<Swap>();
  const [swapTo, setSwapTo] = useState<Swap>();

  return (
    <ModalContainer title="Swap Coins" onClickClose={onClickClose}>
      <InputAmount
        label={"Swap from"}
        value={""}
        onChange={({ value, token }: Swap) => setSwapFrom({ token: token, value: value })}
        tokens={avaliableCoins}
      />
      <IconContainer>
        <SwapIcon width={40} height={40} color={dark["neutral300"]} />
      </IconContainer>
      <InputAmount
        label={"Swap to"}
        value={""}
        onChange={({ value, token }: Swap) => setSwapTo({ token: token, value: value })}
        tokens={avaliableCoins}
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
